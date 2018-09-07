
import { getEvaluateType_hb } from '../services/api';

export default {
  namespace: 'getEvaluateType_hb',

  state: {
    getEvaluateType_hb: [],
  },

  effects: {
    *getEvaluateType_hb({ payload }, { call, put }) {
        const response = yield call(getEvaluateType_hb, payload);
        yield put({
          type: 'saveEvaluateType_hb',
          payload: response
        });
      },
  },

  reducers: {
    saveEvaluateType_hb(state, action) {
        return {
          ...state,
          getEvaluateType_hb: action.payload.message,
        };
      },
  },
};