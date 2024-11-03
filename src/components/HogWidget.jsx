// src/components/HogWidget.js
import React, { useState } from 'react';

function HogWidget({ hog, onHideHog }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => setIsExpanded(!isExpanded);
  const handleHide = () => onHideHog(hog.name);

  return (
    <div class="ui card">
  <div class="content">
        <img src={hog.image} className="card-img-top" alt={hog.name} />
        <div className="card-body">
          <h5 className="card-title">{hog.name}</h5>
          <button className="btn btn-primary btn-sm me-2" onClick={toggleExpanded}>
            {isExpanded ? 'Hide Details' : 'Show Details'}
          </button>
          
          {isExpanded && (
            <div className="mt-3">
              <p className="card-text">Specialty: {hog.specialty}</p>
              <p className="card-text">Weight: {hog.weight}</p>
              <p className="card-text">Greased: {hog.greased ? 'Yes' : 'No'}</p>
              <p className="card-text">Highest Medal: {hog['highest medal achieved']}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default HogWidget;