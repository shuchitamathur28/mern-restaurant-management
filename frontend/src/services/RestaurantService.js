// src/services/RestaurantService.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/restaurants/';

// Get all restaurants
const getRestaurants = async () => {
  const token = localStorage.getItem("user");
  const response = await axios.get(API_URL, {
        headers: {
            Authorization: `Bearer ${token}`,  // Send token in Authorization header
            "Content-Type": "application/json",
        },
    });
  return response.data;
};

// Add a new restaurant
const addRestaurant = async (restaurantData) => {
  const token = localStorage.getItem("user");
  try {
    const response = await axios.post(API_URL, restaurantData, {
        headers: {
            Authorization: `Bearer ${token}`,  // Send token in Authorization header
            "Content-Type": "application/json",
        },
      });
      return response.data;
  } catch (error) {
    console.error('Error while adding restaurant:', error.response.data);
  }
  
};

// Update a restaurant
const updateRestaurant = async (id, restaurantData) => {
  const response = await axios.put(`${API_URL}${id}`, restaurantData);
  return response.data;
};

// Delete a restaurant
const deleteRestaurant = async (id) => {
  const response = await axios.delete(`${API_URL}${id}`);
  return response.data;
};

const RestaurantService = {
    getRestaurants,
    addRestaurant,
    updateRestaurant,
    deleteRestaurant,
};

export default RestaurantService;