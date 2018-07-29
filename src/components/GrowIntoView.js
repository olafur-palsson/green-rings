
import React from 'react'
import { Animated, View } from 'react-native'

export default class GrowIntoView extends React.Component {
  state = {
    a_visibility: new Animated.Value(0.001),
    a_growing: new Animated.Value(0.001)
  }

  //first grows into flex: 1
  //then fade-in
  componentDidMount() {
    setTimeout(() => {
      Animated.sequence([
        Animated.timing(
          this.state.a_growing, {
            toValue: 1,
            duration: 500
        }),
        Animated.timing(
          this.state.a_visibility, {
            toValue: 1,
            duration: 500
        })
      ]).start()
    }, 2000)


  }

  render() {
    let { a_visibility, a_growing } = this.state
    return(
        <Animated.View
          style={{
            opacity: a_visibility,
            flex: a_growing,
          }}
        >
          {this.props.children}
        </Animated.View>
    )
  }
}
