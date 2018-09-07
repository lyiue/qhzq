import React, { Component, Fragment } from 'react';
import Debounce from 'lodash-decorators/debounce';
import Bind from 'lodash-decorators/bind';
import { connect } from 'dva';
import { Button, Menu, Dropdown, Icon, Row, Col, Steps, Card, Popover, Badge, Table, Tooltip, Divider ,Select,Rate } from 'antd';
import classNames from 'classnames';
import DescriptionList from 'components/DescriptionList';
import PageHeaderLayout from '../../layouts/PageHeaderLayout';
import PageHeader from '../../layouts/PageHeader';
import styles from './AdvancedProfile.less';

const { Step } = Steps;
const { Description } = DescriptionList;
const Option = Select.Option;
const getWindowWidth = () => (window.innerWidth || document.documentElement.clientWidth);




const tabList = [
  {
    key: 'rating',
    tab: '评分等级',
  },{
  key: 'detail',
  tab: '行政识别数据',
}, {
  key: 'rule',
  tab: '结构技术数据',
}, {
  key: 'drive',
  tab: '车行道',
}, {
  key: 'human',
  tab: '人行道',
}, {
  key: 'fengedai',
  tab: '分隔带',
}, {
  key: 'fushu',
  tab: '附属设施',
}];


@connect(({ getRoadInfo, loading }) => ({
  getRoadInfo,
  loading: loading.models.getRoadInfo,
}))
@connect(({ getRoadList, loading }) => ({
  getRoadList,
  loading: loading.models.getRoadList,
}))
@connect(({ getRoadNowInfo, loading }) => ({
  getRoadNowInfo,
  loading: loading.models.getRoadNowInfo,
}))
export default class AdvancedProfile extends Component {
  constructor(){
    super();
    const lev = '';
    const BI_RoadNumber = '';
    const BI_RoadLevel = '';
    const BI_RoadStar = '';
    const BI_RoadEnd = '';
    const BI_DesignSpeed = '';
    const RW_PavementType = '';
    const BI_SmallTowns = '';
    const BI_BuiltYear = '';
    const RS_Planeness = '';
    const RS_Rut = '';
    const RS_TectonicDepth = '';
    const RS_PavementDamage = '';
    const RS_CorneringRatio = '';
    const RS_Deflection = '';
    const RS_ThickLayer = '';
    const RS_Settlement = '';
    const RS_SheafBug = '';
    const RS_Pipeline = '';
    //
    const RW_LaneNumber = '';
    const RW_PeerDirection = '';
    const RW_MotorWidth = '';
    const RW_MotorWidth_LeftNo = '';
    const RW_MotorWidth_RightNo = '';
    const RW_RoadWayArea = '';
    const RW_IsBusLane = '';
    const RW_SideStoneType = '';
    const RW_SideStoneLength = '';
    const RW_FlatStoneType = '';
    const RW_FlatStoneLength = '';
    //
    const SWL_PavementType = '';
    const SWL_Length = '';
    const SWL_Width = '';
    const SWL_LinearArea = '';
    const SWL_TyphosoleLength = '';
    const SWL_CrossingsArea = '';
    const SWL_WheelChairAccessibleArea = '';
    const SWL_GreenBeltArea = '';
    const SWL_SideStoneType = '';
    const SWL_FlatStoneType = '';
    //
    const SWR_PavementType = '';
    const SWR_Length = '';
    const SWR_Width = '';
    const SWR_LinearArea = '';
    const SWR_TyphosoleLength = '';
    const SWR_CrossingsArea = '';
    const SWR_WheelChairAccessibleArea = '';
    const SWR_GreenBeltArea = '';
    const SWR_SideStoneType = '';
    const SWR_FlatStoneType = '';
    //
    const DL_GuardBarLength = '';
    const DL_GuardBarWidth = '';
    const DL_GuardBarType = '';
    const DL_Length = '';
    const DL_Width = '';
    const DL_Area = '';
    const DL_Type = '';
    //
    const DC_GuardBarLength = '';
    const DC_GuardBarWidth = '';
    const DC_GuardBarType = '';
    const DC_Length = '';
    const DC_Width = '';
    const DC_Area = '';
    const DC_Type = '';
    //
    const DR_GuardBarLength = '';
    const DR_GuardBarWidth = '';
    const DR_GuardBarType = '';
    const DR_Length = '';
    const DR_Width = '';
    const DR_Area = '';
    const DR_Type = '';
    //
    const AF_InspectionWellNumber = '';
    const AF_SignBoardNumber = '';
    const AF_GullyNumber = '';
    const AF_TreePoolArea = '';
    const AF_NameplateNumber = '';
    const AF_Other = '';
    //
    const BI_RoadLength = '';
    const RoadLastPQI = '';
    const BI_ManageUnit = '';
    const RoadLastTime = '';
    const RoadEditTime = '';
  }
  state = {
    onekey:'rating',
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
    this. getOneRoad();
  }

