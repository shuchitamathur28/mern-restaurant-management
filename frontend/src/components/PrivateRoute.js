import React from 'react';
import { Navigate } from 'react-router-dom';

// A function that checks if a user is authenticated
const isAuthenticated = () => {
    return localStorage.getItem('user'); // Or your own authentication check logic
};

const PrivateRoute = ({ element }) => {
    if (isAuthenticated()) {
        // console.log('Authenticated')
        return element; // If authenticated, return the protected component
    } else {
        // console.log('Not Authenticated')
        return <Navigate to="/login" />; // Redirect to login if not authenticated
    }
};

export default PrivateRoute;
