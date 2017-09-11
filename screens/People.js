import React from 'react'
import { View, Text } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

const People = ({ navigation }) => (
  <View>
    <Text onPress={() => navigation.navigate('Detail')}>详情</Text>
  </View>
)

People.navigationOptions = {
  title: '群组',
  // tabBarLabel: '群组',
  tabBarIcon: ({ tintColor, focused }) => (
    <Ionicons
      name={focused ? 'ios-people' : 'ios-people-outline'}
      size={26}
      style={{ color: tintColor }}
    />
  ),
}

export default People
