import React, { Component, Fragment } from 'react';
import Debounce from 'lodash-decorators/debounce';
import Bind from 'lodash-decorators/bind';
import { connect } from 'dva';
import { Button, Menu, Dropdown, Icon, Row, Col, Steps, Card, Popover, Badge, Table, Divider, Select, Rate } from 'antd';
import { DataSet } from '@antv/data-set';
import classNames from 'classnames';
import DescriptionList from 'components/DescriptionList';
import PageHeaderLayout from '../../layouts/PageHeaderLayout';
import GetEvaluateType_hb from 'components/GetEvaluateType_hb';
import styles from './AdvancedProfile.less';
import { Base } from 'components/Echarts';

const { Step } = Steps;
const { Description } = DescriptionList;
const Option = Select.Option;

const getWindowWidth = () => (window.innerWidth || document.documentElement.clientWidth);

const operationTabList = [{
  key: 'tab1',
  tab: '同比分析',
}, {
  key: 'tab2',
  tab: '环比分析',
}];


@connect(({ getRoadNowInfo, loading }) => ({
  getRoadNowInfo,
  loading: loading.models.getRoadNowInfo,
}))
@connect(({ getRoadList, loading }) => ({
  getRoadList,
  loading: loading.models.getRoadList,
}))
@connect(({ getEvaluateType, loading }) => ({
  getEvaluateType,
  loading: loading.models.getEvaluateType,
}))
@connect(({ getEvaluateType_hb, loading }) => ({
  getEvaluateType_hb,
  loading: loading.models.getEvaluateType_hb,
}))

export default class Roadassess extends Component {
  constructor(){
    super();
    const dv = [];
    const dv_hb = [];
    const cols = [];
    const cols_hb = [];
    const EvaluateType_hb = [];
  }
  state = {
    operationkey: 'tab1',
  }

