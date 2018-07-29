import { View, Animated, Image, ImageBackground } from 'react-native'
import React from 'react'
import styles from './styles'
import LoginForm from './LoginForm'
import GrowIntoView from '../components/GrowIntoView'

export default class Startup extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      this.setState({ shouldRenderForm: true })
    }, 1000)
  }

  render() {
    return(
      <ImageBackground
        source={require('../img/bluebg.jpg')}
        resizeMode='cover'
        style={styles.container}
      >
        <Image
          source={require('../img/logofake.png')}
          style={styles.logo}
          resizeMode='contain'
        />
          <GrowIntoView>
            <LoginForm style={styles.loginForm} />
          </GrowIntoView>
      </ImageBackground>
    )
  }
}
