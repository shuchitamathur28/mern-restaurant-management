// src/components/RestaurantList.js
import React, { useEffect, useState } from 'react';
import RestaurantService from '../services/RestaurantService';
import { Link } from 'react-router-dom';

const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const data = await RestaurantService.getRestaurants();
        setRestaurants(data);
      } catch (error) {
        console.error('Error fetching restaurants:', error);
      }
    };

    fetchRestaurants();
  }, []);

  const handleDelete = async (id) => {
    try {
      await RestaurantService.deleteRestaurant(id);
      setRestaurants((prev) => prev.filter((restaurant) => restaurant._id !== id));
    } catch (error) {
      console.error('Error deleting restaurant:', error);
    }
  };

  return (
    <div>
      <h2>Restaurants</h2>
      <Link to="/add-restaurant">Add Restaurant</Link>
      <table cellPadding={5} cellSpacing={0} width={900} border={1}>
        <thead>
            <tr>
                <th>Name</th>
                <th>Location</th>
                <th>Owner</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
        </thead>
        <tbody>
            {restaurants.map((restaurant) => (
            <tr key={restaurant._id}>
                <td>{restaurant.name}</td>
                <td>{restaurant.location}</td>
                <td>{restaurant.owner}</td>
                <td><Link to={`/edit-restaurant/${restaurant._id}`}>Edit</Link></td>
                <td><button onClick={() => handleDelete(restaurant._id)}>Delete</button></td>
            </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};



export default RestaurantList;
