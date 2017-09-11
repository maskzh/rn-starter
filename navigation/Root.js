import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { BackHandler } from 'react-native'
import { addNavigationHelpers, NavigationActions } from 'react-navigation'

import AppNavigator from './App'

// 获取当前的 route 名称
function getCurrentScreen(nav) {
  if (!nav) return null
  const route = nav.routes[nav.index]
  if (route.routes) return getCurrentScreen(route)
  return route.routeName
}

class Root extends React.PureComponent {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    nav: PropTypes.any.isRequired,
  }
  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this.backHandle)
  }
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.backHandle)
  }
  backHandle = () => {
    const currentScreen = getCurrentScreen(this.props.nav)
    if (currentScreen === 'Login') return true
    if (currentScreen !== 'Home') {
      this.props.dispatch(NavigationActions.back())
      return true
    }
    return false
  }

  render() {
    const { dispatch, nav } = this.props
    const navigation = addNavigationHelpers({ dispatch, state: nav })
    return <AppNavigator navigation={navigation} />
  }
}

export function navReducer(state, action = {}) {
  return AppNavigator.router.getStateForAction(action, state)
}

export default connect(({ nav }) => ({ nav }))(Root)
