const express = require('express');
const router = express.Router();
const Insumo = require('../models/Insumo');

// Get all insumos
router.get('/', async (req, res) => {
  try {
    const insumos = await Insumo.find();
    res.render('insumos', { insumos, title: 'Insumos' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new insumo
router.post('/', async (req, res) => {
  const insumo = new Insumo({
    idinsumo: req.body.idinsumo,
    nominsumo: req.body.nominsumo,
    idproveedor: req.body.idproveedor,
    precio: req.body.precio,
    stock: req.body.stock
  });

  try {
    await insumo.save();
    res.redirect('/insumos');
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete an insumo
router.delete('/:id', async (req, res) => {
  try {
    await Insumo.findByIdAndDelete(req.params.id);
    res.redirect('/insumos');
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;