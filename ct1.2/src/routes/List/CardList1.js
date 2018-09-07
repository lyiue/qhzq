import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Card, Button, Icon, List,Pagination ,Input  } from 'antd';

import Ellipsis from 'components/Ellipsis';
import PageHeaderLayout from '../../layouts/PageHeaderLayout';

import styles from './CardList.less';
import { getRoadList } from '../../services/api';
const Search = Input.Search;
@connect(({ getRoadlistSearch, loading }) => ({
  getRoadlistSearch,
  loading: loading.models.getRoadlistSearch,
}))
export default class CardList extends PureComponent {
  constructor(){
    super();
    this.state={
      current:1,
      SearchValue:''
    }
  }
  componentDidMount() {
    this.props.dispatch({
      type: 'getRoadlistSearch/getRoadlistSearch',
      payload: {
        'UserID': localStorage.getItem('UserID'),
        'Search':this.state.SearchValue,
        'pageIndex':1,
        'pageSize':12
      },
    });
  }

  render() {
    const { getRoadlistSearch: { getRoadlistSearch }, loading } = this.props;
    const roadlist = [];
    const countnum = getRoadlistSearch.countnum;
    if(getRoadlistSearch.length<1||typeof(getRoadlistSearch) === 'undefined'){}else{
      for(var i=0;i<getRoadlistSearch.data.length;i++){
        roadlist.push({
          avatar:'http://120.26.227.120:3000/api/imageview?url='+getRoadlistSearch.data[i].CT_RoadPic,
          roadId:getRoadlistSearch.data[i].RoadID,
          title:getRoadlistSearch.data[i].BI_RoadName,
          description:"道路等级"+getRoadlistSearch.data[i].RoadLastPQI 
        })
      }
    }
    const onChange = (page) => {
      console.log(page);
      this.setState({
        current: page,
      },()=>{
        this.props.dispatch({
          type: 'getRoadlistSearch/getRoadlistSearch',
          payload: {
            'UserID': localStorage.getItem('UserID'),
            'Search':this.state.SearchValue,
            'pageIndex':page,
            'pageSize':12
          },
        });
      });
    }
    const SearchChange = (value)=>{
      console.log(value);
      this.setState({
        SearchValue: value,
        current:1
      },()=>{
        this.props.dispatch({
          type: 'getRoadlistSearch/getRoadlistSearch',
          payload: {
            'UserID': localStorage.getItem('UserID'),
            'Search':this.state.SearchValue,
            'pageIndex':1,
            'pageSize':12
          },
        });
      });
    }
    return (
      <PageHeaderLayout>
        <div className={styles.cardList}>
          <Search
            placeholder="搜索道路名称..."
            onSearch={SearchChange}
            enterButton
            style={{ width: 300,marginBottom:10}}
          />
          <List
            rowKey="id"
            loading={loading}
            grid={{ gutter: 24, lg: 4, md: 3, sm: 2, xs: 2 }}
            dataSource={roadlist}
            renderItem={item =>
              <List.Item key={item.id}>
                <Card hoverable className={styles.card} actions={[<a>查看详情</a>]}>
                  <Card.Meta
                    avatar={<img alt="" className={styles.cardAvatar} src={item.avatar} />}
                    title={<a href="#">{item.title}</a>}
                    description={(
                      <Ellipsis className={styles.item} lines={3}>{item.description}</Ellipsis>
                    )}
                  />
                </Card>  
              </List.Item>
            }  
          />
          <Pagination
            style={{float:'right'}}
            onChange={onChange} 
            current={this.state.current}
            hideOnSinglePage 
            showQuickJumper
            total={countnum} 
            pageSize={12}/>
        </div>
      </PageHeaderLayout>
    );
  }
}
