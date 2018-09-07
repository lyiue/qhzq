import { getGisPoint } from '../services/api';

export default {
  namespace: 'getGisPoint',

  state: {
    getGisPoint: [],
  },

  effects: {
    *getPoint({ payload }, { call, put }) {
      const response = yield call(getGisPoint,payload);
      yield put({
        type: 'savePoint',
        payload: response,
      });
    }
  },

  reducers: {
    savePoint(state, action) {
      return {
        ...state,
        getGisPoint: action.payload,
      };
    },
  },
};