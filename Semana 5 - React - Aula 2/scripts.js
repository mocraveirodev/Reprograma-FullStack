const linkCriarUmaConta = document.createElement('a');
linkCriarUmaConta.className = 'link';
linkCriarUmaConta.href = '/conta';
linkCriarUmaConta.appendChild(document.createTextNode('Criar uma conta'));

const linkFazerLogin = document.createElement('a');
linkFazerLogin.className = 'link';
linkFazerLogin.href = '/login';
linkFazerLogin.appendChild(document.createTextNode('Fazer login'));

const formLogin = document.createElement('form');
formLogin.appendChild(linkCriarUmaConta);
formLogin.appendChild(linkFazerLogin);

const divProjeto = document.getElementById('projeto');
divProjeto.appendChild(formLogin);