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

describe('GET em /categorias', () => {
  it('Deve retornar uma lista de categorias', async () => {
    await request(app)
      .get('/categorias')
      .set('accept', 'application/json')
      .expect('content-type', /json/)
      .expect(200);
  })
})

let idCategoria;

describe('POST em /categorias', () => {
  it('Deve adicionar uma nova categoria', async () => {
    const resposta = await request(app)
      .post('/categorias')
      .send({
        nome: "TESTE",
        status: 'DESATIVADO'
      })
      .expect(201);
      
      idCategoria = resposta.body.content.id;
  });
})
describe('GET em /categorias/id', () => {
  it('Deve listar uma categoria especifica', async () => {
    await request(app)
    .get(`/categorias/${idCategoria}`)
    .expect(200);
  })
})

describe('PUT em /categorias/id', () => {
  it.each([
    ['nome', { nome: 'teste' }],
    ['status', { status: 'desativado' }],
  ])('Deve alterar o campo %s', async (chave, param) => {
    const requisicao = { request };
    const spy = jest.spyOn(requisicao, 'request');
    await requisicao.request(app)
      .put(`/categorias/${idCategoria}`)
      .send(param)
      .expect(200);

    expect(spy).toHaveBeenCalled();
  });
});

describe('PATCH em /categorias/id', () => {
  it('Deve ativar campo status', async () => {
    await request(app)
      .patch(`/produtos/${idCategoria}`)
      .send({status: 'ATIVO'})
      .expect(200)
  })
})

describe('DELETE em /categorias/id', () => {
  it('Deve deletar uma categoria', async () => {
    await request(app)
    .delete(`/categorias/${idCategoria}`)
    .expect(200);
  })
})