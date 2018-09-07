
import { getRoadlistSearch } from '../services/api';

export default {
  namespace: 'getRoadlistSearch',

  state: {
    getRoadlistSearch: [],
  },

  effects: {
    *getRoadlistSearch({ payload }, { call, put }) {
        const response = yield call(getRoadlistSearch, payload);
        yield put({
          type: 'saveRoadlistSearch',
          payload: response
        });
      },
  },

  reducers: {
    saveRoadlistSearch(state, action) {
        return {
          ...state,
          getRoadlistSearch: action.payload.message,
        };
      },
  },
};