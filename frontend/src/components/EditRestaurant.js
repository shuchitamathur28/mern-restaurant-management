// src/components/EditRestaurant.js
import React, { useEffect, useState } from 'react';
import RestaurantService from '../services/RestaurantService';
import { useParams, useNavigate } from 'react-router-dom';

const EditRestaurant = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    owner: ''
  });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRestaurant = async () => {
      try {
        const restaurant = await RestaurantService.getRestaurantById(id);
        setFormData(restaurant);
      } catch (error) {
        console.error('Error fetching restaurant:', error);
      }
    };

    fetchRestaurant();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await RestaurantService.updateRestaurant(id, formData);
      navigate('/restaurants'); // Redirect to restaurant list after editing
    } catch (error) {
      console.error('Error updating restaurant:', error);
    }
  };

  return (
    <div>
      <h2>Edit Restaurant</h2>
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
          value={formData.address}
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
        <button type="submit">Update Restaurant</button>
      </form>
    </div>
  );
};

export default EditRestaurant;
