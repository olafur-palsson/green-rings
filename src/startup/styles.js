import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  logo: {
    flex: 3,
    minWidth: '100%'
  },
  container: {
    minWidth: '100%',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 0,
    padding: 0
  },
  loginFormContainer: {
    width: '100%'
  },
  loginForm: {
    maxWidth: 600,
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  loginButton: {
    flex: 1,
    borderRadius: 3
  }
})

export default styles