  componentDidMount() {
    const { dispatch } = this.props;
    this.props.dispatch({
      type: 'getRoadList/getRoadList',
      payload: {
        'UserID': localStorage.getItem('UserID'),
        //'RoadID':
      }
    });
    this.getOneRoad();
  }
  getOneRoad() {
    this.props.dispatch({
      type: 'getRoadNowInfo/getRoadNowInfo',
      payload: {
        'UserID': localStorage.getItem('UserID'),
        'RoadID': localStorage.getItem("selectRoadId")
      }
    })
    this.props.dispatch({
      type: 'getEvaluateType/getEvaluateType',
      payload: {
        'UserID': localStorage.getItem('UserID'),
        'RoadID': localStorage.getItem("selectRoadId"),
        'RoadClass':'总'
      }
    })
    this.props.dispatch({
      type: 'getEvaluateType_hb/getEvaluateType_hb',
      payload: {
        'UserID': localStorage.getItem('UserID'),
        'RoadID': localStorage.getItem("selectRoadId"),
        'RoadClass':'总'
      }
    })
  }
  onOperationTabChange = (key) => {
    this.setState({ operationkey: key });
  }
  handleChange = (value, title) => {
    localStorage.setItem("selectRoadId", value);
    localStorage.setItem("selectRoadName", title.props.children);
    this.getOneRoad();
  }
  render() {
    // console.log(getRoadNowInfo);
    const {
      getRoadList: { getRoadList },
      getRoadNowInfo: { getRoadNowInfo },
      getEvaluateType:{getEvaluateType},
      getEvaluateType_hb:{getEvaluateType_hb},
      loading
    } = this.props;
    const Roadlist = getRoadList;
    
    if (Roadlist && Roadlist.length > 0) {
      if (localStorage.getItem("selectRoadId") === null || localStorage.getItem("selectRoadName") === null) {
        localStorage.setItem("selectRoadId", Roadlist[0].RoadID);
        localStorage.setItem("selectRoadName", Roadlist[0].BI_RoadName);
      }
    }
    if (getRoadNowInfo && getRoadNowInfo.length > 0) {
      this.lev = getRoadNowInfo.CT_Road.lev;
      //
      this.BI_RoadLength = getRoadNowInfo.CT_Road.BI_RoadLength;
      this.RoadLastPQI = getRoadNowInfo.CT_Road.RoadLastPQI;
      this.BI_ManageUnit = getRoadNowInfo.CT_Road.BI_ManageUnit;
      this.RoadLastTime = getRoadNowInfo.CT_Road.RoadLastTime;
      this.RoadEditTime = getRoadNowInfo.CT_Road.RoadEditTime;
    }

    const chartLineData = [];
    if( getEvaluateType ){
      
      const EvaluateType  = getEvaluateType.list;
      // const ds = new DataSet();
    
      // this.dv = ds.createView().source(EvaluateType);
      // this.dv.dataSet.rows = [2];
      // this.dv.transform({
      //   type: 'fold',
      //   fields: ["DEF", "RQI", "PQI", "PCI", "TD", "SFC", "层厚"],
      //   key: 'key',
      //   value: 'value',
      // });
    
      // console.log(this);

      // this.cols = {
      //   month: {
      //     range: [0, 1]
      //   }
      // };

      // chartData.push( <Base key={"k_"+v} chartId={'id_'+v} title={v} data={xyData} type='bar'/>);
      for(let v in EvaluateType){
        let xyData = {};
        
        xyData = {
          x: EvaluateType[v].x,
          y: EvaluateType[v].y,
        }

      
        chartLineData.push( <Base key={"km_"+v} chartId={'idm_'+v} title={v} data={xyData} type='line'/>);
      }

    }

    // console.log(getEvaluateType_hb);
    const chartData = [];
    if(getEvaluateType_hb ){
      const EvaluateType_hb  = getEvaluateType_hb;
      // this.dv_hb = EvaluateType_hb;
      for(let v in EvaluateType_hb){
        let xyData = {};
        

        // for (let i = 0; i < 12; i += 1) {
        //   salesData.push({
        //     x: `${i + 1}月`,
        //     y: Math.floor(Math.random() * 1000) + 200,
        //   });
        // }
        xyData = {
          x: EvaluateType_hb[v].x,
          y: EvaluateType_hb[v].y,
        }

      
      chartData.push( <Base key={"k_"+v} chartId={'id_'+v} title={v} data={xyData} type='bar'/>);
      }

    }
    
    const action = (
      <Fragment>
        <Select
          showSearch
          style={{ width: 200 }}
          defaultValue={localStorage.getItem("selectRoadName")}
          placeholder="Select a person"
          optionFilterProp="children"
          onChange={this.handleChange}
          filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
        >
          {Roadlist.map(d => <Option key={d.RoadID}>{d.BI_RoadName}</Option>)}
        </Select>
      </Fragment>
    );
    const description = (
      <DescriptionList className={styles.headerList} size="small" col="2">
        <Description term="全长">{this.BI_RoadLength}</Description>
        <Description term="车道数">{this.RW_LaneNumber}</Description>
        <Description term="评定等级">{this.RoadLastPQI}</Description>
        <Description term="管理单位"><a>{this.BI_ManageUnit}</a></Description>
        <Description term="最近评定日期">{this.RoadLastTime}</Description>
        <Description term="最近养护日期">{this.RoadEditTime}</Description>
      </DescriptionList>
    );
    const extra = (
      <Row>
        <Col xs={24} sm={24}>
          <Rate disabled value={this.lev} />
        </Col>
      </Row>
    );
    // console.log(this);
    const contentList = {
      tab1: 
      // <Chart height={450} data={this.dv} scale={this.cols} forceFit>
      //   <Legend />
      //   <Axis name="month" />
      //   <Axis name="value" />
      //   <Tooltip crosshairs={{ type: "y" }} />
      //   <Geom type="line" position="month*value" size={2} color={'key'} shape={'hv'} />
      // </Chart>,
      chartLineData,
      tab2:
      chartData
    };
    return (
      <PageHeaderLayout
        title={"名称：" + localStorage.getItem("selectRoadName")}
        logo={<img alt="" src="https://gw.alipayobjects.com/zos/rmsportal/nxkuOJlFJuAUhzlMTCEe.png" />}
        action={action}
        content={description}
        extraContent={extra}
      >
        <Card
          
          className={styles.tabsCard}
          bordered={false}
          tabList={operationTabList}
          onTabChange={this.onOperationTabChange}
        >
          {contentList[this.state.operationkey]}
        </Card>
      </PageHeaderLayout>
    );
  }
}
