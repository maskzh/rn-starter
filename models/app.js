import { NavigationActions } from 'react-navigation'
import { login } from '../services/auth'

export default {
  namespace: 'app',
  state: {
    login: false,
    loading: false,
  },
  effects: {
    * login({ payload }, { call, put }) {
      yield put({ type: 'showLoading' })
      const result = yield call(login, payload)
      yield put({ type: 'hideLoading' })
      if (result) {
        yield put(
          NavigationActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: 'Main' })],
          }),
        )
      }
      yield put({ type: 'loginSuccess' })
    },
  },
  reducers: {
    showLoading(state) {
      return { ...state, loading: true }
    },
    hideLoading(state) {
      return { ...state, loading: false }
    },
    loginSuccess(state, { payload }) {
      return { ...state, user: payload, login: true }
    },
  },
}
