import { getGisPathD } from '../services/api';

export default {
  namespace: 'getGisPathD',

  state: {
    getGisPathD: [],
  },

  effects: {
    *getPath({ payload }, { call, put }) {
      const response = yield call(getGisPathD,payload);
      yield put({
        type: 'savePath',
        payload: response,
      });
    }
  },

  reducers: {
    savePath(state, action) {
      return {
        ...state,
        getGisPathD: action.payload,
      };
    },
  },
};