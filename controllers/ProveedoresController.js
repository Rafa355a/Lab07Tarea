const Proveedor = require('../models/Proveedor');

// Controlador para mostrar proveedores
exports.mostrarProveedores = async (req, res) => {
    try {
        const proveedores = await Proveedor.find();
        res.render('proveedores', { proveedores });
    } catch (err) {
        console.error('Error mostrando proveedores:', err);
        res.status(500).send('Error mostrando los proveedores');
    }
};

// Controlador para agregar un proveedor
exports.agregarProveedor = async (req, res) => {
    try {
        const nuevoProveedor = new Proveedor({
            nombre: req.body.nombre,
            direccion: req.body.direccion,
            telefono: req.body.telefono
        });

        await nuevoProveedor.save();
        res.redirect('/proveedores');
    } catch (err) {
        console.error('Error al agregar proveedor:', err);
        res.status(500).send('Error al agregar el proveedor');
    }
};
