const navList = document.querySelector("#Nav ul");
const navBtn = document.querySelector(".btn-nav");



navBtn.addEventListener('click', function (e) {
    if (navList.classList.contains('nav-phone_inactive')) {
        document.querySelector('#Nav button i').classList.remove('fa-bars');
        document.querySelector('#Nav button i').classList.add('fa-times');
        navList.classList.toggle('nav-phone_inactive');
        navList.classList.toggle('nav-phone_active');
    } else {
        document.querySelector('#Nav button i').classList.add('fa-bars');
        document.querySelector('#Nav button i').classList.remove('fa-times');
        navList.classList.toggle('nav-phone_active');
        navList.classList.toggle('nav-phone_inactive');
    }
});


// var swiper = new Swiper('.swiper-container', {
//     spaceBetween: 30,
//     centeredSlides: true,
//     autoplay: {
//         delay: 2500,
//         disableOnInteraction: false,
//     },
//     pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//     },
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },
// });