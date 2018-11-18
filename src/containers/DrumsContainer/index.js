import React from 'react';
import PropTypes from 'prop-types';

import configSounds from '../../assets/resources/configSounds';
import Drum from '../../components/Drum';

const getSound = (sounds, soundName) => sounds[soundName];

const prepareDrums = sounds =>
  configSounds.sounds.map(s => (
    <Drum key={s.name} letter={s.letter} sound={getSound(sounds, s.name)} />
  ));

const DrumContainer = ({ sounds }) => <div className="DrumContainer">{prepareDrums(sounds)}</div>;

DrumContainer.propTypes = {
  sounds: PropTypes.object
};

export default DrumContainer;
