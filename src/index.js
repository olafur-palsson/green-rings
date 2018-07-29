import React from 'react';
import ReactDOM from 'react-dom';
import { Text } from 'react-native'
import GreenRings from './GreenRings';
import registerServiceWorker from './registerServiceWorker';


const root = document.getElementById('root')
root.style.display = 'flex'
root.style.minHeight = '100vh'
root.style.minWidth = '100vw'


ReactDOM.render(<GreenRings />, document.getElementById('root'));
registerServiceWorker();
