use("ecomm")

const cliente = db.accounts.findOne({
   nome: "Juliana Eloá Brito"
})

const result = db.orders.aggregate([
   {
      $match: {
          "account.accountId": cliente._id
      }
  },
    {
       $unwind: '$itens'
    },
    {
       $group: {
          _id: "$_id",
          somaQuantidades: { $sum: '$itens.quantidade' },
          montanteTotalPedidos: {
             $sum: {
                $multiply: ['$itens.precoUnitario' ,'$itens.quantidade']
             }
          },
          montanteTotalDesconto: { $sum: '$itens.desconto' }
       }
    },
    {
      $addFields: {
          cliente: cliente.nome
      }
  }
 ]);


console.log(result)