import React from 'react';
import ReactDOM from 'react-dom';
import { Text } from 'react-native'
import GreenRings from './GreenRings';
import registerServiceWorker from './registerServiceWorker';
import styles from './styles'


const root = document.getElementById('root')
root.style.minHeight = '100vh'
root.style.maxHeight = '100vh'
root.style.display = 'flex'
root.style.flexDirection = 'column'

ReactDOM.render(<GreenRings />, root);
registerServiceWorker();
