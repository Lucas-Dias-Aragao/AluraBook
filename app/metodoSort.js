//ordenando livros por preço

const btnOrdenarPorPreco = document.getElementById('btnOrdenarPorPreco');
btnOrdenarPorPreco.addEventListener('click', ordenarLivrosPorPreco);

function ordenarLivrosPorPreco() {
  let livrosOrdenados = livros.sort((a,b) => a.preco - b.preco);
  exibirOsLivrosNaTela(livrosOrdenados)
}