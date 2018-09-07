import { getGisPathC } from '../services/api';

export default {
  namespace: 'getGisPathC',

  state: {
    getGisPathC: [],
  },

  effects: {
    *getPath({ payload }, { call, put }) {
      const response = yield call(getGisPathC,payload);
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
        getGisPathC: action.payload,
      };
    },
  },
};