import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { Object } from 'core-js';

import configSounds from '../../assets/resources/configSounds';
import Drum from '../../components/Drum';

const prepareDrums = soundMap => {
  const soundList = [];
  Object.keys(soundMap).forEach((key) => {
    const sound = soundMap[key];
    soundList.push(
      <Drum
        key={sound.objectKey}
        letter={sound.letter}
        soundName={sound.soundName}
        sound={sound.sound}
      />
    );
  });
  return soundList;
};

const Container = styled('div')`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
`;

const createSoundMap = (sounds, configs) => {
  const map = configs.sounds.map(s => ({
    [s.letter]: {
      letter: s.letter,
      sound: sounds[s.name],
      soundName: s.name,
      objectKey: s.name
    }
  }));

  return Object.assign({}, ...map);
};

const DrumContainer = ({ sounds }) => {
  const [soundMap] = useState(createSoundMap(sounds, configSounds));

  const onKeyPressHandler = e => {
    const mapElement = soundMap[e.key.toUpperCase()];
    const audio = new Audio(mapElement.sound);
    audio.currentTime = 0;
    audio.play();
    document.getElementById(mapElement.objectKey).classList.add('playing');
  };

  const onKeyReleaseHandler = e => {
    const mapElement = soundMap[e.key.toUpperCase()];
    document.getElementById(mapElement.objectKey).classList.remove('playing');
  };

  useEffect(() => {
    window.addEventListener('keydown', onKeyPressHandler, false);
    window.addEventListener('keyup', onKeyReleaseHandler, false);
    return () => {
      window.removeEventListener('keydown', onKeyPressHandler, false);
      window.removeEventListener('keyup', onKeyReleaseHandler, false);
    };
  });

  return <Container>{prepareDrums(soundMap)}</Container>;
};

DrumContainer.propTypes = {
  sounds: PropTypes.object
};

export default DrumContainer;
