//buscando aluno pelo ID
const aluno = document.querySelector('#primeiro-da-lista');

//buscando o valor da primeira nota
const tdPrimeiraNota = aluno.querySelector('.info-notaum');
const primeiraNota = tdPrimeiraNota.textContent;

//buscando o valor da segunda nota
const tdSegundaNota = aluno.querySelector('.info-notadois');
const segundaNota = tdSegundaNota.textContent;

//buscando campo media
const mediaFinal = aluno.querySelector('.info-media');
const mediaCalculada = (parseFloat(primeiraNota)+parseFloat(segundaNota))/2;
mediaFinal.textContent = mediaCalculada;