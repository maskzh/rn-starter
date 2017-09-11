import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { StyleSheet, View, Button, ActivityIndicator, TextInput } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

class Login extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
  }
  onLogin = (data) => {
    this.props.dispatch({ type: 'app/login', payload: data })
  }
  render() {
    const { loading } = this.props
    return (
      <View style={styles.container}>
        <TextInput />
        {loading
          ? <ActivityIndicator />
          : <Button title="Login" onPress={this.onLogin} />}
        {!loading && <Button title="Close" onPress={this.onClose} />}
      </View>
    )
  }
}

export default connect(({ app }) => ({ ...app }))(Login)
