'use strict';

const body = document.querySelector('.body');
const pointer = document.getElementById('mouse-circle');
const navContainer = body.querySelector('.main__nav');
const navList = body.querySelector('.main__nav__list');
const navItem = body.querySelectorAll('.nav__list__item');
const navItemLink = body.querySelectorAll('.nav__list__item--link');
const mainNavContainer = body.querySelector('.main__nav__container');
const menuSection = body.querySelectorAll('.main__section');
const links = body.querySelectorAll('a');
const navTrigger = body.querySelector ('.nav__trigger');
const nav = body.querySelector('.header__nav');


window.addEventListener('mousemove', mouseFollow);

function mouseFollow(){
	pointer.style.left = event.clientX - 20 + "px";
	pointer.style.top = event.clientY - 20 + "px";
}


if(!body.classList.contains('body--home')){
    navTrigger.addEventListener('click', () => {
        nav.classList.toggle('open');
        navTrigger.classList.toggle('open');
    })
}

links.forEach((v, i) => {
    links[i].addEventListener('mouseover', ()=>{
        pointer.classList.add('pointerHover');
    })
    links[i].addEventListener('mouseout', ()=>{
        pointer.classList.remove('pointerHover');
    })
})

if(body.classList.contains('body--home')){
    navItem.forEach((v, i) => {
        navItem[i].addEventListener('mouseover', (e)=> {
            navItem.forEach((v, i) => {
                navItem[i].classList.remove('active');
            })
            navItem[i].classList.add('active');
            if(window.innerWidth > 750){
                if( i === 0) {
                    navList.style.transform = 'translateX(52vw)';
                    navList.style.transition = 'all 1s ease-in-out';
                } else if ( i === 1) {
                    navList.style.transform = 'translateX(0)';
                    navList.style.transition = 'all 1s ease-in-out';
                } else if ( i === 2) {
                    navList.style.transform = 'translateX(-52vw)';
                    navList.style.transition = 'all 1s ease-in-out';
                }
            }
        })
    })
    navContainer.addEventListener('mouseout', ()=> {
        navList.style.transform = 'translateX(0)';
        navList.style.transition = 'all 1s ease-in-out';
    })
}



navItemLink.forEach((v, i)=> {
    navItemLink[i].addEventListener('click', ()=>{
        navItemLink.forEach((v,i)=>{
            navItemLink[i].classList.remove('active');
            mainNavContainer.classList.toggle('active');
            
        })
        navItemLink[i].classList.add('active');
    })
})


