import React, { Component,PureComponent } from 'react';
import { Virtualized } from "react-virtualized";
import { Map } from 'react-amap';
import { message} from 'antd';
import GisCard from '../GisCard';
export default class GisPathZ extends React.Component {
    constructor() {
      super();
      const fData = [];
      
    }
    state={
        clickPath:[],
        close:'none',
        RoadID:''
    }
    changeCardShow(){
        this.setState({
            close:'none'
        })
    }
    loadUI() {
        window.AMapUI.loadUI(['misc/PathSimplifier'], (PathSimplifier)=> {
            this.initLine(PathSimplifier);
        });
    }
    initLine(PathSimplifier) {
        const map = this.props.__map__;
        const color = this.props.color;
        const clickPath = this.props.data.message;
        const pathSimplifierIns = new PathSimplifier({
            zIndex: 100,
            autoSetFitView:false,
            map: map, //所属的地图实例
            
            getPath: function(pathData, pathIndex) {
                return pathData.path;
            },
            getHoverTitle: function(pathData, pathIndex, pointIndex) {
                // console.log(pathData)
                // if (pointIndex >= 0) {
                //     //point  
                //     return pathData.name 
                //     //+ '，点：' + pointIndex + '/' + pathData.path.length;
                // }
                // return pathData.name;
                if (pointIndex >= 0) {
                    //point 
                    return pathData.name + '，点：' + pointIndex + '/' + pathData.path.length;
                }
                return pathData.name + '，点数量' + pathData.path.length;
            },
            clickToSelectPath:false,
            renderOptions: {
                startPointStyle: {
                    radius: 0.5,
                    fillStyle: color,
                    lineWidth: 1,
                    strokeStyle: color
                },
                endPointStyle: {
                    radius: 0.5,
                    fillStyle: color,
                    lineWidth: 1,
                    strokeStyle: color
                },
                pathLineStyle: {
                    dirArrowStyle: false
                },
                getPathStyle: function(pathItem, zoom) {

                    const lineWidth = 5
                    return {
                        pathLineStyle: {
                            strokeStyle: color,
                            lineWidth: lineWidth,
                            borderStyle:0,
                            borderWidth:0
                        },
                        pathLineSelectedStyle: {
                            // lineWidth: lineWidth + 2
                            
                        },
                        pathNavigatorStyle: {
                            fillStyle: color
                        }
                    };
                }
            },
        });

        window.pathSimplifierIns = pathSimplifierIns; 
        pathSimplifierIns.on('pathClick pointClick', function(e, info){
            
            this.setState({
                clickPath:clickPath[info.pathIndex],
                close:'block',
                RoadID:localStorage.setItem("selectRoadId",clickPath[info.pathIndex].RoadID),
                RoadID:localStorage.setItem("selectRoadName",clickPath[info.pathIndex].name)
            })
            // if(info.pointIndex>=0){
            // }
        }.bind(this)); 
        let d = [];
        let obj = {};
        if(d.length<1){
            const data = this.fData.message;  
            // if(parseInt(localStorage.getItem("datalength")) !== this.state.fData.message.length){
            //     return
            // }else{
                for (let i = 0, len = data.length; i < len; i++) {
                    obj={
                        name:data[i].name,
                        path:data[i].path
                    }
                    d.push(obj);
                }
                // console.log(d);
                pathSimplifierIns.setData(d);
                pathSimplifierIns.renderLater();  
        }      
    }          
    componentDidMount (){

    }
    componentWillReceiveProps(nextProps){
        if(nextProps.data.length<1||nextProps.data === undefined){
            message.loading('加载中，请稍后...', 1);
        }else{
            if(this.fData !== nextProps.data){
                this.fData = nextProps.data;
                this.loadUI(); 
            }
            return;
        }
    }
    shouldComponentUpdate(nextProps,nextState){
        return true; 
    }
    componentDidUpdate(){
        // console.log(787878787);
    }
    componentWillUpdate(){
        // message.loading('加载中，请稍后...', 1);
    }
    render() {
        // console.log(this.state);
        // console.log(this.props);
        return (
            <GisCard data={this.state.clickPath} close={this.state.close} changeCardShow={this.changeCardShow.bind(this)}></GisCard>
        )
    }
}