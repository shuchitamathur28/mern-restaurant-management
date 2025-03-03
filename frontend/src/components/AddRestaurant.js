// src/components/AddRestaurant.js
import React, { useState } from 'react';
import RestaurantService from '../services/RestaurantService';
import { useNavigate } from 'react-router-dom';

const AddRestaurant = () => {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    owner: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await RestaurantService.addRestaurant(formData);
      navigate('/restaurants'); // Redirect to restaurant list after adding
    } catch (error) {
      console.error('Error adding restaurant:', error);
    }
  };

  return (
    <div>
      <h2>Add Restaurant</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Restaurant Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="location"
          placeholder="Restaurant Address"
          value={formData.location}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="owner"
          placeholder="Restaurant Owner"
          value={formData.owner}
          onChange={handleChange}
          required
        />
        <button type="submit">Add Restaurant</button>
      </form>
    </div>
  );
};

export default AddRestaurant;
