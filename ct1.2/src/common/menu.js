import { isUrl } from '../utils/utils';

const menuData = [
  {
    name: 'GIS路况',
    icon: '/static/gis.png',
    path: 'dashboard/gis',
    children: []
  }
  ,{
  name: '基础数据',
  icon: '/static/jc.png',
  path: 'dashboard',
  children: [
  // {
  //   name: '道路首页',
  //   path: 'gis',
  // }, 
  {
    name: '道路详情',
    path: 'baseinfo',
  },{
    name: '检测记录',
    path: 'roadrecords',
  }, {
    name: '道路同环比',
    path: 'roadassess',
    // hideInMenu: true
  },
  {
    name: '检测报告',
    path: 'report',
  },
  {
    name: '检测分析',
    path: 'analysis',
  },
  {
    name: '测试',
    path: 'testpage',
    // hideInMenu: true
  },
  // {
  //   name: '分析页',
  //   path: 'analysis',
  // },
   {
    name: '监控页',
    path: 'monitor',
  }, 
  // {
  //   name: '工作台',
  //   path: 'workplace',
  //   // hideInMenu: true,
  // }
 ],
}, 
// {
//   name: '表单页',
//   icon: 'form',
//   path: 'form',
//   children: [{
//     name: '基础表单',
//     path: 'basic-form',
//   }, {
//     name: '分步表单',
//     path: 'step-form',
//   }, {
//     name: '高级表单',
//     authority: 'admin',
//     path: 'advanced-form',
//   }],
// }, 
// {
//   name: '列表页',
//   icon: 'table',
//   path: 'list',
//   children: [{
//     name: '查询表格',
//     path: 'table-list',
//     hideInMenu: true
//   }, {
//     name: '标准列表',
//     path: 'basic-list',
//     hideInMenu: true
//   }, {
//     name: '卡片列表',
//     path: 'card-list',
//     hideInMenu: true
//   },{
//     name: '道路列表',
//     path: 'card-list1',
//   },
  //  {
  //   name: '搜索列表',
  //   path: 'search',
  //   children: [{
  //     name: '搜索列表（文章）',
  //     path: 'articles',
  //   }, {
  //     name: '搜索列表（项目）',
  //     path: 'projects',
  //   }, {
  //     name: '搜索列表（应用）',
  //     path: 'applications',
  //   }],
  // }
// ]},
// {
//   name: '技术评定',
//   icon: '/static/js.png',
//   path: 'dashboard',
//   children: [
    
//   ]
// },
{
  name: '病害诊断',
  icon: '/static/bh.png',
  path: 'disease',
  children: [{
    name: '病害统计',
    path: 'statics',
  },{
    name: '病害分析',
    path: 'analysis',
  }]
},
// {
//   name: '日常维护',
//   icon: '/static/js.png',
//   path: '',
//   // children: []
// },
{
  name: '管线档案',
  icon: '/static/gx.png',
  path: 'a',
  // children: []
},
{
  name: '路网档案',
  icon: '/static/lw.png',
  path: 'list/card-list1',
  // children: []
},
{
  name: '养护计划',
  icon: '/static/yh.png',
  path: 'c',
  // children: []
},
{
  name: '列表页',
  icon: 'table',
  path: 'list',
  children: [{
    name: '查询表格',
    path: 'table-list',
    // hideInMenu: true
  }, {
    name: '标准列表',
    path: 'basic-list',
    // hideInMenu: true
  }, {
    name: '卡片列表',
    path: 'card-list',
    // hideInMenu: true
  },
  // {
  //   name: '道路列表',
  //   path: 'card-list1',
  // },
]
},
// {
//   name: '详情页',
//   icon: 'profile',
//   path: 'profile',
//   children: [{
//     name: '基础详情页',
//     path: 'basic',
//   }, {
//     name: '高级详情页',
//     path: 'advanced',
//     authority: 'admin',
//   }],
// }, {
//   name: '结果页',
//   icon: 'check-circle-o',
//   path: 'result',
//   children: [{
//     name: '成功',
//     path: 'success',
//   }, {
//     name: '失败',
//     path: 'fail',
//   }],
// }, {
//   name: '异常页',
//   icon: 'warning',
//   path: 'exception',
//   children: [{
//     name: '403',
//     path: '403',
//   }, {
//     name: '404',
//     path: '404',
//   }, {
//     name: '500',
//     path: '500',
//   }, {
//     name: '触发异常',
//     path: 'trigger',
//     hideInMenu: true,
//   }],
// },
//  {
//   name: '账户',
//   icon: 'user',
//   path: 'user',
//   authority: 'guest',
//   children: [{
//     name: '登录',
//     path: 'login',
//   }, {
//     name: '注册',
//     path: 'register',
//   }, {
//     name: '注册结果',
//     path: 'register-result',
//   }],
// }
];

function formatter(data, parentPath = '/', parentAuthority) {
  return data.map((item) => {
    let { path } = item;
    if (!isUrl(path)) {
      path = parentPath + item.path;
    }
    const result = {
      ...item,
      path,
      authority: item.authority || parentAuthority,
    };
    if (item.children) {
      result.children = formatter(item.children, `${parentPath}${item.path}/`, item.authority);
    }
    return result;
  });
}

export const getMenuData = () => formatter(menuData);
