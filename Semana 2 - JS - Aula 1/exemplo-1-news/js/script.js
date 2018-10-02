const input = document.querySelector('#newsInputEmail');
const botao = document.querySelector('.news__button');

botao.addEventListener('click',function(ev){
    ev.preventDefault();
    const resp = document.createElement('span');
    let email = input.value;
    let usuario = email.substring(0,email.search('@'));
    let dominio = email.substring(email.search('@')+1,email.lenght);

    if (email.lenght == 0 ){
        const msg = document.createTextNode('O campo não pode ser vazio.');
        resp.appendChild(msg);
        let pai = document.querySelector('.news__form');
        pai.insertBefore(resp,input.parentNode);
    }else if ((usuario.length >=1) &&
    (dominio.length >=3) && 
    (usuario.search("@")==-1) && 
    (dominio.search("@")==-1) &&
    (usuario.search(" ")==-1) && 
    (dominio.search(" ")==-1) &&
    (dominio.search(".")!=-1) &&      
    (dominio.indexOf(".") >=1)&& 
    (dominio.lastIndexOf(".") < dominio.length - 1)){
        const msg = document.createTextNode('Email cadastrado com sucesso.');
        resp.appendChild(msg);
        let pai = document.querySelector('.news__form');
        pai.insertBefore(resp,input.parentNode);
    }else{
        const msg = document.createTextNode('Email inválido');
        resp.appendChild(msg);
        let pai = document.querySelector('.news__form');
        pai.insertBefore(resp,input.parentNode);
    }
    
});