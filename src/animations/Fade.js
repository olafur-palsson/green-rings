import React from 'react'
import { Animated, View } from 'react-native'

export default class Fade extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      a_visibility: new Animated.Value(0)
    }
  }

  componentWillMount() {
    this.duration =
      this.props.duration ?
      this.props.duration : 500
    if(this.props.startVisible)
      this.setState({
        a_visibility: new Animated.Value(1)
      })
  }

  compnentDidMount() {
    if(!this.props.start) return
    const delay = this.props.delay ? this.props.delay : 0
    if(this.props.startVisible)
      this.fadeOut(delay)
    else
      this.fadeIn(delay)
  }

  fadeIn(delay) {
    setTimeout(() => {
      Animated.timing(
        this.state.a_visibility, {
          toValue: 1,
          duration: this.duration
        }
      ).start()
    }, delay)
  }

  fadeOut(delay) {
    setTimeout(() => {
      Animated.timing(
        this.state.a_visibility, {
          toValue: 0,
          duration: this.duration
        }
      ).start()
    }, delay)
  }

  fadeOut_exeFn_fadeIn(inBetweenFunction, delay) {
    this.fadeOut(delay)
    setTimeout(() => {
      inBetweenFunction()
      this.fadeIn()
    }, delay + this.duration)
  }

  render() {
    return(
      <Animated.View
        style={{
          ...this.props.style,
          opacity: this.state.a_visibility
        }}
      >
        { this.props.children }
      </Animated.View>
    )
  }
}
