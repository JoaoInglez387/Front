const boby = document.querySelector('boby');
const p = document.createElement('p');
p.textContent = 'Meu teste';
p.style.color = 'white';
boby.style.backgroundColor = '#0000';
boby.prepend(p);