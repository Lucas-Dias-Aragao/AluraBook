/* 
-requisição a API da via CEP com o método Fetch
-convertendo a resposta para JSON
-Tratando erro com Catch
 */
/* Exemplo 1:

var consultaCEP = fetch('https://viacep.com.br/ws/08771130/json')
.then(resposta => resposta.json())
.then(r => {
  if(r.erro) {
    throw Error('CEP inválido');
  }

  console.log(r)

})
.catch(erro => console.log(erro))
.finally(mensagem => console.log('Processamento concluído!')); */


// Código assíncrono

async function buscaEndereco(cep) {
  var mensagemErro = document.getElementById('erro');
  mensagemErro.innerHTML = "";
  try {
    var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json`)
    var consultaCEPConvertida = await consultaCEP.json();

    if(consultaCEPConvertida.erro) {
      throw Error('CEP não existente');
    }

    //preenchendo os campos automaticamente
    var cidade = document.getElementById('cidade');
    var logradouro = document.getElementById('endereco');
    var estado = document.getElementById('estado');
    var bairro = document.getElementById('bairro');

    cidade.value = consultaCEPConvertida.localidade;
    logradouro.value = consultaCEPConvertida.logradouro;
    estado.value = consultaCEPConvertida.uf;
    bairro.value = consultaCEPConvertida.bairro;

    console.log(consultaCEPConvertida);
    return consultaCEPConvertida;

  } catch (erro) {
    mensagemErro.innerHTML = `<p>CEP inválido. Tente novamente!</p>`;
    console.log(erro);
  }
  
}

var cep = document.getElementById('cep');
cep.addEventListener("focusout", () => buscaEndereco(cep.value));

function preencheCampos() {

}
