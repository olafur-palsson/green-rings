import { Text, Image, ImageBackground } from 'react-native'
import React from 'react'
import styles from './styles'

export default class Startup extends React.Component {
  constructor() {
    super()
    this.state = {
      imageStyle: 'imageBefore',
      loginFormStyle: 'loginBefore'
    }
  }

  render() {
    return(
      <ImageBackground
        source={require('../img/bluebg.jpg')}
        imageStyle={{resizeMode: 'cover'}}
        resizeMode='cover'
        style={styles.container}
      >
        <Text
         style={styles.textbig}
        > Yogayoga </Text>
        <Image
          source={require('../img/logofake.png')}
          style={styles.logo}
        />
      </ImageBackground>
    )
  }
}
