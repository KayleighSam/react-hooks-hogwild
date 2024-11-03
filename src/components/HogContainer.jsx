// src/components/HogContainer.js
import React from 'react';
import HogWidget from './HogWidget';
//create a function to iterate the hog information and fetch the data and map them in the comntainer
function HogContainer({ hogs, hiddenHogs, onHideHog }) {
  return (
    <div className="container">
      <div className="row">
        {hogs.map((hog) => (
          !hiddenHogs.includes(hog.name) && (
            <HogWidget key={hog.name} hog={hog} onHideHog={onHideHog} />
          )
        ))}
      </div>
    </div>
  );
}

export default HogContainer;
