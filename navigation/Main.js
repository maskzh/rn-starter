import { Platform } from 'react-native'
import { TabNavigator } from 'react-navigation'

import Home from '../screens/Home'
import People from '../screens/People'
import Chat from '../screens/Chat'
import Settings from '../screens/Settings'

export default TabNavigator(
  {
    Home: { screen: Home },
    People: { screen: People },
    Chat: { screen: Chat },
    Settings: { screen: Settings },
  },
  {
    tabBarOptions: {
      activeTintColor: Platform.OS === 'ios' ? '#e91e63' : '#fff',
      // showLabel: false,
    },
  },
)
