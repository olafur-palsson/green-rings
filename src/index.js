import React from 'react';
import ReactDOM from 'react-dom';
import { Text } from 'react-native'
import Application from './Application';
import registerServiceWorker from './registerServiceWorker';
import styles from './styles'


// styles: to make sure #root behaves the same on web as on android
const root = document.getElementById('root')
root.style.minHeight = '100vh'
root.style.maxHeight = '100vh'
root.style.display = 'flex'
root.style.flexDirection = 'column'

ReactDOM.render(<Application />, root);
registerServiceWorker();
