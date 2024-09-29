const mongoose = require('mongoose');

const insumoSchema = new mongoose.Schema({
  idinsumo: { type: Number, required: true },
  nominsumo: { type: String, required: true, maxlength: 150 },
  idproveedor: { type: Number, required: true },
  precio: { type: Number, required: true, min: 0 },
  stock: { type: Number, required: true, min: 0 }
});

module.exports = mongoose.model('Insumo', insumoSchema);