// src/components/FilterSortControls.js
import React from 'react';

function FilterSort({ onFilterChange, onSortChange }) {
  const handleFilterChange = (event) => {
    onFilterChange(event.target.checked);
  };

  const handleSortChange = (event) => {
    onSortChange(event.target.value);
  };

  return (
    <div className="ui segment">
      <label>
        Greased Only
        <input
          type="checkbox"
          onChange={handleFilterChange}
        />
      </label>&nbsp;&nbsp;&nbsp;
      <select onChange={handleSortChange}>
        <option value="">Sort By</option>
        <option value="name">Name(A-Z)</option>
        <option value="weight">Weight(Lowest to Highest)</option>
      </select>
    </div>
  );
}

export default FilterSort;
