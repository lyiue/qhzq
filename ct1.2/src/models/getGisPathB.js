import { getGisPathB } from '../services/api';

export default {
  namespace: 'getGisPathB',

  state: {
    getGisPathB: [],
  },

  effects: {
    *getPath({ payload }, { call, put }) {
      const response = yield call(getGisPathB,payload);
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
        getGisPathB: action.payload,
      };
    },
  },
};