import express from 'express'
import categorias from './categoryRouter.js'
import produtos from './productsRouter.js'

const routes = (app) => {
  app.route('/').get((req,res) => {
    res.status(200).send({titulo:'Tela inicial 🚀'})
  })
  app.use(
    express.json(),
    categorias,
    produtos
  )
}

export default routes