import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
  { 
    id: {type: String},
    nome: {type: String, min: 3, match: /[a-z]/ , required: true},
    status: {type: String, required: true}
  }
)

const categorias = mongoose.model('categorias', categorySchema);

export default categorias