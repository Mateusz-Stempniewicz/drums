import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

const DrumItem = styled('div')`
  width: 100px;
  height: 100px;
  margin: 10px;
  border-radius: 8px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.2);
  cursor: pointer;
  transition: all 0.08s ease-out;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const DrumLetter = styled('div')`
  font-size: 2rem;
  font-weight: 700;
  color: #fff;
  user-select: none;
`;

const DrumName = styled('div')`
  color: #eeb501;
  user-select: none;
  font-size: 0.75em;
  text-transform: uppercase;
`;

const Drum = ({ letter, sound, soundName }) => {
  const [audio] = useState(new Audio(sound));

  const clickHandler = () => audio.play();

  return (
    <DrumItem onClick={clickHandler}>
      <DrumLetter>{letter}</DrumLetter>
      <DrumName>{soundName}</DrumName>
    </DrumItem>
  );
};

Drum.propTypes = {
  letter: PropTypes.string,
  sound: PropTypes.string,
  soundName: PropTypes.string
};

export default Drum;
