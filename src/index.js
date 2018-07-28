import React from 'react';
import ReactDOM from 'react-dom';
import { Text } from 'react-native'
import GreenRings from './GreenRings';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<GreenRings />, document.getElementById('root'));
registerServiceWorker();
