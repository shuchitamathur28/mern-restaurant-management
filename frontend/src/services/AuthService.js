import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth/';

// Register user
const register = async (userData) => {
  const response = await axios.post(`${API_URL}register`, userData);
  return response.data;
};

// Login user
const login = async (userData) => {
  const response = await axios.post(`${API_URL}login`, userData);
  if (response.data.token) {
    localStorage.setItem('user', JSON.stringify(response.data)); // Store token
  }
  return response.data;
};

// Logout user
const logout = () => {
  localStorage.removeItem('user'); // Remove token on logout
};

const AuthService = {
  register,
  login,
  logout
};

export default AuthService;
