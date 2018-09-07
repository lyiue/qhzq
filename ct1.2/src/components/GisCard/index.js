import React, { Component,PureComponent } from 'react';
import RadialChart from '../RadialChart'
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
export default class GisCard extends React.Component {
    changeCardShow(){
        this.props.changeCardShow()
    }
    render(){
      // console.log(this.props);
        const clickPath = this.props;
        if(clickPath.length<1){

        }
        //console.log(this.props);
        return(
            <ChartCard
                id="hellocard"
              style={{float:'left',position:'absolute',top:30,right:10,width:300,display:clickPath.close}}
              bordered={false}
              title="道路名称"
              action={
                <Tooltip title="关闭">
                  <Icon type="close" onClick={this.changeCardShow.bind(this)}/>
                </Tooltip>
              }
              total={clickPath.data.name}
              footer={<Field label="病害点个数" value={numeral(1234).format('0,0')} />}
              contentHeight={46}
            >
            {/* <RadialChart color="#975FE4" width={300} height={120} PCI={clickPath.data.RoadPCI}  container={'hellocard'}/> */}
            </ChartCard>
        )
    }
}