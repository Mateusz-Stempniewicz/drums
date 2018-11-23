import React from 'react';

import './global-styles';
import DrumContainer from './containers/DrumsContainer';

const sounds = require('../src/assets/sounds/*.wav');

const App = () => <DrumContainer sounds={sounds} />;

export default App;
