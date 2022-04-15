//Side Navigation Js Code
let menuBtn = document.querySelector('.menu-btn');
let cancelBtn = document.querySelector('.cancel-btn');
let navBar = document.querySelector('.navbar');

menuBtn.onClick = function(){
    menuBtn.style.opacity= '0';
    menuBtn.style.pointerEvents= 'none';
    navBar.classList.add('active');

}
cancelBtn.onClick = function(){
    menuBtn.style.opacity= '1';
    menuBtn.style.pointerEvents= 'auto';
    navBar.classList.remove('active');
}
//Sticky Navigation Menu Js Code
let nav = document.querySelector('nav');
let val;
window.onscroll = function(){
    if(document.documentElement.scrollTop > 20){
        nav.classList.add('sticky');
    } else{
        nav.classList.remove('sticky');
    }
}
