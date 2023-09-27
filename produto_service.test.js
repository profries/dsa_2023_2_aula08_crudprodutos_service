test('buscar por id deve retornar indefinido', () => {

    const service = require('./service/produto_service');
    service.inserir({nome:"Produto1", preco:30, categoria:"Cat1"});
    expect(() => service.buscarPorId(2)).toThrow();
    
});
