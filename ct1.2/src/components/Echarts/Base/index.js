import React, { Component, Fragment } from 'react';
import echarts from 'echarts';
import styles from './index.less';

export default class Base extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    // 基于准备好的dom，初始化echarts实例
    let myChart = echarts.init(document.getElementById(this.props.chartId));
    // 绘制图表
    myChart.setOption({
        title: { text: this.props.title },
        tooltip: {},
        xAxis: {
            data: this.props.data.x
        },
        yAxis: {},
        series: [{
            name: this.props.title,
            barWidth:'10%',
            type: this.props.type,
            data: this.props.data.y
        }]
    });
  }
  render() {
      return (
          <div id={this.props.chartId} style={{ width: this.props.width?this.props.width:400, height: this.props.height?this.props.height:400 }} className={styles.fl}></div>
      );
  }
}