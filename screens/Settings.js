import React from 'react'
import { View, Text } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

const Settings = ({ navigation }) => (
  <View>
    <Text onPress={() => navigation.navigate('Detail')}>详情</Text>
  </View>
)

Settings.navigationOptions = {
  title: '设置',
  // tabBarLabel: 'Settings',
  tabBarIcon: ({ tintColor, focused }) => (
    <Ionicons
      name={focused ? 'ios-settings' : 'ios-settings-outline'}
      size={26}
      style={{ color: tintColor }}
    />
  ),
}

export default Settings
