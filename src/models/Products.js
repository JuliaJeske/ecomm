import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  { 
    id: {type: String},
    nome: {type: String, min: 3, match: /[a-z]/ ,required: true},
    slug: {type: String,match: /[A-Za-z-[0-9]/, required: true},
    precoUnitario: {type: Number, min: 1, required: true},
    quantidadeEstoque: {type: Number,min: 1,max: 10000, required: true},
    idCategoria: {type: mongoose.Schema.Types.ObjectId,ref: 'categorias',required: true}
  }
)

const produtos = mongoose.model('produtos', productSchema);

export default produtos