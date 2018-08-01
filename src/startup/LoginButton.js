import React from 'react'
import { View, Button } from 'react-native'
import styles from './styles'

export default class LoginButton extends React.Component {
  render() {
    return(
      <View style={{...this.props.style, marginBottom: 10}}>
        <Button
          buttonStyle={ styles.loginButton }
          titleStyle={{ fontSize: 32 }}
          title={ this.props.title ? this.props.title : "No text" }
          onPress={() => {this.props.onPress()}}
        />
      </View>
    )
  }
}
