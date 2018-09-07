import { stringify } from 'qs';
import request from '../utils/request';

export async function queryProjectNotice() {
  return request('/api/project/notice');
}

export async function queryActivities() {
  return request('/api/activities');
}

export async function queryRule(params) {
  return request(`/api/rule?${stringify(params)}`);
}

export async function removeRule(params) {
  return request('/api/rule', {
    method: 'POST',
    body: {
      ...params,
      method: 'delete',
    },
  });
}

export async function addRule(params) {
  return request('/api/rule', {
    method: 'POST',
    body: {
      ...params,
      method: 'post',
    },
  });
}

export async function fakeSubmitForm(params) {
  return request('/api/forms', {
    method: 'POST',
    body: params,
  });
}

export async function fakeChartData() {
  return request('/api/fake_chart_data');
}

export async function queryTags() {
  return request('/api/tags');
}

export async function queryBasicProfile() {
  return request('/api/profile/basic');
}

export async function queryAdvancedProfile() {
  return request('/api/profile/advanced');
}

export async function queryFakeList(params) {
  return request(`/api/fake_list?${stringify(params)}`);
}

export async function fakeAccountLogin(params) {
  return request('/api/login/account', {
    method: 'POST',
    body: params,
  });
}

export async function fakeRegister(params) {
  return request('/api/register', {
    method: 'POST',
    body: params,
  });
}

export async function queryNotices() {
  return request('/api/notices');
}

// const IP= 'http://120.26.227.120:3000'; // 正式
const IP= 'http://192.168.1.84:3000'; // 开发
export async function getGisPoint(params) {
  return request(IP+'/api/GetRoadData/getRoadGPSTestDis', {
    method: 'GET',
    body: params,
  });
}
export async function getGisPathZ(params) {
  return request(IP+'/api/GetRoadData/getRoadGPSTest', {
    method: 'GET',
    body: params,
  });
}
export async function getGisPathB(params) {
  return request(IP+'/api/GetRoadData/getRoadGPSTest', {
    method: 'GET',
    body: params,
  });
}
export async function getGisPathC(params) {
  return request(IP+'/api/GetRoadData/getRoadGPSTest', {
    method: 'GET',
    body: params,
  });
}
export async function getGisPathD(params) {
  return request(IP+'/api/GetRoadData/getRoadGPSTest', {
    method: 'GET',
    body: params,
  });
}
export async function login(params) {
  return request(IP+'/api/User/login', {
    method: 'GET',
    body: params,
  });
}
export async function getRoadList(params) {
  return request(IP+'/api/RoadInfo/getRoadlist', {
    method: 'GET',
    body: params,
  });
}
//获取单条道路
export async function getRoadInfo(params) {
  return request(IP+'/api/RoadInfo/getRoadInfo', {
    method: 'GET',
    body: params,
  });
}
export async function getRoadNowInfo(params) {
  return request(IP+'/api/GetRoadData/getRoadNowInfo', {
    method: 'GET',
    body: params,
  });
}
//行车道检测记录
export async function getRoadCarInfo(params) {
  return request(IP+'/api/GetRoadData/getRoadCarInfo', {
    method: 'GET',
    body: params,
  });
}
// //同比分析
// export async function getEvaluateType(params) {
//   return request(IP+'/api/GetRoadData/getEvaluateType', {
//     method: 'GET',
//     body: params,
//   });
// }
// //环比分析
// export async function getEvaluateType_hb(params) {
//   return request(IP+'/api/GetRoadData/getEvaluateType_hb', {
//     method: 'GET',
//     body: params,
//   });
// }

//路网档案
export async function getRoadlistSearch(params) {
  return request(IP+'/api/RoadInfo/getRoadlistSearch', {
    method: 'GET',
    body: params,
  });
}

/************* 假数据 **************/
export async function getEvaluateType() {
  return request('/api/getEvaluateType');
}

export async function getEvaluateType_hb() {
  return request('/api/getEvaluateType_hb');
}

export async function getDiseasePie() {
  return request('/api/getDiseasePie');
}

export async function getRoadPCI() {
  return request('/api/getRoadPCI');
}