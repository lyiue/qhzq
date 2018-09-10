import { parse } from 'url';

const titles = [
  'Alipay',
  'Angular',
  'Ant Design',
  'Ant Design Pro',
  'Bootstrap',
  'React',
  'Vue',
  'Webpack',
];
const avatars = [
  'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png', // Alipay
  'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png', // Angular
  'https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png', // Ant Design
  'https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png', // Ant Design Pro
  'https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png', // Bootstrap
  'https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png', // React
  'https://gw.alipayobjects.com/zos/rmsportal/ComBAopevLwENQdKWiIn.png', // Vue
  'https://gw.alipayobjects.com/zos/rmsportal/nxkuOJlFJuAUhzlMTCEe.png', // Webpack
];

const avatars2 = [
  'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png',
  'https://gw.alipayobjects.com/zos/rmsportal/cnrhVkzwxjPwAaCfPbdc.png',
  'https://gw.alipayobjects.com/zos/rmsportal/gaOngJwsRYRaVAuXXcmB.png',
  'https://gw.alipayobjects.com/zos/rmsportal/ubnKSIfAJTxIgXOKlciN.png',
  'https://gw.alipayobjects.com/zos/rmsportal/WhxKECPNujWoWEFNdnJE.png',
  'https://gw.alipayobjects.com/zos/rmsportal/jZUIxmJycoymBprLOUbT.png',
  'https://gw.alipayobjects.com/zos/rmsportal/psOgztMplJMGpVEqfcgF.png',
  'https://gw.alipayobjects.com/zos/rmsportal/ZpBqSxLxVEXfcUNoPKrz.png',
  'https://gw.alipayobjects.com/zos/rmsportal/laiEnJdGHVOhJrUShBaJ.png',
  'https://gw.alipayobjects.com/zos/rmsportal/UrQsqscbKEpNuJcvBZBu.png',
];

const covers = [
  'https://gw.alipayobjects.com/zos/rmsportal/uMfMFlvUuceEyPpotzlq.png',
  'https://gw.alipayobjects.com/zos/rmsportal/iZBVOIhGJiAnhplqjvZW.png',
  'https://gw.alipayobjects.com/zos/rmsportal/uVZonEtjWwmUZPBQfycs.png',
  'https://gw.alipayobjects.com/zos/rmsportal/gLaIAoVWTtLbBWZNYEMg.png',
];
const desc = [
  '那是一种内在的东西， 他们到达不了，也无法触及的',
  '希望是一个好东西，也许是最好的，好东西是不会消亡的',
  '生命就像一盒巧克力，结果往往出人意料',
  '城镇中有那么多的酒馆，她却偏偏走进了我的酒馆',
  '那时候我只会想自己想要什么，从不想自己拥有什么',
];

const user = [
  '付小小',
  '曲丽丽',
  '林东东',
  '周星星',
  '吴加好',
  '朱偏右',
  '鱼酱',
  '乐哥',
  '谭小仪',
  '仲尼',
];

export function fakeList(count) {
  const list = [];
  for (let i = 0; i < count; i += 1) {
    list.push({
      id: `fake-list-${i}`,
      owner: user[i % 10],
      title: titles[i % 8],
      avatar: avatars[i % 8],
      cover: parseInt(i / 4, 10) % 2 === 0 ? covers[i % 4] : covers[3 - (i % 4)],
      status: ['active', 'exception', 'normal'][i % 3],
      percent: Math.ceil(Math.random() * 50) + 50,
      logo: avatars[i % 8],
      href: 'https://ant.design',
      updatedAt: new Date(new Date().getTime() - (1000 * 60 * 60 * 2 * i)),
      createdAt: new Date(new Date().getTime() - (1000 * 60 * 60 * 2 * i)),
      subDescription: desc[i % 5],
      description: '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。',
      activeUser: Math.ceil(Math.random() * 100000) + 100000,
      newUser: Math.ceil(Math.random() * 1000) + 1000,
      star: Math.ceil(Math.random() * 100) + 100,
      like: Math.ceil(Math.random() * 100) + 100,
      message: Math.ceil(Math.random() * 10) + 10,
      content: '段落示意：蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。',
      members: [
        {
          avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ZiESqWwCXBRQoaPONSJe.png',
          name: '曲丽丽',
        },
        {
          avatar: 'https://gw.alipayobjects.com/zos/rmsportal/tBOxZPlITHqwlGjsJWaF.png',
          name: '王昭君',
        },
        {
          avatar: 'https://gw.alipayobjects.com/zos/rmsportal/sBxjgqiuHMGRkIjqlQCd.png',
          name: '董娜娜',
        },
      ],
    });
  }

  return list;
}

