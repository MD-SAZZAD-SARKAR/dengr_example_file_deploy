// show and hide serch box
let searchForm = document.querySelector('.search-from');
let searchbtn = document.querySelector('#search-btn');


searchbtn.onclick = () => {
    allremove()
    searchForm.classList.toggle('active');
}


// show and hide cart items
let cart = document.querySelector('.shopping-cart');
let cartbtn = document.querySelector('#cart-btn');


cartbtn.onclick = () => {
    allremove()
    cart.classList.toggle('active');
}


// show and hide login form items
let login = document.querySelector('.login-form');
let loginbtn = document.querySelector('#login-btn');


loginbtn.onclick = () => {
    allremove()
    login.classList.toggle('active');
}

// show and hide navbar form items
let navbar = document.querySelector('.navbar');
let menubtn = document.querySelector('#menu-btn');


menubtn.onclick = () => {
    allremove()
    navbar.classList.toggle('active');
}


window.onscroll = () => {
    allremove();
}
function allremove() {
    searchForm.classList.remove('active');
    cart.classList.remove('active');
    login.classList.remove('active');
    navbar.classList.remove('active');
}



// slide next and prev
let slide_container = document.querySelector('.home');
let slide = document.querySelectorAll('.home .slides-container .slide');
let index = 0;
let intervalId;
function next() {
    slide[index].classList.remove('active');
    index = (index + 1) % slide.length;
    // console.log(index)
    slide[index].classList.add('active');
}
function prev() {
    slide[index].classList.remove('active');
    index = (index - 1 + slide.length) % slide.length;
    // console.log(index)
    slide[index].classList.add('active');
}

function autoSlide() {
    intervalId = setInterval(() => next(), 3000)
}

autoSlide()
slide_container.addEventListener('mouseenter', () => clearInterval(intervalId));
slide_container.addEventListener('mouseleave', () => autoSlide())
