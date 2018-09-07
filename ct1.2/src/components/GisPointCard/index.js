import React, { Component,PureComponent } from 'react';
import {
    Row, Card, Icon, Avatar,Tooltip,
  } from 'antd';
  import numeral from 'numeral';
  import {
    ChartCard,
    yuan,
    MiniArea,
    MiniBar,
    Field
  } from 'components/Charts';
  const { Meta } = Card;
  export default class GisPointCard extends React.Component {
    changeCardShow(){
      this.props.changeCardShow()
    }
      render(){
        const clickPath = this.props;
        if(clickPath.length<1){

        }
        //console.log(this.props);
          return (
            <ChartCard
              
              style={{float:'left',position:'absolute',top:250,right:10,width:300,display:clickPath.close}}
              bordered={false}
              title="病害点名称"
              action={
                <Tooltip title="关闭">
                  <Icon type="close" onClick={this.changeCardShow.bind(this)}/>
                </Tooltip>
              }
              total={clickPath.data.Damage_Type+"/"+clickPath.data.Disease_Type}
              footer={<Field label="桩号/上下行" value={clickPath.data.Disease_ZH+"/"+clickPath.data.Up_And_Down} />}
              contentHeight={46}
            >
            </ChartCard>
          )
      }
  }