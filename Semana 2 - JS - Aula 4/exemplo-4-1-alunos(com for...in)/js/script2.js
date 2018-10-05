const todosAlunos = document.querySelectorAll(".aluno");

for (alunos in todosAlunos) {
  const aluno = todosAlunos[alunos];
  // const notaUm = aluno.querySelector(".info-notaum").textContent;
  const notaUm = aluno.querySelector(".info-notaum").textContent;
  const notaDois = aluno.querySelector(".info-notadois").textContent;
  const campoMediaNotas = aluno.querySelector(".info-media");
  const mediaNotas = calculaMedia(notaUm,notaDois);

  if (mediaNotas < 5){
    aluno.classList.add('abaixo-da-media');
  }

  campoMediaNotas.textContent = mediaNotas;

}

function calculaMedia(primeiroValorRecebido, segundoValorRecebido){
  let mediaCalculadaDentroDaFuncao = 0;
  mediaCalculadaDentroDaFuncao = (parseFloat(primeiroValorRecebido)+parseFloat(segundoValorRecebido)) / 2;
  return mediaCalculadaDentroDaFuncao.toFixed(2);
}
