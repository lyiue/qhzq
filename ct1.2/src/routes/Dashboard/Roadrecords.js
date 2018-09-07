import React, { Component, Fragment } from 'react';
import Debounce from 'lodash-decorators/debounce';
import Bind from 'lodash-decorators/bind';
import { connect } from 'dva';
import { Button, Menu, Dropdown, Icon, Row, Col, Steps, Card, Popover, Badge, Table, Tooltip, Divider,Select,Rate } from 'antd';
import classNames from 'classnames';
import DescriptionList from 'components/DescriptionList';
import PageHeaderLayout from '../../layouts/PageHeaderLayout';
import styles from './AdvancedProfile.less';

const { Step } = Steps;
const { Description } = DescriptionList;
const Option = Select.Option;

const getWindowWidth = () => (window.innerWidth || document.documentElement.clientWidth);

const operationTabList = [{
  key: 'tab1',
  tab: '行车道检测',
}, {
  key: 'tab2',
  tab: '人行道检测',
}, {
  key: 'tab3',
  tab: '设备维修卡',
}];
const columns = [{
  title: '评价内容',
  dataIndex: 'name',
  key: 'name',
  children: [{
    title: '评价指标',
    dataIndex: 'RoadCheckTime',
    key: 'RoadCheckTime',
    width: 100,
  }]
}, {
  title: '综合评价指数',
  children: [{
    title: 'PQI',
    dataIndex: 'RoadPQI',
    key: 'RoadPQI',
    width: 200,
  }, {
    title: '等级',
    dataIndex: 'RoadPQILevel',
    key: 'RoadPQILevel',
    width: 200,
  }],
}, {
  title: '平整度',
  children: [{
    title: 'RQI/IRI',
    dataIndex: 'RoadRQI',
    key: 'RoadRQI',
    width: 200,
  }, {
    title: '等级',
    dataIndex: 'RoadRQILevel',
    key: 'RoadRQILevel',
    width: 200,
  }],
},{
  title: '破损情况',
  children: [{
    title: 'PCI',
    dataIndex: 'RoadPCI',
    key: 'RoadPCI',
    width: 200,
  }, {
    title: '等级',
    dataIndex: 'RoadPCILevel',
    key: 'RoadPCILevel',
    width: 200,
  }],
},{
  title: '抗滑能力',
  children: [{
    title: 'BPN/SFC',
    dataIndex: 'RoadSFC',
    key: 'RoadSFC',
    width: 200,
  }, {
    title: '等级',
    dataIndex: 'RoadSFCLevel',
    key: 'RoadSFCLevel',
    width: 200,
  }],
},{
  title: '交通量',
  children: [{
    title: 'AADT',
    dataIndex: 'AADT',
    key: 'AADT',
    width: 200,
  }, {
    title: '等级',
    dataIndex: 'level4',
    key: 'level4',
    width: 200,
  }],
},{
  title: '强度',
  children: [{
    title: '弯沉',
    dataIndex: 'down',
    key: 'down',
    width: 200,
  }, {
    title: '等级',
    dataIndex: 'level5',
    key: 'level5',
    width: 200,
  }],
}];

@connect(({ getRoadNowInfo, loading }) => ({
  getRoadNowInfo,
  loading: loading.models.getRoadNowInfo,
}))
@connect(({ getRoadList, loading }) => ({
  getRoadList,
  loading: loading.models.getRoadList,
}))
@connect(({ getRoadCarInfo, loading }) => ({
  getRoadCarInfo,
  loading: loading.models.getRoadCarInfo,
}))
export default class Roadrecords extends React.Component {
  constructor(){
    super();
  }
  state = {
    operationkey: 'tab1',
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'getRoadList/getRoadList',
      payload:{
        'UserID': localStorage.getItem('UserID'),
        //'RoadID':
      }
    });
    this.getOneRoad();
  }

  onOperationTabChange = (key) => {
    this.setState({ operationkey: key });
  }
  handleChange =(value,title) => {
    localStorage.setItem("selectRoadId",value);
    localStorage.setItem("selectRoadName",title.props.children);
    this.getOneRoad();
  }
  getOneRoad(){
    this.props.dispatch({
      type: 'getRoadNowInfo/getRoadNowInfo',
      payload:{
        'UserID': localStorage.getItem('UserID'),
        'RoadID':localStorage.getItem("selectRoadId")
      }
    })
    this.props.dispatch({
      type: 'getRoadCarInfo/getRoadCarInfo',
      payload:{
        'UserID': localStorage.getItem('UserID'),
        'RoadID':localStorage.getItem("selectRoadId")
      }
    })
  }
  render() {
    const { 
      getRoadList:{getRoadList},
      getRoadNowInfo:{getRoadNowInfo},
      getRoadCarInfo:{getRoadCarInfo},
      loading 
    } = this.props;
    const Roadlist = getRoadList;
    const data = [];
    if(Roadlist && Roadlist.length > 0 ){
      if(localStorage.getItem("selectRoadId") === null || localStorage.getItem("selectRoadName") === null){
        localStorage.setItem("selectRoadId",Roadlist[0].RoadID);
        localStorage.setItem("selectRoadName",Roadlist[0].BI_RoadName);
      }
    }
    if(getRoadNowInfo && getRoadNowInfo.length > 0){
      this.lev = getRoadNowInfo.CT_Road.lev;
      //
      this.BI_RoadLength = getRoadNowInfo.CT_Road.BI_RoadLength;
      this.RoadLastPQI = getRoadNowInfo.CT_Road.RoadLastPQI;
      this.BI_ManageUnit = getRoadNowInfo.CT_Road.BI_ManageUnit;
      this.RoadLastTime = getRoadNowInfo.CT_Road.RoadLastTime;
      this.RoadEditTime = getRoadNowInfo.CT_Road.RoadEditTime;
    }
    if(getRoadCarInfo && getRoadCarInfo.length > 0){
      const d=getRoadCarInfo.CT_Road_Data;
      for(var i=0;i<d.length;i++){
        data.push({
          RoadCheckTime:d[i].RoadCheckTime,
          RoadPQI:d[i].RoadPQI,
          RoadPQILevel:d[i].RoadPQILevel,
          RoadRQI:d[i].RoadRQI,
          RoadRQILevel:d[i].RoadRQILevel,
          RoadPCI:d[i].RoadPCI,
          RoadPCILevel:d[i].RoadPCILevel,
          RoadSFC:d[i].RoadSFC,
          RoadSFCLevel:d[i].RoadSFCLevel
        })
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
        {/* <Rate disabled value={this.lev} /> */}
          <Rate disabled value={5} />
        </Col>
      </Row>
    );
    const contentList = {
      tab1: <Table
        columns={columns}
        dataSource={data}
        bordered
        size="middle"
        scroll={{ x: '130%', y: 340 }}
        pagination={false}
        loading={loading}
       />,
    };
    return (
      <PageHeaderLayout
        title={"名称："+localStorage.getItem("selectRoadName")}
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
