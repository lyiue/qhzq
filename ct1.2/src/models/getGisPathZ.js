import { getGisPathZ } from '../services/api';

export default {
  namespace: 'getGisPathZ',

  state: {
    getGisPathZ: [],
  },

  effects: {
    *getPath({ payload }, { call, put }) {
      const response = yield call(getGisPathZ,payload);
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
        getGisPathZ: action.payload,
      };
    },
  },
};