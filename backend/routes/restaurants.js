const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth'); // Import auth middleware
const Restaurant = require('../models/Restaurant');

// Create Restaurant
router.post('/', auth, async (req, res) => {
    try {
      const userID = req.user;
      const data = { ...req.body, user: userID };
      const newRestaurant = new Restaurant(data);
      await newRestaurant.save();
      res.status(201).json(newRestaurant);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
});

// Example: Get All Restaurants (Protected Route)
router.get('/', auth, async (req, res) => {
  try {
    // Logic to get all restaurants (e.g., from the database)
    const restaurants = await Restaurant.find();
    res.json(restaurants);
  } catch (err) {
    res.status(500).json({ msg: error.message });
  }
});

// Get Single Restaurant
router.get('/:id', auth, async (req, res) => {
    try {
        const restaurant = await Restaurant.findById(req.params.id);
        res.json(restaurant);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update Restaurant
router.put('/:id', auth, async (req, res) => {
    try {
        const updatedRestaurant = await Restaurant.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedRestaurant);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Delete Restaurant
router.delete('/:id', auth, async (req, res) => {
    try {
      await Restaurant.findByIdAndDelete(req.params.id);
      res.json({ message: 'Restaurant deleted' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
});
  
module.exports = router;
