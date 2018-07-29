import React, { Component } from 'react';
import { Text, View } from 'react-native'
import logo from './logo.svg';
import Startup from './startup/Startup'
import styles from './styles'

class GreenRings extends Component {
  render() {
    return (
      <View style={ styles.standardise }>
        <Startup />
      </View>
    );
  }
}

export default GreenRings;
