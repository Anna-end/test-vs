
/* Попытка слайдера*/ 

const slider = document.querySelector('.conteiner__slider__img');
const sliderImg = document.querySelectorAll('.slider__item');
const sliderLine = document.querySelector('.slider__img');
const firstCard = document.querySelector('.slider__item-left');
const lastCard = document.querySelector('.slider__item-right');

const sliderBtnLeft = document.querySelector('.slider__button-left')
const sliderBtnRith = document.querySelector('.slider__button-right')


let sliderCount = 0;
let sliderWidth = slider.offsetWidth;

sliderBtnRith.addEventListener('click',nextSlide);
sliderBtnLeft.addEventListener('click',prevSlider)


function nextSlide() {
    sliderCount++;


    if (sliderCount >= sliderImg.length) {
        sliderCount = 0;
    }

    rollSlider()
}


function prevSlider() {
    sliderCount--;

    if (sliderCount < 0) {
        sliderCount = sliderImg.length -1;
    }

    rollSlider()
}

function rollSlider() {
    sliderLine.style.transform = `translateX(${-sliderCount * sliderWidth}px)`
}




/* Открытие и закрытие бургер-меню */

const menu = document.querySelector('.navbar__body');
const menuBrg = document.querySelector('.menu__button');
const navbarBack = document.querySelector('.navbar__back');
const body = document.body;

if (menu && menuBrg) {
    menuBrg.addEventListener('click',() => {
        menu.classList.toggle('active')
        
        menuBrg.classList.toggle('active')
        body.classList.toggle('lock')
    })
}




/*----------------------------------------- */ 

/* Открытие и закрытие поп-ап карточки */ 
 //*
 const popButton = document.querySelector('.button__slider__pet');

 const popUp = document.querySelector('.pop__up__conteiner');
 
 
 const closePopUp = document.querySelector('.button__pop-up');
 
 
 
 popButton.addEventListener('click', () => {
     popUp.classList.toggle('hidden')
 })
 
 closePopUp.addEventListener('click', () =>{
     popUp.classList.toggle('hidden')
 })
 
 
 
 
 
  if (popUp && closePopUp){
 document.onclick = function (e) {
    
     if (e.target.className != ".pop__up__conteiner") {
         popUp.classList.toggle('hidden')
     };
 };} 
 
/*-----------------------------------------*/

