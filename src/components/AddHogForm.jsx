import React, { useState } from 'react';
//add the form to add the hogs
function AddHogForm({ onAddHog }) {
  const [formData, setFormData] = useState({
    name: '',
    specialty: '',
    weight: 0,
    greased: false,
    image: '',
    highest_medal_achieved: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddHog(formData);
    setFormData({
      name: '',
      specialty: '',
      weight: 0,
      greased: false,
      image: '',
      highest_medal_achieved: '',
    });
  };

  //return the values to the container and concatenbate them to forms added hogs information
  return (
    <form className="ui form segment" onSubmit={handleSubmit}>
      <h3>Add a New Hog</h3>
      <div className="field">
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter hog's name"
          required
        />
      </div>
      <div className="field">
        <label>Specialty</label>
        <input
          type="text"
          name="specialty"
          value={formData.specialty}
          onChange={handleChange}
          placeholder="Enter hog's specialty"
        />
      </div>
      <div className="field">
        <label>Weight</label>
        <input
          type="number"
          name="weight"
          value={formData.weight}
          onChange={handleChange}
          placeholder="Enter hog's weight"
        />
      </div>
      <div className="field">
        <label>
          Greased
          <input
            type="checkbox"
            name="greased"
            checked={formData.greased}
            onChange={handleChange}
          />
        </label>
      </div>
      <div className="field">
        <label>Image URL</label>
        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
          placeholder="Enter image URL"
        />
      </div>
      <div className="field">
        <label>Highest Medal Achieved</label>
        <input
          type="text"
          name="highest_medal_achieved"
          value={formData.highest_medal_achieved}
          onChange={handleChange}
          placeholder="Enter highest medal achieved"
        />
      </div>
      <button type="submit" className="ui button primary">Add Hog</button>
    </form>
  );
}

export default AddHogForm;
