const {Schema, model } = require('mongoose');

const CategoriasSchema = Schema({
    nombreCategoria:{
        type:String,
        required:[true, 'El nombre es obligatorio']
    },
    
    pasillo:{
        type:Number,
        required: [true, 'El numero de pasillo es obligatorio']
    },
    estado:{
        type:Boolean,
        required: [true, 'El estado es obligatorio']
    }
});
module.exports = model('Categorias', CategoriasSchema);