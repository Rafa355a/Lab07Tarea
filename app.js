const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');

const app = express();
const port = 3000;

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1/Negocio2024', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

// Set up EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Set up express-ejs-layouts
app.use(expressLayouts);
app.set('layout', 'layout'); // This sets layout.ejs as the default layout

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Routes
const proveedoresRoutes = require('./routes/proveedores');
const insumosRoutes = require('./routes/insumos');

app.use('/proveedores', proveedoresRoutes);
app.use('/insumos', insumosRoutes);

// Home route
app.get('/', (req, res) => {
  res.render('index', { title: 'Inicio' });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});