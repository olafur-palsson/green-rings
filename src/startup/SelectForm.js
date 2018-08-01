import React from 'react'
import { View, Button } from 'react-native'
import styles from './styles'
import LoginButton from './LoginButton'

export default class SelectForm extends React.Component {
  render() {
    console.log(this.props)
    return(
      <View style={styles.loginForm}>
        <LoginButton
          title="Sign In"
          style={{ minWidth: 300 }}
          onPress={() => {this.props.setFormTo_p1mainMenu_p2signIn(false, true)}}
        />
        <LoginButton
          title="Sign Up"
          style={{ minWidth: 300 }}
          onPress={() => {this.props.setFormTo_p1mainMenu_p2signIn(false, false)}}
        />
      </View>
    )
  }
}
