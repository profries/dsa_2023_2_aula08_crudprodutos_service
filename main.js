const produtoRepository = require('./repository/produto_repository')
const produtoService = require('./service/produto_service');


function main() {
    console.log(produtoService.listar());
    
    const produto1 = new Object();
    produto1.nome = "arroz";
    produto1.categoria = "alimento";
    produto1.preco = 5;
    try{
        produtoService.inserir(produto1);
    } catch(err) {
        console.log(err.message)
    }

    const produto2 = {
        nome: "refrigerante",
        categoria: "bebida",
        preco: 8
    };
    produtoRepository.inserir(produto2);

    const produto3 = {
        nome: "feijao",
        categoria: "alimento",
        preco: 9
    };
    produtoRepository.inserir(produto3);
   
    console.log("Listar: ", produtoRepository.listar());

    console.log("Pesquisar pela categoria 'alimento", 
        produtoRepository.pesquisarPorCategoria('alimento'));

    console.log("Pesquisar pelo nome like 'E", 
        produtoRepository.pesquisarPorLikeNome('E'));
        
    try{
        const produtoBuscarId6 = produtoService.buscarPorId(6);
        console.log("BuscarPorId6: ", produtoBuscarId6);
    } catch (err) {
        console.log(err.message);
    }
    
    const produtoBuscarId1 = produtoRepository.buscarPorId(1);
    console.log("BuscarPorId1: ", produtoBuscarId1);

    produtoRepository.atualizar(2, { 
        nome: "suco", 
        categoria: "bebida", 
        preco: 9.9
    });

    produtoRepository.deletar(3);

    console.log("Listar: ", produtoRepository.listar());

}

main();