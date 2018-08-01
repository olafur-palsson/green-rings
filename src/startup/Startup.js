import { View, Animated, Image, ImageBackground } from 'react-native'
import React from 'react'
import styles from './styles'
import SelectForm from './SelectForm'
import GrowIntoView from '../animations/GrowIntoView'
import SignInForm from './SignInForm'
import SignUpForm from './SignUpForm'
import Fade from '../animations/Fade'

export default class Startup extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      mainMenu: true,
      signIn: true
    }
    this.setForm = this.setForm.bind(this)
    this.animator = React.createRef()
  }

  componentDidMount() {
    this.animator.current.fadeIn()
  }

  // This method is the one used to select which form to display at startup
  router(isMainMenu, isSignIn) {
    let form
    if(isSignIn)   form = (<SignInForm/>)
    if(isMainMenu) form =
      (<SelectForm
        style={styles.loginForm}
        setFormTo_p1mainMenu_p2signIn={ this.setForm.bind(this) }
      />)

    else           form = (<SignUpForm />)
    return(
      <Fade start={true} ref={this.animator} component={form}>
        {form}
      </Fade>
    )
  }

  // Setform to be called by buttons to navigate throught the startup
  setForm(p1, p2) {
    console.log("This is something")
    this.animator.current.fadeOut()
    setTimeout(() => {
      this.setState({
        mainMenu: p1,
        signIn: p2
      })
    }, 500)
    setTimeout(() => {
      this.animator.current.fadeIn()
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
            {this.router(this.state.mainMenu, this.state.signIn)}

          </GrowIntoView>
      </ImageBackground>
    )
  }
}
