
import { getRoadNowInfo } from '../services/api';

export default {
  namespace: 'getRoadNowInfo',

  state: {
    getRoadNowInfo: [],
  },

  effects: {
    *getRoadNowInfo({ payload }, { call, put }) {
        const response = yield call(getRoadNowInfo, payload);
        yield put({
          type: 'saveRoadNowInfo',
          payload: response
        });
      },
  },

  reducers: {
    saveRoadNowInfo(state, action) {
        return {
          ...state,
          getRoadNowInfo: action.payload.message,
        };
      },
  },
};
