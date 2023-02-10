//Importaciones 
const{getCategorias,postCategoria,putCategorias,deleteCategoria} = require('../controllers/categorias');

const {Router} = require('express');

const router = Router();

router.get('/mostrar', getCategorias);
router.post('/agregar', postCategoria);
router.put('/editar/:id', putCategorias);
router.delete('/eliminar/:id', deleteCategoria);

module.exports = router;

//ROUTES
