import React from 'react';
// Global styling
import './global-styles';

import DrumContainer from './containers/DrumsContainer';

const sounds = require('../src/assets/sounds/*.wav');

console.log(sounds);

const App = () => <DrumContainer sounds={sounds} />;

export default App;
