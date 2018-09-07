
import { getRoadList } from '../services/api';

export default {
  namespace: 'getRoadList',

  state: {
    getRoadList: [],
  },

  effects: {
    *getRoadList({ payload }, { call, put }) {
        const response = yield call(getRoadList, payload);
        yield put({
          type: 'saveRoadlist',
          payload: response
        });
      },
  },

  reducers: {
    saveRoadlist(state, action) {
        return {
          ...state,
          getRoadList: action.payload.message,
        };
      },
  },
};
