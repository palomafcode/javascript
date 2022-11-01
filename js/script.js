//colocando em negrito
const nomeUsuario = document.querySelector('header .avatar-content div');
nomeUsuario.innerHTML = '<strong>Nome Usuário</strong>';
//alterando nome
const primeiroNomeInput = document.getElementsByName('name')[0]
primeiroNomeInput.placeholder = 'Digite o Primeiro Nome';
//alterando bordas input

const propriedadeStyle = document.querySelectorAll(' .form-auth input').forEach(input => input.style.borderRadius = '5px')
//posicionamento input
const formAuth = document.querySelector('.form-auth');
formAuth.style.display = 'flex'
formAuth.style.flexDirection = 'column'
document.body.style.backgroundColor = '#fafafa'