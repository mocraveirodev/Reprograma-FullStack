window.addEventListener('load', function () {
    imprimeTabelaDoHTML(document.querySelectorAll(".aluno"));
});


function imprimeTabelaDoHTML(todosOsAlunos) {

    todosOsAlunos.forEach(function (aluno) {

        let mediaCalculada = calculaMedia(aluno.querySelector(".info-notaum").textContent, aluno.querySelector(".info-notadois").textContent);

        if (mediaCalculada < 5) {
            // aluno.style.backgroundColor = "red";
            aluno.classList.add("abaixo-da-media");
        }

        aluno.querySelector(".info-media").textContent = mediaCalculada;
    })

}

function calculaMedia(notaUmRecebida, notaDoisRecebida) {
    return ((parseFloat(notaUmRecebida) + parseFloat(notaDoisRecebida)) / 2).toFixed(2);
}

