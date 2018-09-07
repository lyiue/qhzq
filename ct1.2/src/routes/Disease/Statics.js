import React, { Component, Fragment } from 'react';
import Debounce from 'lodash-decorators/debounce';
import Bind from 'lodash-decorators/bind';
import { connect } from 'dva';
import { Button, Menu, Dropdown, Icon, Row, Col, Steps, Card, Popover, Badge, Table, Tooltip, Divider,Select,Rate } from 'antd';
import classNames from 'classnames';
import { Pie } from 'components/Echarts';
import PageHeaderLayout from '../../layouts/PageHeaderLayout';
import styles from './Disease.less';
import staticsStyles from './Statics.less';

const { Step } = Steps;
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

@connect(({ getRoadList, loading }) => ({
  getRoadList,
  loading: loading.models.getRoadList,
}))
@connect(({ getDiseasePie, loading }) => ({
    getDiseasePie,
    loading: loading.models.getDiseasePie,
  }))
  @connect(({ getRoadPCI, loading }) => ({
    getRoadPCI,
    loading: loading.models.getRoadPCI,
  }))

export default class Statics extends React.Component {
  constructor(){
    super();
  }
  state = {
    operationkey: 'tab1',
  }
  componentDidMount() {
    // const { dispatch } = this.props;
    this.props.dispatch({
      type: 'getDiseasePie/getDiseasePie',
      payload: {
        'UserID': localStorage.getItem('UserID')
      },
    });
    this.props.dispatch({
      type: 'getRoadList/getRoadList',
      payload:{
        'UserID': localStorage.getItem('UserID'),
        //'RoadID':
      }
    });
    this.props.dispatch({
      type: 'getRoadPCI/getRoadPCI',
      payload:{
        'UserID': localStorage.getItem('UserID'),
        //'RoadID':
      }
    });
    // this.getOneRoad();
    
  }

