import React, { Component,PureComponent } from 'react';
import { Map } from 'react-amap';
export default class GisPathB extends React.Component {
    constructor() {
      super();
      const fData = [];
    }
    loadUI() {
        window.AMapUI.loadUI(['misc/PathSimplifier'], (PathSimplifier)=> {
            this.initLine(PathSimplifier);
        });
    }
    initLine(PathSimplifier) {
        const map = this.props.__map__;
        const color = this.props.color;
        const pathSimplifierIns = new PathSimplifier({
            zIndex: 100,
            autoSetFitView:false,
            map: map, //所属的地图实例
            
            getPath: function(pathData, pathIndex) {
                return pathData.path;
            },
            getHoverTitle: function(pathData, pathIndex, pointIndex) {
            
                if (pointIndex >= 0) {
                    //point 
                    
                    return pathData.name 
                    //+ '，点：' + pointIndex + '/' + pathData.path.length;
                }

                return pathData.name;
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

                    let 
                    //color = colors[pathItem.pathIndex % colors.length],
                        lineWidth = 5

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
            //console.log(info.pathData)
            const infoPathData  =info.pathData;
            localStorage.setItem("infoPathData",infoPathData);
        }); 

        let d = [];
        let obj = {};
        if(d.length<1){
            const data = this.fData.message;  
            // console.log(this.fData);
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
        //this.state.fData = this.props.data;
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.data.length<1){
           
            //return;
        }else{
            if(this.fData !== nextProps.data){
                this.fData = nextProps.data;
                this.loadUI(); 
            }
            return;
        }
    }
    shouldComponentUpdate(nextProps,nextState){
        if(this.fData){
            if (this.fData.message.length !== nextProps.data.message.length) {
                return true;
            }  
        }
        return false;
    }

    render() {
        return null;  
    }
}