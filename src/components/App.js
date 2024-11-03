import React, { useState } from 'react';
import porkersData from '../porkers_data';
import Nav from './Nav';
import HogContainer from './HogContainer';
import FilterSort from './FilterSort';
import AddHogForm from './AddHogForm';

function App() {
  const [hogData, setHogData] = useState(porkersData);
  const [filterByGreased, setFilterByGreased] = useState(false);
  const [sortCriteria, setSortCriteria] = useState(null);
  const [hiddenHogs, setHiddenHogs] = useState([]);
  const [showModal, setShowModal] = useState(false);


  
  const handleFilterChange = () => {
    setFilterByGreased(!filterByGreased);
  };

  const handleSortChange = (criteria) => {
    setSortCriteria(criteria);
  };

  const hideHog = (hogName) => {
    setHiddenHogs([...hiddenHogs, hogName]);
  };

  const addHog = (newHog) => {
    setHogData([...hogData, newHog]);
    setShowModal(false); // Close the modal after adding a hog
  };

  const filteredHogs = hogData
    .filter(hog => !filterByGreased || hog.greased)
    .filter(hog => !hiddenHogs.includes(hog.name));

  const sortedHogs = filteredHogs.sort((a, b) => {
    if (sortCriteria === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortCriteria === 'weight') {
      return a.weight - b.weight;
    }
    return 0;
  });

  return (
    <div>
      <Nav />
      <button
        className="btn btn-primary mb-3"
        onClick={() => setShowModal(true)}
      >
        Add Hog
      </button>

      {/* Bootstrap Modal */}
      <div className={`modal fade ${showModal ? 'show' : ''}`} style={{ display: showModal ? 'block' : 'none' }} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden={!showModal}>
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Add a New Hog</h5>
              <button type="button" className="close" onClick={() => setShowModal(false)} aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <AddHogForm onAddHog={addHog} />
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Close</button>
            </div>
          </div>
        </div>
      </div>

{/* filter controls goes here */}
      <FilterSort
        onFilterChange={handleFilterChange}
        onSortChange={handleSortChange}
      />
      {/* container holding hogs information goes here */}
     
      <div class="container"></div>
      <div class="card">
      
      <HogContainer 
        hogs={sortedHogs} 
        hiddenHogs={hiddenHogs}
        onHideHog={hideHog}
      />
      </div>
    
 
    </div>
  );
}

export default App;
