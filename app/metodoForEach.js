const elementoParaInserirLivros = document.getElementById('livros');

//inserindo os livros na tela conforme resultado da requisição, com forEach
function exibirOsLivrosNaTela(listaDeLivros) {
  //inicia a página sempre com conteúdo vazio
  elementoParaInserirLivros.innerHTML = '';

  listaDeLivros.forEach(livro => {
  //let disponibilidade = verificarDisponibilidadeDoLivro(livro);
  //a linha acima foi substituida pela abaixo, usando operador ternário
  let disponibilidade = livro.quantidade > 0 ? 'livro__imagens' : 'livro__imagens indisponivel';

   elementoParaInserirLivros.innerHTML += `
   <div class="livro">
   <img class="${disponibilidade}" src="${livro.imagem}" alt="${livro.alt}" />
   <h2 class="livro__titulo">
     ${livro.titulo}
   </h2>
   <p class="livro__descricao">${livro.autor}</p>
   <p class="livro__preco" id="preco">R$ ${livro.preco.toFixed(2)}</p>
   <div class="tags">
     <span class="tag">${livro.categoria}</span>
   </div>
 </div>
   `
  });
 }

/*

código de exemplo abaixo que foi substituido pelo operador ternário na linha 10.

 //verifica se a quantidade de livro em estoque é maior que 0
 function verificarDisponibilidadeDoLivro(livro) {
  if(livro.quantidade > 0) {
    return 'livro__imagens'
  } else {
    return 'livro__imagens indisponivel'
  }
 }
 //se a quantidade for menor ou igual a zero, adiciona a classe indisponível, deixando o livro com cor diferente na página

 */