import React, { Component, Fragment } from 'react';
import { connect } from 'dva';
import { Button, Menu, Dropdown, Icon, Row, Col, Steps, Card, Popover, Badge, Table, Tooltip, Divider ,Select,Rate } from 'antd';
import DescriptionList from 'components/DescriptionList';
const { Description } = DescriptionList;
const Option = Select.Option;

@connect(({ getRoadList, loading }) => ({
    getRoadList,
    loading: loading.models.getRoadList,
  }))




  class PageHeader extends Component{
      constructor(){
          super()
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
      }
      render(){
          const {
            getRoadList:{getRoadList},
          } = this.props;
          console.log(getRoadList);
          const Roadlist = getRoadList;
          if(Roadlist.length<1){
     
        }else{
          if(localStorage.getItem("selectRoadId") === null || localStorage.getItem("selectRoadName") === null){
            localStorage.setItem("selectRoadId",Roadlist[0].RoadID);
            localStorage.setItem("selectRoadName",Roadlist[0].BI_RoadName);
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
          return''
      }
    
  }
  export default{
      action:PageHeader.action
      
  }