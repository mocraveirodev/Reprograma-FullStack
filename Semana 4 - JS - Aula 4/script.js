const btnBusca = document.getElementById("btn-busca");
btnBusca.addEventListener("click", trazResultadoDaBusca);
let listaGifs = [];

function buscaGif(){
  return document.getElementById("campo-busca").value;
}

function erro(){
  console.log("erro");
}

function trazResultadoDaBusca(event){
  event.preventDefault();
  const respBusca = new XMLHttpRequest(); //metodo XHR
  respBusca.open('GET', `http://api.giphy.com/v1/gifs/search?q=${buscaGif()}&api_key=KLNs88JP9c3THwaBxF28nh166NI0jXcW`);
  respBusca.onload = carregaPostsComGifs;
  respBusca.onerror = erro;
  respBusca.send();
}

function carregaPostsComGifs(){
  listaGifs = JSON.parse(this.responseText)["data"];
  exibePosts();

}

function exibePosts(){
  let exibeBusca = document.getElementById("exibe-busca");
    exibeBusca.innerHTML = 
      `<div class="area-gif"> ${listaGifs.map(gif => `
        <div class="gif">
          <img src="${gif.images.fixed_height.url}"></img>
        </div>
        `).join("")}
      </div>`;
}
  


