import { getRoadInfo } from '../services/api';

export default {
  namespace: 'getRoadInfo',

  state: {
    getRoadInfo: [],
  },

  effects: {
    *getRoadInfo({ payload }, { call, put }) {
      const response = yield call(getRoadInfo, payload);
      yield put({
        type: 'saveRoadInfo',
        payload: response
      });
    },
  },

  reducers: {
    saveRoadInfo(state, action) {
      return {
        ...state,
        getRoadInfo: action.payload.message,
      };
    },
  },
};