export function getFakeList(req, res, u) {
  let url = u;
  if (!url || Object.prototype.toString.call(url) !== '[object String]') {
    url = req.url; // eslint-disable-line
  }

  const params = parse(url, true).query;

  const count = (params.count * 1) || 20;

  const result = fakeList(count);

  if (res && res.json) {
    res.json(result);
  } else {
    return result;
  }
}

export const getNotice = [
  {
    id: 'xxx1',
    title: titles[0],
    logo: avatars[0],
    description: '那是一种内在的东西，他们到达不了，也无法触及的',
    updatedAt: new Date(),
    member: '科学搬砖组',
    href: '',
    memberLink: '',
  },
  {
    id: 'xxx2',
    title: titles[1],
    logo: avatars[1],
    description: '希望是一个好东西，也许是最好的，好东西是不会消亡的',
    updatedAt: new Date('2017-07-24'),
    member: '全组都是吴彦祖',
    href: '',
    memberLink: '',
  },
  {
    id: 'xxx3',
    title: titles[2],
    logo: avatars[2],
    description: '城镇中有那么多的酒馆，她却偏偏走进了我的酒馆',
    updatedAt: new Date(),
    member: '中二少女团',
    href: '',
    memberLink: '',
  },
  {
    id: 'xxx4',
    title: titles[3],
    logo: avatars[3],
    description: '那时候我只会想自己想要什么，从不想自己拥有什么',
    updatedAt: new Date('2017-07-23'),
    member: '程序员日常',
    href: '',
    memberLink: '',
  },
  {
    id: 'xxx5',
    title: titles[4],
    logo: avatars[4],
    description: '凛冬将至',
    updatedAt: new Date('2017-07-23'),
    member: '高逼格设计天团',
    href: '',
    memberLink: '',
  },
  {
    id: 'xxx6',
    title: titles[5],
    logo: avatars[5],
    description: '生命就像一盒巧克力，结果往往出人意料',
    updatedAt: new Date('2017-07-23'),
    member: '骗你来学计算机',
    href: '',
    memberLink: '',
  },
];

export const getActivities = [
  {
    id: 'trend-1',
    updatedAt: new Date(),
    user: {
      name: '曲丽丽',
      avatar: avatars2[0],
    },
    group: {
      name: '高逼格设计天团',
      link: 'http://github.com/',
    },
    project: {
      name: '六月迭代',
      link: 'http://github.com/',
    },
    template: '在 @{group} 新建项目 @{project}',
  },
  {
    id: 'trend-2',
    updatedAt: new Date(),
    user: {
      name: '付小小',
      avatar: avatars2[1],
    },
    group: {
      name: '高逼格设计天团',
      link: 'http://github.com/',
    },
    project: {
      name: '六月迭代',
      link: 'http://github.com/',
    },
    template: '在 @{group} 新建项目 @{project}',
  },
  {
    id: 'trend-3',
    updatedAt: new Date(),
    user: {
      name: '林东东',
      avatar: avatars2[2],
    },
    group: {
      name: '中二少女团',
      link: 'http://github.com/',
    },
    project: {
      name: '六月迭代',
      link: 'http://github.com/',
    },
    template: '在 @{group} 新建项目 @{project}',
  },
  {
    id: 'trend-4',
    updatedAt: new Date(),
    user: {
      name: '周星星',
      avatar: avatars2[4],
    },
    project: {
      name: '5 月日常迭代',
      link: 'http://github.com/',
    },
    template: '将 @{project} 更新至已发布状态',
  },
  {
    id: 'trend-5',
    updatedAt: new Date(),
    user: {
      name: '朱偏右',
      avatar: avatars2[3],
    },
    project: {
      name: '工程效能',
      link: 'http://github.com/',
    },
    comment: {
      name: '留言',
      link: 'http://github.com/',
    },
    template: '在 @{project} 发布了 @{comment}',
  },
  {
    id: 'trend-6',
    updatedAt: new Date(),
    user: {
      name: '乐哥',
      avatar: avatars2[5],
    },
    group: {
      name: '程序员日常',
      link: 'http://github.com/',
    },
    project: {
      name: '品牌迭代',
      link: 'http://github.com/',
    },
    template: '在 @{group} 新建项目 @{project}',
  },
];

