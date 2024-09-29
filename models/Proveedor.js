const mongoose = require('mongoose');

const proveedorSchema = new mongoose.Schema({
  idproveedor: { type: Number, required: true },
  nomprecia: { type: String, required: true, maxlength: 50 }
});

module.exports = mongoose.model('Proveedor', proveedorSchema);