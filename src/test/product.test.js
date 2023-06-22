import app from '../app.js';
import request from 'supertest';
import {
  describe, expect, it, jest,
} from '@jest/globals';

let server;
beforeEach(() => {
  const port = 3000;
  server = app.listen(port);
});

afterEach(() => {
  server.close();
})

describe('GET em /produtos', () => {
  it('Deve retornar uma lista de produtos', async () => {
    await request(app)
      .get('/produtos')
      .set('accept', 'application/json')
      .expect('content-type', /json/)
      .expect(200);
  })
})

let idProduto;

describe('POST em /produtos', () => {
  it('Deve adicionar um novo produto', async () => {
    const resposta = await request(app)
      .post('/produtos')
      .send({
        nome: "Central teste",
        slug: "central-multimidia-automotiva-teste",
        precoUnitario: 71,
        quantidadeEstoque: 3,
        idCategoria: "6492e23188dde42956aaf8fc"
      })
      .expect(201);
      
      idProduto = resposta.body.content.id;
  });
})
describe('GET em /produtos/id', () => {
  it('Deve listar um produto especifico', async () => {
    await request(app)
    .get(`/produtos/${idProduto}`)
    .expect(200);
  })
})

describe('PUT em /produtos/id', () => {
  it.each([
    ['nome', { nome: 'teste teste' }],
    ['slug', { slug: 'teste-teste' }],
    ['precoUnitario', { precoUnitario: 12 }],
    ['quantidadeEstoque', { quantidadeEstoque: 2 }],
    ['idCategoria', { idCategoria: '6492e23188dde42956aaf8fc' }],
  ])('Deve alterar o campo %s', async (chave, param) => {
    const requisicao = { request };
    const spy = jest.spyOn(requisicao, 'request');
    await requisicao.request(app)
      .put(`/produtos/${idProduto}`)
      .send(param)
      .expect(200);

    expect(spy).toHaveBeenCalled();
  });
});


describe('DELETE em /produtos/id', () => {
  it('Deve deletar um produto', async () => {
    await request(app)
    .delete(`/produtos/${idProduto}`)
    .expect(200);
  })
})