export const getEvaluateType = {
  "success":true,
  "message":{
    "list":{
      "RoadDEF":{"x":["K0000+000-K0000+500","K0000+500-K0000+642"],"y":[0,0]},
      "RoadRQI":{"x":["K0000+000-K0000+500","K0000+500-K0000+642"],"y":[3,3]},
      "RoadPQI":{"x":["K0000+000-K0000+500","K0000+500-K0000+642"],"y":[75,70]},
      "RoadPCI":{"x":["K0000+000-K0000+500","K0000+500-K0000+642"],"y":[74,79]},
      "RoadTD":{"x":["K0000+000-K0000+500","K0000+500-K0000+642"],"y":[0,0]},
      "RoadSFC":{"x":["K0000+000-K0000+500","K0000+500-K0000+642"],"y":[0,0]},
      "RoadCH":{"x":["K0000+000-K0000+500","K0000+500-K0000+642"],"y":[132,126]},
    },
    "total":{
      "hours":["A","B","C","D"],
      "days":["DEF","RQI","PQI","PCI","TD","SFC","层厚"],
      "data":[[6,0,6],[5,3,6],[4,0,6],[3,1,6],[2,1,6],[1,1,6],[0,3,6]]
    }
  }
};

//环比分析
export const getEvaluateType_hb = {
  "success":true,
  "message":{
    "RoadDEF":{"x":["2018-7-12"],"y":[0]},
      "RoadRQI":{"x":["2018-7-12"],"y":[2.43]},
      "RoadPQI":{"x":["2018-7-12"],"y":[51.52]},
      "RoadPCI":{"x":["2018-7-12"],"y":[55.9]},
      "RoadTD":{"x":["2018-7-12"],"y":[0.87]},
      "RoadSFC":{"x":["2018-7-12"],"y":[0]},
      "RoadCH":{"x":["2018-7-12"],"y":[47]},
      "RoadKD":{"x":["2018-7-12"],"y":[0]}
    }
  };

export const getDiseasePie = {
  "success":true,
  "message":{
    "data1":["DEF","RQI","PQI","PCI","TD","SFC","CH","KD"],
    "data2":[
      {"name":"DEF","value":0},
      {"name":"RQI","value":3.59},
      {"name":"PQI","value":72.68},
      {"name":"PCI","value":73.99},
      {"name":"TD","value":0.59},
      {"name":"SFC","value":0},
      {"name":"CH","value":131},
      {"name":"KD","value":0}
    ]
  }
};

export const getRoadPCI = {
  "success":true,
  "message":{
    "_id":"28fd3367-dd45-49f1-8d8d-8888bbd30c7d",
    "TYStatus":1,
    "PCI_Value":96.09,
    "PCI_Tatol":3.91,
    "PCI_SingleClassWeight":"0.80|0.00|0.56|0.00",
    "PCI_Points":"4.00|0.00|1.26|0.00",
    "PCI_SingleWeight":"0.97|0.00|0.00|0.07|0.00|0.00|0.77|0.00|0.69|0.00|0.00|0.00|0.00|0.00",
    "PCI_PointsValue":"4.12|0.00|0.00|0.08|0.00|0.00|1.07|0.00|0.63|0.00|0.00|0.00|0.00|0.00",
    "RoadCheckTime":"2018-07-16T09:17:00.000Z","RoadID":"53c853a4-70c8-4189-8d86-486067758f8d",
    "IntDT":"2018-08-18T16:22:39.087Z",
    "RoadBedType":"混凝土路面",
    "__v":null
  }
};

