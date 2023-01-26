//filtrando livros por categoria

const botoes = document.querySelectorAll('.btn');
botoes.forEach(btn => btn.addEventListener('click', filtrarLivros));

function filtrarLivros() {
  const elementoBtn = document.getElementById(this.id);
  const categoria = elementoBtn.value;

  let livrosFiltrados = categoria == 'disponivel' ? fitrarPorDisponibilidade() : filtrarPorCategoria(categoria);

  exibirOsLivrosNaTela(livrosFiltrados);

  if(categoria == 'disponivel') {
    const valorTotal = calcularValorTotalDeLivrosDisponiveis(livrosFiltrados)
    exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal)
  }
}

function fitrarPorDisponibilidade() {
  return livros.filter(livro => livro.quantidade > 0);
}

function filtrarPorCategoria(categoria) {
  return livros.filter(livro => livro.categoria == categoria);
}

function exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal) {
  elementoComValorTotalDeLivrosDisponiveis.innerHTML = `
  <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
    </div>
  `
}