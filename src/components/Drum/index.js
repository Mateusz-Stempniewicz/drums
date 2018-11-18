import React, { useState } from 'react';
import PropTypes from 'prop-types';

const styles = {
  color: 'white'
};

const Drum = ({ letter, sound }) => {
  const [audio] = useState(new Audio(sound));

  const clickHandler = () => audio.play();

  return (
    <div className="Drum" onClick={clickHandler}>
      <h2 style={styles}>{letter}</h2>
    </div>
  );
};

Drum.propTypes = {
  letter: PropTypes.string,
  sound: PropTypes.object
};

export default Drum;
