import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Map } from 'react-amap';
import GisPathZ from 'components/GisPathZ';
import GisPathB from 'components/GisPathB';
import GisPathC from 'components/GisPathC';
import GisPathD from 'components/GisPathD';
import GisPoint from 'components/GisPoint';
import RadialChart from 'components/RadialChart';
import { connect } from 'dva';
import {
  Row, Card, Icon, Avatar,Tooltip,
} from 'antd';
import styles from './Analysis.less';
import { getGisPathZ,getGisPathC, getGisPathB, getGisPathD } from '../../services/api';
import { isAbsolute } from 'path';


@connect(({ getGisPoint, loading }) => ({
  getGisPoint,
  loading: loading.models.getGisPoint
}))
@connect(({ getGisPathZ, loading }) => ({
  getGisPathZ,
  loading: loading.models.getGisPath
}))
// @connect(({ getGisPathC, loading }) => ({
//   getGisPathC,
//   loading: loading.models.getGisPath
// }))
// @connect(({ getGisPathB, loading }) => ({
//   getGisPathB,
//   loading: loading.models.getGisPath
// }))
// @connect(({ getGisPathD, loading }) => ({
//   getGisPathD,
//   loading: loading.models.getGisPath
// }))

export default class Gis extends React.PureComponent{
  constructor(){
      super();
  }
  componentDidMount(){                                
    this.props.dispatch({
      type: 'getGisPathZ/getPath',
      payload: {
        'type':100,
        'level':'A',
        'UserID': localStorage.getItem('UserID')
      },
    });
    // this.props.dispatch({
    //   type: 'getGisPathB/getPath',
    //   payload: {
    //     'type':100,
    //     'level':'B',
    //     'UserID': localStorage.getItem('UserID')
    //   },
    // });
    // this.props.dispatch({
    //   type: 'getGisPathC/getPath',
    //   payload: {
    //     'type':100,
    //     'level':'C',
    //     'UserID': localStorage.getItem('UserID')
    //   },
    // });
    // this.props.dispatch({
    //   type: 'getGisPathD/getPath',
    //   payload: {
    //     'type':100,
    //     'level':'D',
    //     'UserID': localStorage.getItem('UserID')
    //   },
    // });
    this.props.dispatch({
      type: 'getGisPoint/getPoint',
      payload:{
        'UserID': localStorage.getItem('UserID')
      }
    });
  }
  render(){ 
    const {
      getGisPoint:{getGisPoint},
      getGisPathZ:{getGisPathZ},
      // getGisPathB:{getGisPathB},
      // getGisPathC:{getGisPathC},
      // getGisPathD:{getGisPathD},
      loading 
    }= this.props;
    if(typeof(getGisPoint)=== "undefined" || getGisPoint.length<1){

    }
    if(typeof(getGisPathZ)=== "undefined" || getGisPathZ.length<1){

    }
    // if(typeof(getGisPathB)=== "undefined" || getGisPathB.length<1){

    // }
    // if(typeof(getGisPathC)=== "undefined" || getGisPathC.length<1){

    // }
    // if(typeof(getGisPathD)=== "undefined" || getGisPathD.length<1){

    // }
    return(
      <Fragment>
        <Row gutter={24} style={{position:'relative'}}>
          <div id="node" style={{  margin: '-24px -24px',width: '102%', height: 878}}>
            <Map zoom={14} center={[106.576884,29.646889]} mapStyle={'amap://styles/darkblue'} useAMapUI >           
            {/* <Map zoom={14} center={[106.576884,29.646889]} mapStyle={'amap://styles/midnight'} useAMapUI >  */}
              <GisPathZ  data={getGisPathZ} color={'#16bf00'}/>
              {/* <GisPathB  data={getGisPathB} color={'#ff9f18'}/> */}
              {/* <GisPathB  data={getGisPathB} color={'#ff9f18'}/>
              <GisPathC  data={getGisPathC} color={'#f33030'}/>
              <GisPathD  data={getGisPathD} color={'#bb0000'}/> */}
              <GisPoint data={getGisPoint}/>
              {/* <GisPathC  data={getGisPathC} color={'#f33030'}/> */}
              {/* <GisPathD  data={getGisPathD} color={'#bb0000'}/> */}
            </Map>
        </div>      
      </Row>
    </Fragment> 
    )       
  }
}
