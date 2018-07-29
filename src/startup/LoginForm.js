import React from 'react'
import { View, Button } from 'react-native'
import styles from './styles'

export default class LoginForm extends React.Component {



  render() {
    return(
      <View>
        <Button
          style={ styles.loginButton }
          title='Sign In'
        />
        <Button
          style={ styles.loginButton }
          title='Sign Up'
        />
      </View>
    )
  }
}