  onTabChange = (key) => {
    this.setState({ onekey: key });
  }
  handleChange =(value,title) => {
    localStorage.setItem("selectRoadId",value);
    localStorage.setItem("selectRoadName",title.props.children);
    this.getOneRoad();
  }
  getOneRoad(){
    this.props.dispatch({
      type: 'getRoadInfo/getRoadInfo',
      payload:{
        'UserID': localStorage.getItem('UserID'),
        'RoadID':localStorage.getItem("selectRoadId")
      }
    })
    this.props.dispatch({
      type: 'getRoadNowInfo/getRoadNowInfo',
      payload:{
        'UserID': localStorage.getItem('UserID'),
        'RoadID':localStorage.getItem("selectRoadId")
      }
    })
  }
  render() {
    const { 
      getRoadInfo:{getRoadInfo},
      getRoadList:{getRoadList},
      getRoadNowInfo:{getRoadNowInfo},
      loading 
    } = this.props;
    const Roadlist = getRoadList;
    
    if(Roadlist.length<1){
     
    }else{
      if(localStorage.getItem("selectRoadId") === null || localStorage.getItem("selectRoadName") === null){
        localStorage.setItem("selectRoadId",Roadlist[0].RoadID);
        localStorage.setItem("selectRoadName",Roadlist[0].BI_RoadName);
      }
    }
    if(typeof(getRoadInfo) === 'undefined' || getRoadInfo.length<1){}else{
      //const 
    }
    if(typeof(getRoadNowInfo) === 'undefined' || getRoadNowInfo.length<1){
      
    }else{
      //this.lev = getRoadNowInfo.CT_Road.lev;
      this.BI_RoadNumber = getRoadNowInfo.CT_Road.BI_RoadNumber;
      this.BI_RoadLevel = getRoadNowInfo.CT_Road.BI_RoadLevel;
      this.BI_RoadStar = getRoadNowInfo.CT_Road.BI_RoadStar;
      this.BI_RoadEnd = getRoadNowInfo.CT_Road.BI_RoadEnd;
      this.BI_DesignSpeed = getRoadNowInfo.CT_Road.BI_DesignSpeed;
      this.RW_PavementType = getRoadNowInfo.CT_Road.RW_PavementType;
      this.BI_SmallTowns = getRoadNowInfo.CT_Road.BI_SmallTowns;
      this.BI_BuiltYear = getRoadNowInfo.CT_Road.BI_BuiltYear;
      this.RS_Planeness = getRoadNowInfo.CT_RoadSkillInfo.RS_Planeness;
      this.RS_Rut = getRoadNowInfo.CT_RoadSkillInfo.RS_Rut;
      this.RS_TectonicDepth = getRoadNowInfo.CT_RoadSkillInfo.RS_TectonicDepth;
      this.RS_PavementDamage = getRoadNowInfo.CT_RoadSkillInfo.RS_PavementDamage;
      this.RS_CorneringRatio = getRoadNowInfo.CT_RoadSkillInfo.RS_CorneringRatio;
      this.RS_Deflection = getRoadNowInfo.CT_RoadSkillInfo.RS_Deflection;
      this.RS_ThickLayer = getRoadNowInfo.CT_RoadSkillInfo.RS_ThickLayer;
      this.RS_Settlement = getRoadNowInfo.CT_RoadSkillInfo.RS_Settlement;
      this.RS_SheafBug = getRoadNowInfo.CT_RoadSkillInfo.RS_SheafBug;
      this.RS_Pipeline = getRoadNowInfo.CT_RoadSkillInfo.RS_Pipeline;
      this.RW_LaneNumber = getRoadNowInfo.CT_Road.RW_LaneNumber;
      this.RW_PeerDirection = getRoadNowInfo.CT_Road.RW_PeerDirection;
      this.RW_MotorWidth = getRoadNowInfo.CT_Road.RW_MotorWidth;
      this.RW_MotorWidth_LeftNo = getRoadNowInfo.CT_Road.RW_MotorWidth_LeftNo;
      this.RW_MotorWidth_RightNo = getRoadNowInfo.CT_Road.RW_MotorWidth_RightNo;
      this.RW_RoadWayArea = getRoadNowInfo.CT_Road.RW_RoadWayArea;
      this.RW_IsBusLane = getRoadNowInfo.CT_Road.RW_IsBusLane;
      this.RW_SideStoneType = getRoadNowInfo.CT_Road.RW_SideStoneType;
      this.RW_SideStoneLength = getRoadNowInfo.CT_Road.RW_SideStoneLength;
      this.RW_FlatStoneType = getRoadNowInfo.CT_Road.RW_FlatStoneType;
      this.RW_FlatStoneLength = getRoadNowInfo.CT_Road.RW_FlatStoneLength;
      //
      this.SWL_PavementType = getRoadNowInfo.CT_Road.SWL_PavementType;
      this.SWL_Length = getRoadNowInfo.CT_Road.SWL_Length;
      this.SWL_Width = getRoadNowInfo.CT_Road.SWL_Width;
      this.SWL_LinearArea = getRoadNowInfo.CT_Road.SWL_LinearArea;
      this.SWL_TyphosoleLength = getRoadNowInfo.CT_Road.SWL_TyphosoleLength;
      this.SWL_CrossingsArea = getRoadNowInfo.CT_Road.SWL_CrossingsArea;
      this.SWL_WheelChairAccessibleArea = getRoadNowInfo.CT_Road.SWL_WheelChairAccessibleArea;
      this.SWL_GreenBeltArea = getRoadNowInfo.CT_Road.SWL_GreenBeltArea;
      this.SWL_SideStoneType = getRoadNowInfo.CT_Road.SWL_SideStoneType;
      this.SWL_FlatStoneType = getRoadNowInfo.CT_Road.SWL_FlatStoneType;
      //
      this.SWR_PavementType = getRoadNowInfo.CT_Road.SWR_PavementType;
      this.SWR_Length = getRoadNowInfo.CT_Road.SWR_Length;
      this.SWR_Width = getRoadNowInfo.CT_Road.SWR_Width;
      this.SWR_LinearArea = getRoadNowInfo.CT_Road.SWR_LinearArea;
      this.SWR_TyphosoleLength = getRoadNowInfo.CT_Road.SWR_TyphosoleLength;
      this.SWR_CrossingsArea = getRoadNowInfo.CT_Road.SWR_CrossingsArea;
      this.SWR_WheelChairAccessibleArea = getRoadNowInfo.CT_Road.SWR_WheelChairAccessibleArea;
      this.SWR_GreenBeltArea = getRoadNowInfo.CT_Road.SWR_GreenBeltArea;
      this.SWR_SideStoneType = getRoadNowInfo.CT_Road.SWR_SideStoneType;
      this.SWR_FlatStoneType = getRoadNowInfo.CT_Road.SWR_FlatStoneType;
      //
      this.DL_GuardBarLength = getRoadNowInfo.CT_Road.DL_GuardBarLength;
      this.DL_GuardBarWidth = getRoadNowInfo.CT_Road.DL_GuardBarWidth;
      this.DL_GuardBarType = getRoadNowInfo.CT_Road.DL_GuardBarType;
      this.DL_Length = getRoadNowInfo.CT_Road.DL_Length;
      this.DL_Width = getRoadNowInfo.CT_Road.DL_Width;
      this.DL_Area = getRoadNowInfo.CT_Road.DL_Area;
      this.DL_Type = getRoadNowInfo.CT_Road.DL_Type;
      //
      this.DC_GuardBarLength = getRoadNowInfo.CT_Road.DC_GuardBarLength;
      this.DC_GuardBarWidth = getRoadNowInfo.CT_Road.DC_GuardBarWidth;
      this.DC_GuardBarType = getRoadNowInfo.CT_Road.DC_GuardBarType;
      this.DC_Length = getRoadNowInfo.CT_Road.DC_Length;
      this.DC_Width = getRoadNowInfo.CT_Road.DC_Width;
      this.DC_Area = getRoadNowInfo.CT_Road.DC_Area;
      this.DC_Type = getRoadNowInfo.CT_Road.DC_Type;
      //
      this.DR_GuardBarLength = getRoadNowInfo.CT_Road.DR_GuardBarLength;
      this.DR_GuardBarWidth = getRoadNowInfo.CT_Road.DR_GuardBarWidth;
      this.DR_GuardBarType = getRoadNowInfo.CT_Road.DR_GuardBarType;
      this.DR_Length = getRoadNowInfo.CT_Road.DR_Length;
      this.DR_Width = getRoadNowInfo.CT_Road.DR_Width;
      this.DR_Area = getRoadNowInfo.CT_Road.DR_Area;
      this.DR_Type = getRoadNowInfo.CT_Road.DR_Type;
      //
      this.AF_InspectionWellNumber = getRoadNowInfo.CT_Road.AF_InspectionWellNumber;
      this.AF_SignBoardNumber = getRoadNowInfo.CT_Road.AF_SignBoardNumber;
      this.AF_GullyNumber = getRoadNowInfo.CT_Road.AF_GullyNumber;
      this.AF_TreePoolArea = getRoadNowInfo.CT_Road.AF_TreePoolArea;
      this.AF_NameplateNumber = getRoadNowInfo.CT_Road.AF_NameplateNumber;
      this.AF_Other = getRoadNowInfo.CT_Road.AF_Other;
      //
      this.BI_RoadLength = getRoadNowInfo.CT_Road.BI_RoadLength;
      this.RoadLastPQI = getRoadNowInfo.CT_Road.RoadLastPQI;
      this.BI_ManageUnit = getRoadNowInfo.CT_Road.BI_ManageUnit;
      this.RoadLastTime = getRoadNowInfo.CT_Road.RoadLastTime;
      this.RoadEditTime = getRoadNowInfo.CT_Road.RoadEditTime;
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
    const oneList = {
      rating:<Card bordered={false}>
      <Row>
        <Col md={24} sm={24} xs={24}>
          
        </Col>
      </Row>
    </Card>,
      detail: <Card style={{ marginBottom: 24 }} bordered={false}>
         <DescriptionList style={{ marginBottom: 24 }}>
            <Description term="道路编号">{this.BI_RoadNumber}</Description>
            <Description term="道路等级">{this.BI_RoadLevel}</Description>
            <Description term="道路起点">{this.BI_RoadStar}</Description>
            <Description term="道路止点">{this.BI_RoadEnd}</Description>
            <Description term="行车速度">{this.BI_DesignSpeed}</Description>
            <Description term="路面类型">{this.RW_PavementType}</Description>
            <Description term="所属乡镇">{this.BI_SmallTowns}</Description>
            <Description term="设计寿命"></Description>
            <Description term="建造年月">{this.BI_BuiltYear}</Description>
          </DescriptionList>
      </Card>,
      rule:<Card style={{ marginBottom: 24 }} bordered={false}>
        <DescriptionList style={{ marginBottom: 24 }}>
          <Description term="平整度">{this.RS_Planeness}</Description>
          <Description term="车辙">{this.RS_Rut}</Description>
          <Description term="构造深度">{this.RS_TectonicDepth}</Description>
          <Description term="路面破损">{this.RS_PavementDamage}</Description>
          <Description term="横向力系数">{this.RS_CorneringRatio}</Description>
          <Description term="弯沉">{this.RS_Deflection}</Description>
          <Description term="层厚">{this.RS_ThickLayer}</Description>
          <Description term="沉降">{this.RS_Settlement}</Description>
          <Description term="结构层内缺陷">{this.RS_SheafBug}</Description>
          <Description term="管线">{this.RS_Pipeline}</Description>
        </DescriptionList>
        </Card>,
      drive: <Card style={{ marginBottom: 24 }} bordered={false}>
        <DescriptionList style={{ marginBottom: 24 }}>
          <Description term="车道数">{this.RW_LaneNumber}</Description>
          <Description term="同行方向">{this.RW_PeerDirection}</Description>
          <Description term="机动车道宽度范围">{this.RW_MotorWidth}</Description>
          <Description term="左侧非机动车道宽度范围">{this.RW_MotorWidth_LeftNo}</Description>
          <Description term="右侧非机动车道宽度范围">{this.RW_MotorWidth_RightNo}</Description>
          <Description term="车行道面积">{this.RW_RoadWayArea}</Description>
          <Description term="有无公交车专用道">{this.RW_IsBusLane}</Description>
          <Description term="侧石类型">{this.RW_SideStoneType}</Description>
          <Description term="侧石长度">{this.RW_SideStoneLength}</Description>
          <Description term="平石类型">{this.RW_FlatStoneType}</Description>
          <Description term="平石长度">{this.RW_FlatStoneLength}</Description>
        </DescriptionList>
        </Card>, 
      human: <Card type="inner" style={{ marginBottom: 24 }} bordered={false}>
          <DescriptionList size="small" style={{ marginBottom: 24 }} title="左侧">
            <Description term="铺面类型">{this.SWL_PavementType}</Description>
            <Description term="长度">{this.SWL_Length}</Description>
            <Description term="宽度范围">{this.SWL_Width}</Description>
            <Description term="直线面积">{this.SWL_LinearArea}</Description>
            <Description term="盲道长度">{this.SWL_TyphosoleLength}</Description>
            <Description term="交叉口面积">{this.SWL_CrossingsArea}</Description>
            <Description term="无障碍通道面积">{this.SWL_WheelChairAccessibleArea}</Description>
            <Description term="绿化带面积">{this.SWL_GreenBeltArea}</Description>
            <Description term="侧石类型">{this.SWL_SideStoneType}</Description>
            <Description term="平石类型">{this.SWL_FlatStoneType}</Description>
          </DescriptionList>
          <Divider style={{ margin: '16px 0' }} />
          <DescriptionList size="small" style={{ marginBottom: 24 }} title="右侧">
          <Description term="铺面类型">{this.SWR_PavementType}</Description>
          <Description term="长度">{this.SWR_Length}</Description>
          <Description term="宽度范围">{this.SWR_Width}</Description>
          <Description term="直线面积">{this.SWR_LinearArea}</Description>
          <Description term="盲道长度">{this.SWR_TyphosoleLength}</Description>
          <Description term="交叉口面积">{this.SWR_CrossingsArea}</Description>
          <Description term="无障碍通道面积">{this.SWR_WheelChairAccessibleArea}</Description>
          <Description term="绿化带面积">{this.SWR_GreenBeltArea}</Description>
          <Description term="侧石类型">{this.SWR_SideStoneType}</Description>
          <Description term="平石类型">{this.SWR_FlatStoneType}</Description>
          </DescriptionList>
        </Card>,
      fengedai:<Card type="inner" style={{ marginBottom: 24 }} bordered={false}>
        <DescriptionList size="small" style={{ marginBottom: 24 }} title="左侧">
          <Description term="人行护栏长度">{this.DL_GuardBarLength}</Description>
          <Description term="人行护栏高度">{this.DL_GuardBarWidth}</Description>
          <Description term="人行护栏类型">{this.DL_GuardBarType}</Description>
          <Description term="长度">{this.DL_Length}</Description>
          <Description term="宽度范围">{this.DL_Width}</Description>
          <Description term="面积">{this.DL_Area}</Description>
          <Description term="类型">{this.DL_Type}</Description>
        </DescriptionList>
        <Divider style={{ margin: '16px 0' }} />
        <DescriptionList size="small" style={{ marginBottom: 24 }} title="中央">
          <Description term="人行护栏长度">{this.DC_GuardBarLength}</Description>
          <Description term="人行护栏高度">{this.DC_GuardBarWidth}</Description>
          <Description term="人行护栏类型">{this.DC_GuardBarType}</Description>
          <Description term="长度">{this.DC_Length}</Description>
          <Description term="宽度范围">{this.DC_Width}</Description>
          <Description term="面积">{this.DC_Area}</Description>
          <Description term="类型">{this.DC_Type}</Description>
        </DescriptionList>
        <Divider style={{ margin: '16px 0' }} />
        <DescriptionList size="small" style={{ marginBottom: 24 }} title="右侧">
          <Description term="人行护栏长度">{this.DR_GuardBarLength}</Description>
          <Description term="人行护栏高度">{this.DR_GuardBarWidth}</Description>
          <Description term="人行护栏类型">{this.DR_GuardBarType}</Description>
          <Description term="长度">{this.DR_Length}</Description>
          <Description term="宽度范围">{this.DR_Width}</Description>
          <Description term="面积">{this.DR_Area}</Description>
          <Description term="类型">{this.DR_Type}</Description>
        </DescriptionList> 
        </Card>,
      fushu:<Card style={{ marginBottom: 24 }} bordered={false}>
        <DescriptionList style={{ marginBottom: 24 }}>
          <Description term="检查井数量">{this.AF_InspectionWellNumber}</Description>
          <Description term="标志牌数量">{this.AF_SignBoardNumber}</Description>
          <Description term="雨水口数量">{this.AF_GullyNumber}</Description>
          <Description term="树池面积">{this.AF_TreePoolArea}</Description>
          <Description term="路名牌数量">{this.AF_NameplateNumber}</Description>
          <Description term="其它">{this.AF_Other}</Description>
        </DescriptionList>
        </Card>, 
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
          tabList={tabList}
          onTabChange={this.onTabChange} 
        >
          {oneList[this.state.onekey]}  
        </Card>
      </PageHeaderLayout>
    );
  }
}
