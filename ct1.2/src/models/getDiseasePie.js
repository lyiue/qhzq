
import { getDiseasePie } from '../services/api';

export default {
  namespace: 'getDiseasePie',

  state: {
    getDiseasePie: [],
  },

  effects: {
    *getDiseasePie({ payload }, { call, put }) {
        const response = yield call(getDiseasePie, payload);
        yield put({
          type: 'saveDiseasePie',
          payload: response
        });
      },
  },

  reducers: {
    saveDiseasePie(state, action) {
        return {
          ...state,
          getDiseasePie: action.payload.message,
        };
      },
  },
};