import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  logo: {
    flex: 3,
    minWidth: '100%'
  },
  container: {
    minHeight: '100%',
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
    flex: 1
  },
  loginButton: {
    flex: 1,
    maxWidth: 600,
    margin: 10,
  }
})

export default styles
