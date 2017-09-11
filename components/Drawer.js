import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View, Text, TouchableHighlight, TouchableWithoutFeedback, Image } from 'react-native'

const styles = StyleSheet.create({
  container: { flex: 1 },
  avatarContainer: { paddingTop: 50, paddingBottom: 50, display: 'flex', alignItems: 'center' },
  avatar: { width: 64, height: 64, borderRadius: 32 },
  name: { fontSize: 16, marginTop: 10 },
  touchItem: { paddingTop: 20, paddingBottom: 20, paddingLeft: 50 },
  touchItemText: { fontSize: 16 },
})

const Drawer = ({ navigation }) => (
  <View style={styles.container}>
    <TouchableWithoutFeedback onPress={() => navigation.navigate('Detail')}>
      <View style={styles.avatarContainer}>
        <Image style={styles.avatar} source={{ uri: 'https://facebook.github.io/react/img/logo_og.png' }} />
        <Text style={styles.name}>郑洋葱</Text>
      </View>
    </TouchableWithoutFeedback>
    <TouchableHighlight
      underlayColor="#eee"
      style={styles.touchItem}
      onPress={() => navigation.navigate('Detail')}
    ><Text style={styles.touchItemText}>我的订单</Text></TouchableHighlight>
    <TouchableHighlight
      underlayColor="#eee"
      style={styles.touchItem}
      onPress={() => navigation.navigate('Detail')}
    ><Text style={styles.touchItemText}>我的钱包</Text></TouchableHighlight>
    <TouchableHighlight
      underlayColor="#eee"
      style={styles.touchItem}
      onPress={() => navigation.navigate('Detail')}
    ><Text style={styles.touchItemText}>反馈</Text></TouchableHighlight>
  </View>
)

Drawer.propTypes = {
  navigation: PropTypes.any.isRequired,
}

export default Drawer