// export const getRoadPCI = {
//   "success":true,
//   "message":{
//     "_id":"cc77b550-49be-4363-9657-a777c43b71a5",
//     "TYStatus":1,
//     "PCI_Value":55.9,
//     "PCI_Tatol":44.1,
//     "PCI_SingleClassWeight":"0.45|0.63|0.72|0.33",
//     "PCI_Points":"12.58|21.57|30.64|8.44",
//     "PCI_SingleWeight":"0.74|0.75|0.11|0.00|0.00|1.00|0.00|0.44|0.83|0.00|1.00|0.00|0.00|NaN|NaN|NaN|NaN|NaN|NaN|NaN|NaN",
//     "PCI_PointsValue":"8.30|8.50|0.58|0.00|0.00|21.57|0.00|6.56|33.44|0.00|8.44|0.00|0.00|NaN|NaN|NaN|NaN|NaN|NaN|NaN|NaN",
//     "RoadCheckTime":"2018-07-12T11:25:00.000Z",
//     "RoadID":"68074002-80be-4011-a5ff-1c8ca9cf626d",
//     "IntDT":"2018-07-12T11:25:03.187Z",
//     "RoadBedType":"沥青路面",
//     "__v":null
//   }
// }

export const getRoadlistSearch = {
  "success":true,
  "message":{
    "countnum":7,
    "pagecount":2,
    "data":[{
      "RoadID":"ce78e117-a999-4091-a9fd-3c297f990ae1",
      "_id":"ce78e117-a999-4091-a9fd-3c297f990ae1",
      "BI_RoadName":"20180903","RW_LaneNumber":0,"CT_RoadPic":"RoadPic/timg.gif","BI_RoadLength":0,"RoadLastTime":"2018-09-03T18:38:00.000Z","RoadLastPQI":"D","CT_UserInfoID":"5b46a69bf5096a2b8c91c969","RoadLastTimeN":"2018-9-4"},{"RoadID":"4979d7b5-d9c6-4ef6-a2f1-4382871d3ad7","_id":"4979d7b5-d9c6-4ef6-a2f1-4382871d3ad7","BI_RoadName":"20180901","RW_LaneNumber":0,"CT_RoadPic":"RoadPic/timg.gif","BI_RoadLength":0,"RoadLastTime":"2018-09-01T17:23:00.000Z","RoadLastPQI":"A","CT_UserInfoID":"5b46a69bf5096a2b8c91c969","RoadLastTimeN":"2018-9-2"},{"RoadID":"c5e3064d-6a3f-4cb6-a6d4-f1982d6ef5bb","_id":"c5e3064d-6a3f-4cb6-a6d4-f1982d6ef5bb","BI_RoadName":"同茂大道T","RW_LaneNumber":0,"CT_RoadPic":"RoadPic/timg.gif","BI_RoadLength":0,"RoadLastTime":"2018-08-29T12:26:00.000Z","RoadLastPQI":"A","CT_UserInfoID":"5b46a69bf5096a2b8c91c969","RoadLastTimeN":"2018-8-29"},{"RoadID":"a5091d3a-e081-4991-9e09-2c6269683fef","_id":"a5091d3a-e081-4991-9e09-2c6269683fef","BI_RoadName":"Test20180828","RW_LaneNumber":0,"CT_RoadPic":"RoadPic/2018_8_28_15_13_667.jpg","BI_RoadLength":0,"RoadLastTime":null,"RoadLastPQI":null,"CT_UserInfoID":"5b46a69bf5096a2b8c91c969","RoadLastTimeN":"1970-1-1"},{"RoadID":"53c853a4-70c8-4189-8d86-486067758f8d","_id":"53c853a4-70c8-4189-8d86-486067758f8d","BI_RoadName":"宏声大道","RW_LaneNumber":4,"CT_RoadPic":"RoadPic/2018_8_28_10_15_881.jpg","BI_RoadLength":642,"RoadLastTime":"2018-07-12T11:32:00.000Z","RoadLastPQI":"B","CT_UserInfoID":"5b46a69bf5096a2b8c91c969","RoadLastTimeN":"2018-7-12"},{"RoadID":"68074002-80be-4011-a5ff-1c8ca9cf626d","_id":"68074002-80be-4011-a5ff-1c8ca9cf626d","BI_RoadName":"顺江大道","RW_LaneNumber":5,"CT_RoadPic":"RoadPic/timg.gif","BI_RoadLength":80,"RoadLastTime":"2018-07-12T11:25:00.000Z","RoadLastPQI":"D","CT_UserInfoID":"5b46a69bf5096a2b8c91c969","RoadLastTimeN":"2018-7-12"}]}};

export default {
  getNotice,
  getActivities,
  getFakeList,
  getEvaluateType,
  getEvaluateType_hb,
  getDiseasePie,
  getRoadPCI,
  getRoadlistSearch,
};
