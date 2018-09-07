import React, { Component } from 'react';
import { DataSet } from '@antv/data-set';
import { Chart, Axis, Geom, Tooltip, Legend } from 'bizcharts';
import Debounce from 'lodash-decorators/debounce';
import Bind from 'lodash-decorators/bind';
import G2 from '@antv/g2';

export default class GetEvaluateType_hb extends React.Component {
  constructor() {
    super();

  }
  render() {
    const { height,data,fields ,container} = this.props;
    const ds = new DataSet();
    const dv = ds.createView().source(data);
    dv.transform({
        type: 'fold',
        fields:fields, // 展开字段集
        key: 'city', // key字段
        value: 'y', // value字段
    });
    const chart = new G2.Chart({
        container: container,
        forceFit: true,
        height: height
    });
    chart.source(dv, {
        time: {
        range: [ 0, 1 ]
        }
    });
    chart.tooltip({
        crosshairs: {
        type: 'line'
        }
    });
    chart.axis('y', {
        label: {
        formatter: val => {
            return val;
        }
        }
    });
    chart.line().position('time*y').color('city').shape('smooth');
    chart.point().position('time*y').color('city').size(4).shape('circle').style({
        stroke: '#fff',
        lineWidth: 1
    });
    chart.render();
        return(''); 
    }
}