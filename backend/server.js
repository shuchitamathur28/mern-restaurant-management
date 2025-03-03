require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const authRoutes = require('./routes/auth');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
  res.send("Restaurant API Running");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const restaurantRoutes = require('./routes/restaurants'); // Import restaurant routes
app.use('/api/restaurants', restaurantRoutes); // Use restaurant routes


/*
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2N2I0NDc4YzNmNmJjYjAwYjA4MWQwZTQiLCJpYXQiOjE3Mzk4Njg0NjEsImV4cCI6MTc0MDIyODQ2MX0.5Ws-In-o0riVtMRwGimwn49aW23E5MxGuyPacZXQHEU
*/