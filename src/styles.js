/*

    To standardise between web and android
    for the rest it's better to use the extension
    fileName.ondroid.js

*/
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  standardise: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
    margin: 0
  }
})

export default styles
