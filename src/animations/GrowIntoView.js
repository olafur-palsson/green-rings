
import React from 'react'
import { Animated, View } from 'react-native'

export default class GrowIntoView extends React.Component {
  state = {
    a_visibility: new Animated.Value(0.001),
    a_growing: new Animated.Value(0.001)
  }

  //first grows into flex: 1
  //then fade-in
  //used in the Log-in animation if you would like to see in action
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

  //the minHeight here is crusial, it reserves space for the component so it
  //doesn't make it when the component mounts
  render() {
    let { a_visibility, a_growing } = this.state
    const startingHeight = this.props.startingHeight ? this.props.startingHeight : 100
    return(
        <Animated.View
          style={{
            minWidth: '100%',
            minHeight: startingHeight,
            justifyContent: 'center',
            alignItems: 'center',
            opacity: a_visibility,
            flex: a_growing,
          }}
        >
          {this.props.children}
        </Animated.View>
    )
  }
}
