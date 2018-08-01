
import React from 'react'
import { Button, TextInput, View } from 'react-native'
import LoginButton from './LoginButton'

export default class SignInForm extends React.Component {
  render() {
    return(
      <View
        style={{backgroundColor: 'green'}}
      >
        <TextInput
          placeholder='Username'
        />
        <TextInput
          placeholder='Password'
          secureTextEntry='true'
        />
        <LoginButton/>
      </View>
    )
  }
}
