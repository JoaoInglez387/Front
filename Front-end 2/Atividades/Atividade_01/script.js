const itensMenu = [
    { nome: 'Início', url: 'index.html' },
    { nome: 'Sobre', url: 'sobre.html' },
    { nome: 'Contato', url: 'contato.html' },
]

const body = document.querySelector('body');
const header = document.createElement('header');
const nav = document.createElement('nav');
const ul = document.createElement('ul');


itensMenu.forEach(item => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.textContent = item.nome;
    a.href = item.url;

    li.appendChild(a);
    ul.appendChild(li);

    a.style.color = 'white';
})

body.prepend(header);
header.prepend(nav);
nav.prepend(ul);


body.style.backgroundColor = 'blue';
header.style.backgroundColor = 'black';
body.style.margin = '0px'
nav.style.padding= '50px'
