import React, { Component } from 'react'
import { StyleSheet, View, Button, Text } from 'react-native'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'

class Detail extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Detail',
    headerLeft: <Text onPress={() => { navigation.goBack(); navigation.navigate('DrawerOpen') }}>返回</Text>,
  })

  gotoDetail = () => {
    this.props.dispatch(NavigationActions.navigate({ routeName: 'Detail' }))
  }

  goBack = () => {
    this.props.dispatch(NavigationActions.back())
  }

  render() {
    return (
      <View style={styles.container}>
        <Button title="Goto Detail" onPress={this.gotoDetail} />
        <Button title="Go Back" onPress={this.goBack} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default connect()(Detail)
