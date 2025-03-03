import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import RestaurantList from './components/RestaurantList'; // Create this component later
import AddRestaurant from './components/AddRestaurant';
import EditRestaurant from './components/EditRestaurant';
import PrivateRoute from './components/PrivateRoute';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* Add more routes for your app */}
        <Route 
          path="/restaurants" 
          element={<PrivateRoute element={<RestaurantList />} />} 
        />
        <Route 
          path="/add-restaurant" 
          element={<PrivateRoute element={<AddRestaurant />} />} 
        />
        <Route 
          path="/edit-restaurant/:id" 
          element={<PrivateRoute element={<EditRestaurant />} />} 
        />
        <Route path="/" element={<Login />} /> {/* Default route */}
      </Routes>
    </Router>
  );
};

export default App;
