import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

import configSounds from '../../assets/resources/configSounds';
import Drum from '../../components/Drum';

const getSound = (sounds, soundName) => sounds[soundName];

const prepareDrums = sounds =>
  configSounds.sounds.map(s => (
    <Drum key={s.name} letter={s.letter} soundName={s.name} sound={getSound(sounds, s.name)} />
  ));

const Container = styled('div')`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
`;

const DrumContainer = ({ sounds }) => <Container>{prepareDrums(sounds)}</Container>;

DrumContainer.propTypes = {
  sounds: PropTypes.object
};

export default DrumContainer;
