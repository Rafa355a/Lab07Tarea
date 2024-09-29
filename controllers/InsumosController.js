const Insumo = require('../models/Insumo');

// Mostrar todos los insumos
exports.mostrarInsumos = async (req, res) => {
    try {
        const insumos = await Insumo.find();
        res.render('insumos', { insumos });
    } catch (err) {
        console.error('Error mostrando insumos:', err);
        res.status(500).send('Error mostrando los insumos');
    }
};

// Agregar insumo
exports.agregarInsumo = async (req, res) => {
    try {
        const nuevoInsumo = new Insumo(req.body);
        await nuevoInsumo.save();
        res.redirect('/insumos');
    } catch (err) {
        console.error('Error al agregar insumo:', err);
        res.status(500).send('Error al agregar el insumo');
    }
};

// Editar insumo
exports.editarInsumo = async (req, res) => {
    try {
        const insumo = await Insumo.findById(req.params.id);
        res.render('editarInsumo', { insumo });
    } catch (err) {
        console.error('Error al editar insumo:', err);
        res.status(500).send('Error al editar el insumo');
    }
};

// Actualizar insumo
exports.actualizarInsumo = async (req, res) => {
    try {
        await Insumo.findByIdAndUpdate(req.params.id, req.body);
        res.redirect('/insumos');
    } catch (err) {
        console.error('Error al actualizar insumo:', err);
        res.status(500).send('Error al actualizar el insumo');
    }
};

// Eliminar insumo
exports.eliminarInsumo = async (req, res) => {
    try {
        await Insumo.findByIdAndDelete(req.params.id);
        res.redirect('/insumos');
    } catch (err) {
        console.error('Error al eliminar insumo:', err);
        res.status(500).send('Error al eliminar el insumo');
    }
};
