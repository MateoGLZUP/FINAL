require('dotenv').config();
const express = require('express');
const mongoose = require("mongoose");
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json()); // Parse JSON data
app.use(express.static('public'));

// MongoDB Configuration
const mongoUrl = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.mongodb.net/${process.env.DB}?retryWrites=true&w=majority`;
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log('Error connecting to MongoDB:', err));

// Define the house schema and model
const houseSchema = new mongoose.Schema({
  city: String,
  zipCode: String,
  price: Number,
  description: String,
  imageUrl: String,
  bedrooms: Number,
  bathrooms: Number,
  squareFeet: Number
});
const House = mongoose.model('House', houseSchema);

// API Endpoint for Search
app.get('/api/search', (req, res) => {
  const address = req.query.address;
  // Example data (in a real app, fetch from MongoDB)
  const Houses = [
    {
      city: "Zapopan",
      zipCode: "43221",
      price: 245000,
      name: "Modern Villa",
      imageurl: "/pics/casa5.jpeg",
    },
    {
      city: "Tlaquepaque",
      zipCode: "43243",
      price: 450500,
      name: "Cozy Cottage",
      imageurl: "/pics/casa4.jpeg",
    },
    {
      city: "Tonala",
      zipCode: "43256",
      price: 434000,
      name: "Urban Apartment",
      imageurl: "/pics/casa3.jpeg",
    }
  ];

  const filteredHouses = Houses.filter(house =>
    house.city.toLowerCase().includes(address.toLowerCase()) ||
    house.zipCode.includes(address) ||
    house.name.toLowerCase().includes(address.toLowerCase())
  );

  res.json(filteredHouses.length > 0 ? filteredHouses : { message: 'No houses found' });
});

// API Endpoint for Catalog
app.get('/api/catalog', (req, res) => {
  const Houses = [
    {
      city: "Zapopan",
      zipCode: "43221",
      price: 245000,
      name: "Modern Villa",
      imageurl: "/pics/casa5.jpeg",
    },
    {
      city: "Tlaquepaque",
      zipCode: "43243",
      price: 450500,
      name: "Cozy Cottage",
      imageurl: "/pics/casa4.jpeg",
    },
    {
      city: "Tonala",
      zipCode: "43256",
      price: 434000,
      name: "Urban Apartment",
      imageurl: "/pics/casa3.jpeg",
    }
  ];
  res.json(Houses);
});

// API Endpoint for House Details
app.get('/api/house/:zipCode', (req, res) => {
  const zipCode = req.params.zipCode;
  const Houses = [
    {
      city: "Zapopan",
      zipCode: "43221",
      price: 245000,
      name: "Modern Villa",
      imageurl: "/pics/casa5.jpeg",
    },
    {
      city: "Tlaquepaque",
      zipCode: "43243",
      price: 450500,
      name: "Cozy Cottage",
      imageurl: "/pics/casa4.jpeg",
    },
    {
      city: "Tonala",
      zipCode: "43256",
      price: 434000,
      name: "Urban Apartment",
      imageurl: "/pics/casa3.jpeg",
    }
  ];

  const house = Houses.find(h => h.zipCode === zipCode);
  if (house) {
    res.json(house);
  } else {
    res.status(404).json({ error: 'House not found' });
  }
});

// Start the server
app.listen(3000, () => {
  console.log('Server running on port 3000');
});
