const botaoMenu = document.querySelector('.cabecalho_menu')
const menu = document.querySelector('.menu-lateral')

botaoMenu.addEventListener('click', () => {
    menu.classList.toggle('menu-lateral--ativo')
})

const botaoNotificacao = document.querySelector('.cabecalho_notificacao')
const notificacao = document.querySelector('.notificacao-lateral')

botaoNotificacao.addEventListener('click', () => {
    notificacao.classList.toggle('notificacao-lateral--ativo')
})