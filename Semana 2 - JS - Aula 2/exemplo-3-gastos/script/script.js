const button = document.querySelector('.transacao__button');

button.addEventListener('click',function(ev){

    ev.preventDefault();

    const tabela = document.querySelector('.extrato__table');
    const inputName = document.getElementById('transacaoInputName');
    const inputMoney= document.getElementById('transacaoInputMoney');
    const inputDate = document.getElementById('transacaoInputDate');

    const linha = document.createElement('tr');

    const colunaNome = document.createElement('td');
    const ColunaNomeTexto = document.createTextNode(inputName.value);
    colunaNome.appendChild(ColunaNomeTexto);
    
    const colunaValor = document.createElement('td');
    const ColunaValorTexto = document.createTextNode(inputMoney.value);
    colunaValor.appendChild(ColunaValorTexto);
    
    
    const colunaData = document.createElement('td');
    const ColunaDataTexto = document.createTextNode(inputDate.value);
    colunaData.appendChild(ColunaDataTexto);

    linha.appendChild(colunaNome);
    linha.appendChild(colunaValor);
    linha.appendChild(colunaData);

    tabela.appendChild(linha);   
    
});