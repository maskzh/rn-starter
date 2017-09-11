import React from 'react'
import { View, Text } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

const Home = ({ navigation }) => (
  <View>
    <Text onPress={() => navigation.navigate('Detail')}>详情</Text>
  </View>
)

Home.navigationOptions = {
  title: '首页',
  // tabBarLabel: '首页',
  tabBarIcon: ({ tintColor, focused }) => (
    <Ionicons
      name={focused ? 'ios-home' : 'ios-home-outline'}
      size={26}
      style={{ color: tintColor }}
    />
  ),
}

export default Home
