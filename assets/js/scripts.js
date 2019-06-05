$(document).ready(function(){

    $('.main-slider').slick({
        arrows: true,
        autoplay: true,
        prevArrow: "<a href='#' class='prevSlider'><ion-icon name='arrow-dropleft-circle'></ion-icon></a>",
        nextArrow: "<a href='#' class='nextSlider'><ion-icon name='arrow-dropright-circle'></ion-icon></a>"
    });

    

  });

const btnMenuMobile = document.querySelector('.main_header--btn_mobile');
const menuMobile = document.querySelector('.main_header__menu');
  
btnMenuMobile.addEventListener('click', function(){
  menuMobile.classList.toggle('active');
})

var feed = new Instafeed({

  get: 'user',

  userId: '6291545154',

  accessToken: '6291545154.1677ed0.58e7d24393e2420c821a083c6de51277',

  limit: '1',

  sortBy: 'most-recent',

  resolution: 'low_resolution',

});

feed.run();