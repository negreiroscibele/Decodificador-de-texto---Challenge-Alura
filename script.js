//  Para selecionar a tag html que quero trabalhar:
var textArea = document.querySelector(".conteudo-principal-input"); 

var display = document.querySelector(".textarea-display");

// As "chaves" de criptografia que utilizaremos são:
// A letra "a" é convertida para "ai"
// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"

function criptografar(stringCriptografada) {
  // 1 - Para estabelecer um código para criptografar as palavras, declara-se uma array com os dados:
  let arrayCodigo = [["a", "ai"], ["e", "enter"], ["i", "imes"], ["o", "ober"], ["u", "ufat"]];

  // 2 - Para aceitar apenas caracteres minúsculos, declara-se o caminho toLowerCase()
  stringCriptografada = stringCriptografada.toLowerCase(); 

  // 3 - Para que todos os dados da array sejam percorridos, declara-se um laço:

  for(let i = 0; i < arrayCodigo.length; i++) {
    // 4 - Para verificar se o input apresenta palavras com vogais para serem substituidas pelo código pré-estabelecido, é necessário criar uma condição:  
    if(stringCriptografada.includes(arrayCodigo[i][0])) {
      stringCriptografada = stringCriptografada.replaceAll(arrayCodigo[i][0], arrayCodigo[i] [1]);
    }
  }

  // 5 - Para retornar o texto criptografado:

    return stringCriptografada;

}

// 6 - Para ativar a função de criptografar:

function btnCriptografar() {
  var textoCriptografado = criptografar(textArea.value);
  display.value = textoCriptografado;
  textArea.value = "";
}