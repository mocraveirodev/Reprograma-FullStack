const todosAlunos = document.querySelectorAll(".aluno");

for (alunos in todosAlunos) {
  const aluno = todosAlunos[alunos];
  const notaUm = aluno.querySelector(".info-notaum").textContent;
  const notaDois = aluno.querySelector(".info-notadois").textContent;
  const campoMediaNotas = aluno.querySelector(".info-media");
  const mediaNotas = (parseFloat(notaUm)+parseFloat(notaDois)) / 2;
  campoMediaNotas.textContent = mediaNotas.toFixed(2);

  if (mediaNotas < 5){
    aluno.classList.add('abaixo-da-media');
  }

}
