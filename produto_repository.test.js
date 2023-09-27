/*test('1+1 igual a 2', () => {
    expect(1+1).toBe(2)
});*/

const listaEsperadaInserir = [
    {id: 1, nome:"Produto1", preco:30, categoria:"Cat1"},
    {id: 2, nome:"Produto2", preco:40, categoria:"Cat1"},
    {id: 3, nome:"Produto3", preco:50, categoria:"Cat2"},
];


//Testar a lista de produtos vazia
test('o método listar deve retornar lista vazia', () => {
    const repository = require('./repository/produto_repository');
    expect(repository.listar()).toEqual([]);
    expect(repository.listar()).toHaveLength(0);
});

//Testar um inserir
/*test("Quando inserir um produto, deve retornar este produto", () => {
    const listaEsperada = [{nome:"Produto1", preco:30, categoria:"Cat1", id: 1}]
    const repository = require('./repository/produto_repository');
    repository.inserir({nome:"Produto1", preco:30, categoria:"Cat1"});
    expect(repository.listar()).toEqual(listaEsperada);
})*/

//Testar três inserir e verificar a lista de produtos
test("Quando inserir três produtos, deve retornar estes produtos", () => {
    const repository1 = require('./repository/produto_repository');
    
    repository1.inserir({nome:"Produto1", preco:30, categoria:"Cat1"});
    repository1.inserir({nome:"Produto2", preco:40, categoria:"Cat1"});
    repository1.inserir({nome:"Produto3", preco:50, categoria:"Cat2"});
    
    expect(repository1.listar()).toHaveLength(3);
    expect(repository1.listar()).toEqual(listaEsperadaInserir);
})

//Testar o buscarPorId com três produtos, sendo que tem o id que vou buscar

//Testar o buscarPorId com três produtos, sendo que não tem o id que vou buscar
