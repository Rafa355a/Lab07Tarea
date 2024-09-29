const express = require('express');
const router = express.Router();
const Proveedor = require('../models/Proveedor');

// Get all proveedores
router.get('/', async (req, res) => {
  try {
    const proveedores = await Proveedor.find();
    res.render('proveedores', { proveedores, title: 'Proveedores' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new proveedor
router.post('/', async (req, res) => {
  const proveedor = new Proveedor({
    idproveedor: req.body.idproveedor,
    nomprecia: req.body.nomprecia
  });

  try {
    await proveedor.save();
    res.redirect('/proveedores');
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a proveedor
router.delete('/:id', async (req, res) => {
  try {
    await Proveedor.findByIdAndDelete(req.params.id);
    res.redirect('/proveedores');
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;