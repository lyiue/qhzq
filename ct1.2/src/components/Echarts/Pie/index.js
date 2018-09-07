import React, { Component, Fragment } from 'react';
import echarts from 'echarts';
import styles from './index.less';

export default class Pie extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    // 基于准备好的dom，初始化echarts实例
    let myChart = echarts.init(document.getElementById(this.props.chartId));
    // 绘制图表
    myChart.setOption({
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            textStyle:{
                fontSize:15,
                // color:'#fff'
            },
            orient: 'vertical',
            left: 'left',
            data: this.props.legend
        },
        series : [
            {
                name: '',
                type: 'pie',
                radius : '55%',
                center: ['50%', '60%'],
                data:this.props.data,
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    });
  }
  render() {
      return (
          <div id={this.props.chartId} style={{ width: this.props.width?this.props.width:400, height: this.props.height?this.props.height:400 }} ></div>
      );
  }
}