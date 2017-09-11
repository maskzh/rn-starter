import { StackNavigator } from 'react-navigation'

import MainNavigator from './Main'
import Login from '../screens/Login'

export default StackNavigator(
  {
    Main: { screen: MainNavigator },
    Login: { screen: Login },
  },
  {
    mode: 'modal',
    navigationOptions: {
      gesturesEnabled: false,
    },
  },
)
