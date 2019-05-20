import React from 'react';
import { Wave } from 'react-animated-text';

const AnimateText = ({ text }) => {
  return (
    <div>
      <Wave text={text} effect="stretch" effectChange={2.0} />
    </div>
  );
};

export default AnimateText;