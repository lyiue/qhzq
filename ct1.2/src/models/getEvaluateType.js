
import { getEvaluateType } from '../services/api';

export default {
  namespace: 'getEvaluateType',

  state: {
    getEvaluateType: [],
  },

  effects: {
    *getEvaluateType({ payload }, { call, put }) {
        const response = yield call(getEvaluateType, payload);
        yield put({
          type: 'saveEvaluateType',
          payload: response
        });
      },
  },

  reducers: {
    saveEvaluateType(state, action) {
        return {
          ...state,
          getEvaluateType: action.payload.message,
        };
      },
  },
};