  onOperationTabChange = (key) => {
    this.setState({ operationkey: key });
  }
  handleChange =(value,title) => {
    localStorage.setItem("selectRoadId",value);
    localStorage.setItem("selectRoadName",title.props.children);
    // this.getOneRoad();
  }
//   getOneRoad(){
//     this.props.dispatch({
//       type: 'getRoadNowInfo/getRoadNowInfo',
//       payload:{
//         'UserID': localStorage.getItem('UserID'),
//         'RoadID':localStorage.getItem("selectRoadId")
//       }
//     })
//     this.props.dispatch({
//       type: 'getRoadCarInfo/getRoadCarInfo',
//       payload:{
//         'UserID': localStorage.getItem('UserID'),
//         'RoadID':localStorage.getItem("selectRoadId")
//       }
//     })
//   }
  render() {

    // console.log(this);

    const { 
      getRoadList:{getRoadList},
    //   getRoadNowInfo:{getRoadNowInfo},
    //   getRoadCarInfo:{getRoadCarInfo},
      getRoadPCI:{getRoadPCI},
      getDiseasePie:{getDiseasePie},
      loading 
    } = this.props;
    const Roadlist = getRoadList;
    const data = [];
    const description = [];

    if(getDiseasePie.data2 && getDiseasePie.data2.length>0){
      const pieData = getDiseasePie.data2;
      const pieLegend = getDiseasePie.data1;
      description.push(<Pie chartId="charPie" width="200" legend={pieLegend} data={pieData} key='pie'/>);
    }

    if(Roadlist && Roadlist.length > 0 ){
      if(localStorage.getItem("selectRoadId") === null || localStorage.getItem("selectRoadName") === null){
        localStorage.setItem("selectRoadId",Roadlist[0].RoadID);
        localStorage.setItem("selectRoadName",Roadlist[0].BI_RoadName);
      }
    }
    // if(getRoadNowInfo && getRoadNowInfo.length > 0){
    //   this.lev = getRoadNowInfo.CT_Road.lev;
    //   //
    //   this.BI_RoadLength = getRoadNowInfo.CT_Road.BI_RoadLength;
    //   this.RoadLastPQI = getRoadNowInfo.CT_Road.RoadLastPQI;
    //   this.BI_ManageUnit = getRoadNowInfo.CT_Road.BI_ManageUnit;
    //   this.RoadLastTime = getRoadNowInfo.CT_Road.RoadLastTime;
    //   this.RoadEditTime = getRoadNowInfo.CT_Road.RoadEditTime;
    // }
    // if(getRoadCarInfo && getRoadCarInfo.length > 0){
    //   const d=getRoadCarInfo.CT_Road_Data;
    //   for(var i=0;i<d.length;i++){
    //     data.push({
    //       RoadCheckTime:d[i].RoadCheckTime,
    //       RoadPQI:d[i].RoadPQI,
    //       RoadPQILevel:d[i].RoadPQILevel,
    //       RoadRQI:d[i].RoadRQI,
    //       RoadRQILevel:d[i].RoadRQILevel,
    //       RoadPCI:d[i].RoadPCI,
    //       RoadPCILevel:d[i].RoadPCILevel,
    //       RoadSFC:d[i].RoadSFC,
    //       RoadSFCLevel:d[i].RoadSFCLevel
    //     })
    //   }
    // }

    
  //   const columns1 = [
  //     {
  //     title: 'Name',
  //     dataIndex: 'name',
  //     render: (text, row, index) => {
  //       if (index < 4) {
  //         return <a href="javascript:;">{text}</a>;
  //       }
  //       return {
  //         children: <a href="javascript:;">{text}</a>,
  //         props: {
  //           colSpan: 5,
  //         },
  //       };
  //     },
  //   }, {
  //     title: 'Age',
  //     dataIndex: 'age',
  //     render: renderContent,
  //   }, {
  //     title: 'Home phone',
  //     colSpan: 2,
  //     dataIndex: 'tel',
  //     render: (value, row, index) => {
  //       const obj = {
  //         children: value,
  //         props: {},
  //       };
  //       if (index === 2) {
  //         obj.props.rowSpan = 2;
  //       }
  //       // These two are merged into above cell
  //       if (index === 3) {
  //         obj.props.rowSpan = 0;
  //       }
  //       if (index === 4) {
  //         obj.props.colSpan = 0;
  //       }
  //       return obj;
  //     },
  //   }, {
  //     title: 'Phone',
  //     colSpan: 0,
  //     dataIndex: 'phone',
  //     render: renderContent,
  //   }, {
  //     title: 'Address',
  //     dataIndex: 'address',
  //     render: renderContent,
  //   }
  // ];

  if(getRoadPCI){

    if(getRoadPCI.PCI_PointsValue && getRoadPCI.PCI_SingleWeight && getRoadPCI.PCI_Points && getRoadPCI.PCI_SingleClassWeight){
      const singledeductionvalueArray = getRoadPCI.PCI_PointsValue.split("|");
      const singleweightArray = getRoadPCI.PCI_SingleWeight.split("|");
      const singledeductionArray = getRoadPCI.PCI_Points.split("|");
      const singleclassweightArray = getRoadPCI.PCI_SingleClassWeight.split("|");
      let damagemodalityArray = [];


      const renderContent = (value, row, index) => {
        const obj = {
          children: value,
          props: {},
        };
        // if (index === 4) {
        //   obj.props.colSpan = 0;
        // }
        return obj;
      };
    
      const renderColumns1 = (value, row, index) => {
        const obj = {
          children: value,
          props: {},
        };

        if(getRoadPCI.RoadBedType == "沥青路面"){
          if (index === 0) {
            obj.props.rowSpan = 3;
          }
          if(index === 3) {
            obj.props.rowSpan = 4;
          } 
          if(index === 7) {
            obj.props.rowSpan = 3;
          }
          if(index === 10) {
            obj.props.rowSpan = 3;
          }
          if(index === 1 || index === 2 || index === 4 || index === 5 || index === 6 || index === 8 || index === 9 || index === 11 || index === 12){
            obj.props.rowSpan = 0;
          }
        }else{
          if (index === 0) {
            obj.props.rowSpan = 4;
          }
          if(index === 4) {
            obj.props.rowSpan = 2;
          } 
          if(index === 6) {
            obj.props.rowSpan = 3;
          }
          if(index === 9) {
            obj.props.rowSpan = 5;
          }
          if(index === 1 || index === 2 || index === 3 || index === 5 || index === 7 || index === 8 || index === 10 || index === 11 || index === 12 || index === 13){
            obj.props.rowSpan = 0;
          }
        }
        return obj;
      }
    
      const renderColumns2 = (value, row, index) => {
        const obj = {
          children: value,
          props: {},
        };
        if (index === 0) {
          obj.props.rowSpan = 14;
        }
        if(index === 1 || index === 2 || index === 3 || index === 4 || index === 5 || index === 6 || index === 7 || index === 8 || index === 9 || index === 10 || index === 11 || index === 12 || index === 13){
          obj.props.rowSpan = 0;
        }
        return obj;
      }
    
      const columns1 = [
        {
          title: '损坏类型',
          dataIndex: 'damagetype',
          render: renderColumns1,
        }, {
          title: '损坏形式',
          dataIndex: 'damagemodality',
          render: renderContent,
        }, {
          title: '单项扣分值',
          dataIndex: 'singledeductionvalue',
          render: renderContent,
        }, {
          title: '单项权重',
          dataIndex: 'singleweight',
          render: renderContent,
        }, {
          title: '单项扣分',
          dataIndex: 'singlededuction',
          render: renderColumns1,
        }, {
          title: '单类权重',
          dataIndex: 'singleclassweight',
          render: renderColumns1,
        }, {
          title: '综合扣分值',
          dataIndex: 'syntheticaldeduction',
          render: renderColumns2,
        }, {
          title: 'PCI',
          dataIndex: 'pci',
          render: renderColumns2,
        }
      ];





      if(getRoadPCI.RoadBedType == "沥青路面"){
        damagemodalityArray = ["线裂(a1)","网裂(a2)","龟裂(a3)","拥包(b1)","车辙(b2)","沉陷(b3)","翻浆(b4)",
        "剥落(c1)","坑槽(c2)","啃边(c3)","路框差(d1)","唧浆(d2)","泛油(d3)"];
      }else{
        damagemodalityArray = ["线裂(a1)","板角断裂(a4)","边角裂缝(a5)","拥包交叉裂缝和破碎板(a6)","接缝料损坏(e1)","边角剥落(e2)",
        "坑洞(f1)","表面裂纹(f2)","层状剥落(f3)","路框差(d1)","唧浆(d2)","错台(d4)","拱胀(d5)","沉陷(d6)"];
      }
      const data3 = [];
      if(getRoadPCI.RoadBedType == "沥青路面"){
        for(let i = 0;i<13;i++){
          let ei = {
            key: i,
            damagetype: "",
            damagemodality: damagemodalityArray[i],
            singledeductionvalue: singledeductionvalueArray[i],
            singleweight: singleweightArray[i],
            singlededuction: "",
            singleclassweight: "",
            syntheticaldeduction: getRoadPCI.PCI_Tatol,
            pci: getRoadPCI.PCI_Value,
          };
          if(i === 0){
            ei.damagetype = "(a)裂缝类";
            ei.singlededuction = singledeductionArray[0];
            ei.singleclassweight = singleclassweightArray[0];
          }
          if(i === 3){
            ei.damagetype = "(b)变形类";
            ei.singlededuction = singledeductionArray[1];
            ei.singleclassweight = singleclassweightArray[1];
          }
          if(i === 7){
            ei.damagetype = "(c)松散类";
            ei.singlededuction = singledeductionArray[2];
            ei.singleclassweight = singleclassweightArray[2];
          }
          if(i === 10){
            ei.damagetype = "(d)其他类";
            ei.singlededuction = singledeductionArray[3];
            ei.singleclassweight = singleclassweightArray[3];
          }
          data3.push(ei);
        }
      }else{
        for(let i = 0;i<14;i++){
          let ei = {
            key: i,
            damagetype: "",
            damagemodality: damagemodalityArray[i],
            singledeductionvalue: singledeductionvalueArray[i],
            singleweight: singleweightArray[i],
            singlededuction: "",
            singleclassweight: "",
            syntheticaldeduction: getRoadPCI.PCI_Tatol,
            pci: getRoadPCI.PCI_Value,
          };
          if(i === 0){
            ei.damagetype = "(a)裂缝类";
            ei.singlededuction = singledeductionArray[0];
            ei.singleclassweight = singleclassweightArray[0];
          }
          if(i === 4){
            ei.damagetype = "(e)接缝破坏类";
            ei.singlededuction = singledeductionArray[1];
            ei.singleclassweight = singleclassweightArray[1];
          }
          if(i === 6){
            ei.damagetype = "(f)表面破坏类";
            ei.singlededuction = singledeductionArray[2];
            ei.singleclassweight = singleclassweightArray[2];
          }
          if(i === 9){
            ei.damagetype = "(d)其他类";
            ei.singlededuction = singledeductionArray[3];
            ei.singleclassweight = singleclassweightArray[3];
          }
          data3.push(ei);
        }
      }
      description.push(<Table columns={columns1}  dataSource={data3} pagination={false} bordered key='testTable'/>);
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
        // content={description}
        extraContent={extra}   
      >
      <div className={staticsStyles.pieTable}>
        {description}
      </div>
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
