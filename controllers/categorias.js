const {response, request } = require('express');
var bcrypt = require('bcryptjs');

const Categorias = require('../models/categorias');

const getCategorias = async(req = request, res = response) => {
    //Condiciones del get


    const listaCategoria = await Promise.all([
        Categorias.countDocuments(),
        Categorias.find()

    ]);

    res.json ({
        msg: 'get Api - Controlador categorias',
        listaCategoria
    })
}

const postCategoria = async(req = request, res = response) => {
    //nombre, correo, password y role
    const {nombreCateogira,  pasillo, estado} = req.body;
    const categoriaGuardadoDB = new Categorias({nombreCateogira, pasillo, estado});
    

    //Guardar en DB
    await categoriaGuardadoDB.save();
    
    res.json ({
        msg: 'POST Api - Controlador usuario para agregar',
        categoriaGuardadoDB
    });
}

const putCategorias = async(req = request, res = response) => {
    //Obtenemos info de la ruta
    const {id} = req.params;
    //Especificamos lo que no queremos que cambie, lo que no esta se cambia
    const {_id,...resto} = req.body;
    
    
    //Editar al usuario por el id
    const categoriaEditado = await Categorias.findByIdAndUpdate(id, resto);

    res.json ({
        msg: 'PUT editar',
        id, categoriaEditado
    })
}

const deleteCategoria = async(req = request, res = response) => {
    //Obtenemos info de la ruta el id
    const {id} = req.params;
    
    //Eliminar al usuario por el id fisicamente de la DB
    const cateogriaEliminado = await Categorias.findByIdAndDelete(id);
    
    //Darlo de baja pero no borrarlo en la DB
    //const usuarioEliminado = await Usuario.findByIdAndUpdate(id, {estado: false});
    
    res.json ({
        msg: 'Delete eliminar',
        id, cateogriaEliminado
    });
}

module.exports = {
    getCategorias,
    postCategoria,
    putCategorias,
    deleteCategoria
}

//CONTROLADORs
