const botaoTransacao = document.querySelector(".transacao__button");
botaoTransacao.addEventListener('click', function(event){
  event.preventDefault();
  const tabela = document.querySelector(".extrato__table");
  const linha = document.createElement("tr");
  const inputNome = document.querySelector("#transacaoInputName");
  const inputDinheiro = document.querySelector("#transacaoInputMoney");
  const inputData = document.querySelector("#transacaoInputDate");
  const colunaNome = document.createElement("td");
  const colunaNomeValor = document.createTextNode(inputNome.value);
  colunaNome.appendChild(colunaNomeValor);

  const colunaDinheiro = document.createElement("td");
  const colunaDinheiroValor = document.createTextNode(inputDinheiro.value);
  colunaDinheiro.appendChild(colunaDinheiroValor);

  const colunaData = document.createElement("td");
  const colunaDataValor = document.createTextNode(inputData.value);
  colunaData.appendChild(colunaDataValor);

  linha.appendChild(colunaNome);
  linha.appendChild(colunaDinheiro);
  linha.appendChild(colunaData);

  tabela.appendChild(linha);


})
