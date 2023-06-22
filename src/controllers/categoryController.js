import categorias from "../models/Category.js";

class CategoryController {
  static listarCategorias = (req, res) => {
    categorias.find((err, categorias) => {
      res.status(200).json(categorias)
    })
  }
  static listarCategoriaPorId = (req,res) => {
    const id = req.params.id
    categorias.findById(id, (err, categorias) => {
      if(err) {
        res.status(400).send(err.message)
      } else {
        res.status(200).send(categorias)
      }
    })
  }
  static cadastrarCategoria = (req,res) => {
    let categoria = new categorias(req.body);
    categoria.save((err) => {
      if(err) {
        res.status(500).send({message: `${err.message} - falha ao cadastrar categoria!`})
      } else {
        res.status(201).send({message:'categoria cadastrada com sucesso!'}) 
      }
    })
  }
  static atualizarCategoria = (req,res) => {
    const id = req.params.id
    categorias.findByIdAndUpdate(id, {$set: req.body}, (err) => {
      if(!err) {
        res.status(200).send({message:'Categoria atualizado com sucesso!'})
      } else {
        res.status(500).send({message: err.message})
      }
    })
  }
  static excluirCategoria = (req,res) => {
    const id = req.params.id

    categorias.findOneAndDelete(id, (err) => {
      if(!err) {
        res.status(200).send({message: 'Categoria excluída com sucesso'})
      } else {
        res.status(500).send(err.message)
      }
    })
  }
   static ativaStatusCategoria = (req,res) => {
    const id = req.params.id
    categorias.findByIdAndUpdate(id,{$set: req.body}, (err) => {
      if(!err) {
        res.status(200).send({message:'status atualizado com sucesso!'})
      } else {
        res.status(500).send({message: err.message})
      }
    })
  }
}

export default CategoryController