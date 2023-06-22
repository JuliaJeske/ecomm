import produtos from "../models/Products.js";

class ProductsController  {
  static listarProdutos = (req, res) => {
    produtos.find((err, produtos) => {
      res.status(200).json(produtos)
    })
  }
  static listarProdutoPorId = (req,res) => {
    const id = req.params.id
    produtos.findById(id, (err, produtos) => {
      if(err) {
        res.status(400).send(err.message)
      } else {
        res.status(200).send(produtos)
      }
    })
  }
  static cadastrarProduto = (req,res) => {
    let produto = new produtos(req.body);
    produto.save((err) => {
      if(err) {
        res.status(500).send({message: `${err.message} - falha ao cadastrar produto!`})
      } else {
        res.status(201).send({message:'produto cadastrado com sucesso!'}) 
      }
    })
  }
  static atualizarProduto = (req,res) => {
    const id = req.params.id
    produtos.findByIdAndUpdate(id, {$set: req.body}, (err) => {
      if(!err) {
        res.status(200).send({message:'Produto atualizado com sucesso!'})
      } else {
        res.status(500).send({message: err.message})
      }
    })
  }
  static excluirProduto = (req,res) => {
    const id = req.params.id

    produtos.findOneAndDelete(id, (err) => {
      if(!err) {
        res.status(200).send({message: 'Produto excluído com sucesso'})
      } else {
        res.status(500).send(err.message)
      }
    })
  }
}

export default ProductsController