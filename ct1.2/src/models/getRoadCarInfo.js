
import { getRoadCarInfo } from '../services/api';

export default {
  namespace: 'getRoadCarInfo',

  state: {
    getRoadCarInfo: [],
  },

  effects: {
    *getRoadCarInfo({ payload }, { call, put }) {
        const response = yield call(getRoadCarInfo, payload);
        yield put({
          type: 'saveRoadCarInfo',
          payload: response
        });
      },
  },

  reducers: {
    saveRoadCarInfo(state, action) {
        return {
          ...state,
          getRoadCarInfo: action.payload.message,
        };
      },
  },
};