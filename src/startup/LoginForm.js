import React from 'react'
import { View, Button } from 'react-native'
import styles from './styles'
import LoginButton from './LoginButton'

export default class LoginForm extends React.Component {
  render() {
    return(
      <View style={styles.loginForm}>
        <LoginButton
          title="Sign In"
          style={{ minWidth: 300 }}
        />
        <LoginButton
          title="Sign Up"
          style={{ minWidth: 300 }}
        />
      </View>
    )
  }
}
