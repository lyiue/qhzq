import React, { Component } from 'react';
import G2 from '@antv/g2';
import { DataSet } from '@antv/data-set';

export default class RadialChart extends React.Component {
    constructor() {
      super();
      this.chart =null;
    }
    didChart(){
      const data = this.props;
      this.chart = new G2.Chart({
        container: data.container,
        forceFit: true,
        height: window.innerHeight,
        padding: [ 20, 20 ]
      });
    }
    renderChart(){
        const data = this.props;
        this.chart = new G2.Chart({
          container: data.container,
          forceFit: true,
          height: window.innerHeight,
          padding: [ 20, 20 ]
        });
        console.log(data);
        
        if(data.PCI === undefined){
          
        }else{
          const PCI = [
            {"term":"PCI","count":data.PCI}]
            this.chart = new G2.Chart({
              container: data.container,
              forceFit: CDATASection.HEI,
              height: data.height,
              padding: [ 20, 20 ]
            });
            this.chart.source(PCI, {
                count: {
                  max: 100
                }
              });
              this.chart.coord('theta', {
                innerRadius: 0.2,
                endAngle: Math.PI
              });
              this.chart.interval()
                  .position('term*count')
                  .color('#8543e0')
                  .shape('line')
                  .select(false)
                  .style({
                    lineAppendWidth: 10
                  }); // 线状柱状图
                  this.chart.point()
                  .position('term*count')
                  .color('#8543e0')
                  .shape('circle');
              for(let i = 0, l = data.length; i < l; i++) {
                const obj = data[i];
                this.chart.guide().text({
                  position: [ obj.term, 0 ],
                  content: obj.term + ' ',
                    style:{
                      textAlign: 'right'
                    }
                  });
                }
                this.chart.guide().text({
                position: [ '50%', '50%' ],
                content: 'PCI',
                style: {
                  textAlign: 'center',
                  fontSize: 24,
                  fill: '#8543e0'
                }
              });
              this.chart.render();
        }
        
    }
    // componentDidMount(){
    //   this.didChart();
    // }
    componentWillReceiveProps(){
      this.renderChart();
    }

    render(){
        return('')
    }
}