const adicionarAluno = document.querySelector("#adicionar-aluno");

adicionarAluno.addEventListener('click', function (event) {
    event.preventDefault();


    function obtemAluno() {
        return obterDadosDoFormulario(document.querySelector("#form-adiciona"));
    }

    // antes de criar a linha, verifico se o valor está correto
    function notasSaoValidas(aluno) {
        if (!(aluno.notaUmAluno >= 0 && aluno.notaUmAluno <= 10)) {
            // const erro = document.querySelector("#mensagem-erro");
            document.querySelector("#mensagem-erro").innerHTML = "A Nota 1 está incorreta.";
            mensagemErro();
            // return false;
        }
        if (!(aluno.notaDoisAluno >= 0 && aluno.notaDoisAluno <= 10)) {
            // const erro = document.querySelector("#mensagem-erro");
            document.querySelector("#mensagem-erro").innerHTML = "A Nota 2 está incorreta.";
            mensagemErro();
            // return false;
        }
    }

    function mensagemErro() {
        setTimeout(function(){
            document.querySelector("#mensagem-erro").innerHTML = '';
        }, 3000);
    }

    // criando a linha
    let alunoTr = document.createElement("tr");

    let nomeAlunoTd = document.createElement("td");
    let notaUmAlunoTd = document.createElement("td");
    let notaDoisAlunoTd = document.createElement("td");
    let mediaAlunoTd = document.createElement("td");

    nomeAlunoTd.textContent = aluno.nomeAluno;
    notaUmAlunoTd.textContent = aluno.notaUmAluno;
    notaDoisAlunoTd.textContent = aluno.notaDoisAluno;
    // mediaAlunoTd.textContent = calculaMedia(notaUmAluno, notaDoisAluno);
    mediaAlunoTd.textContent = aluno.media;

    alunoTr.appendChild(nomeAlunoTd);
    alunoTr.appendChild(notaUmAlunoTd);
    alunoTr.appendChild(notaDoisAlunoTd);
    alunoTr.appendChild(mediaAlunoTd);

    const tabela = document.querySelector("#tabela-alunos");
    tabela.appendChild(alunoTr);

});

function obterDadosDoFormulario(formulario) {
    const objetoAluno = {
        nomeAluno: formulario.nome.value
        , notaUmAluno: formulario.notaum.value
        , notaDoisAluno: formulario.notadois.value
        , media: calculaMedia(formulario.notaum.value, formulario.notadois.value)
    }
    return objetoAluno;
}

function validaNota(aluno) {
    if (aluno.notaum > 0 && aluno.notaum <= 10) {
        return true;
    }
}