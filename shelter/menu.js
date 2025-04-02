const menu = document.querySelector('.navbar__body');
const menuBrg = document.querySelector('.menu__button');

const body = document.body;

if (menu && menuBrg) {
    menuBrg.addEventListener('click',() => {
        menu.classList.toggle('active')
        menuBrg.classList.toggle('active')
        body.classList.toggle('lock')
    })
}


const popButton = document.querySelector('.button__slider__pet');

const popUp = document.querySelector('.pop__up__conteiner');

popButton.addEventListener('click', () => {
    popUp.classList.toggle('hidden')
})