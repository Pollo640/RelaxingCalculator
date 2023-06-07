let display = document.getElementById('display');
//A variavel display e declarada e recebe o elemento html com o id correspondente, criando assim uma caixa de texto aonde a equaçao sera exibida.//


let equation = '';
//Uma string vazia para armazenar a equaçao//

function appendNumber(number) {

  equation += number;

  display.value = equation;

}
//A funçao appendNumber recebe o parametro number., ele concatena o numero rebido a variavel equantion e atualiza o valor do elemento display, pra mostrar a nova equaçao//

function appendOperator(operator) {

  equation += operator;

  display.value = equation;

}
//appendOperator recebe o parametro operator, ela concatena o o perador recebido na variavel equation e atualiza o valor no display

function clearDisplay() {

  equation = '';

  display.value = equation;

}
// a funçao clearDisplay limpa o display//

function calculateResult() {

  try {

    let result = eval(equation);

    equation = result.toString();

    display.value = equation;

  } catch (error) {

    display.value = 'Error';

  }

}
//a funçao calculateResult tenta avaliar a equaçao usando a funçao eval, ela armazena o resultado e converte esse resultado em uma string, assim mostrando o resultado no display, e em caso de erro vai exibir error//