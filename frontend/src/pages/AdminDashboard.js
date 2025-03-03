import React, { useState, useEffect } from "react";
import axios from "axios";

const AdminDashboard = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/restaurants")
      .then(response => setRestaurants(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <ul>
        {restaurants.map((restaurant) => (
          <li key={restaurant._id}>{restaurant.name} - {restaurant.location}</li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;
