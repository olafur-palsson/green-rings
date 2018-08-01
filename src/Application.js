import React, { Component } from 'react';
import { Text, View } from 'react-native'
import logo from './logo.svg';
import Startup from './startup/Startup'
import styles from './styles'
import Database from './Database'
import Main from './main/Main'
import Fade from './animations/Fade'
import firebaseImport from 'firebase'

console.log(this)

const database = new Database()

class Application extends Component {

  constructor(props) {
    super(props)
    this.state = {
      currentUser: null
    }
    this.animator = React.createRef()
  }

  componentWillMount() {
    database.fauth.onAuthStateChanged((user) => {
      this.animator.current.fadeOut_exeFn_fadeIn(() => {
        this.setState({
          userIsLoggedIn: true,
          currentUser: user
        })
      })
    })
  }

  router(userIsLoggedIn) {
    if(userIsLoggedIn)
      return(<Main user={ this.state.user }/>)
    else
      return(<Startup

      />)
  }

  render() {
    return (
      // styles: to make sure web and android look the same
      <View style={ styles.standardise }>
        <Fade startVisible={ true } ref={ this.animator }>
          { this.router(this.state.userIsLoggedIn) }
        </Fade>
      </View>
    );
  }
}

export default Application;
