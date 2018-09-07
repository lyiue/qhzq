
import { getRoadPCI } from '../services/api';

export default {
  namespace: 'getRoadPCI',

  state: {
    getRoadPCI: [],
  },

  effects: {
    *getRoadPCI({ payload }, { call, put }) {
        const response = yield call(getRoadPCI, payload);
        yield put({
          type: 'savePCI',
          payload: response
        });
      },
  },

  reducers: {
    savePCI(state, action) {
        return {
          ...state,
          getRoadPCI: action.payload.message,
        };
      },
  },
};