import React from 'react'
import { View, Text } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

const Chat = ({ navigation }) => (
  <View>
    <Text onPress={() => navigation.navigate('Detail')}>详情</Text>
  </View>
)

Chat.navigationOptions = {
  title: '聊天',
  // tabBarLabel: 'Chat',
  tabBarIcon: ({ tintColor, focused }) => (
    <Ionicons
      name={focused ? 'ios-chatboxes' : 'ios-chatboxes-outline'}
      size={26}
      style={{ color: tintColor }}
    />
  ),
}

export default Chat
