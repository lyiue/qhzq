import React, { Component, Fragment } from 'react';
import { Map } from 'react-amap';
import GisPointCard from '../GisPointCard';
export default class GisPoint extends React.Component {
    constructor() {
      super();
      const fData = [];
    }
    state={
        clickPath:[],
        close:'none'
    }
    changeCardShow(){
        this.setState({
            close:'none'
        })
    }
    loadUI() {
      window.AMapUI.loadUI(['misc/PointSimplifier'], (PointSimplifier) => {
        this.initPage(PointSimplifier);
      })
    }
    initPage(PointSimplifier) {
        const map = this.props.__map__;
        const clickPath = this.props.data.message;
        //console.log(clickPath);
        var pointSimplifierIns, groupStyleMap;
            pointSimplifierIns = new PointSimplifier({
                zIndex: 115,
                autoSetFitView: false,
                map: map, //所属的地图实例
                getPosition: function(item) {
    
                     var lngLatLine = item.lngLatLine;
    
                     if (!lngLatLine) {
                         return null;
                     }
    
                     var parts = lngLatLine;
    
                    return [parseFloat(parts[0]), parseFloat(parts[1])];
                },
                getHoverTitle: function(dataItem, idx) {
                    return '次要病害点: ' + idx;
                },
                //使用GroupStyleRender
                renderConstructor: PointSimplifier.Render.Canvas.GroupStyleRender,
                renderOptions: {
                    // //点的样式
                    pointStyle: {
                        width: 7,
                        height: 7,
                        fillStyle:null
                    },
                    topNAreaStyle: null,
                    getGroupId: function(item, idx) {
                        //console.log(idx);
                        return  item.groupId;
                    },
                    // groupStyleOptions: function(gid) {
                    //     var radius = 2 + 10 * Math.random();
                    //     return groupStyleMap[gid];
                    // },
                    groupStyleOptions: function(gid) {
    
                        //随机设置大小
                        var radius = 2 + 10 * Math.random();
    
                        return {
    
                            pointStyle: radius > 0 ? {
                                content: function(ctx, x, y, width, height) {
    
                                    var p = {
                                        x: x + width / 2,
                                        y: y + height / 2,
                                        radius: radius
                                    };
    
                                    ctx.beginPath();
                                    var gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius);
                                    gradient.addColorStop(0, "rgba(7,120,249,.8)");
                                    gradient.addColorStop(1, "rgba(7,120,249,.3)");
                                    ctx.fillStyle = gradient;
                                    ctx.arc(p.x, p.y, p.radius, 0, 2*Math.PI);
                                    ctx.fill();
    
                                },
    
                                //fillStyle: colors[gid % colors.length],
                                width: radius * 2,
                                height: radius * 2
                            } : null,
                            pointHardcoreStyle: {
                                width: radius * 2 + 3,
                                height: radius * 2 + 3
                            }
                        };         
                    }
                }
                
        })
        //监听事件
        pointSimplifierIns.on('pointClick', function(e, record) {
            // console.log(e);
            this.setState({
                clickPath:clickPath[record.index],
                close:'block'
            })
            //console.log(clickPath[record.index]);
            if(record.index>=0){
                //console.log(record.index);
            }
        }.bind(this));
        var d=[];
        if(d.length<1){
            const line500 = this.fData.message;
            const point500 = [];
            const data500 = [];
            for(var j=0;j<line500.length;j++){ 
                point500.push({
                    0:line500[j].GPS[0],
                    1:line500[j].GPS[1]
                })
                
                
            }
            for (var i = 0, len = point500.length; i < len; i++) {
                data500.push({
                    lngLatLine: point500[i],
                });
            }
        //重复render
        // setInterval(function() {
        //     pointSimplifierIns.render();
        // }, 500)
        pointSimplifierIns.setData(data500);
        }       
    }
    componentDidMount (){
        //this.loadUI(); 
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.data.length<1){
           
        }else{
            this.fData = nextProps.data;
            if(this.fData !== nextProps.data){
                nextProps.data == this.fData;
                this.loadUI(); 
            }else{
                this.loadUI(); 
            }
            return;
        }
    }
    shouldComponentUpdate(nextProps,nextState){
        if (this.fData !== nextProps.data) {
            return true;
        }
        return true;
    }
    render() {
        // console.log(this.state);
        return (
            <GisPointCard data={this.state.clickPath} close={this.state.close} changeCardShow={this.changeCardShow.bind(this)}></GisPointCard>
        ) 
    }
}

