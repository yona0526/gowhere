
 $(document).ready(function(){
      $('.notice_slide_mob ul').bxSlider({
        pager:false
      });
      
});


$(function(){
const swiperFull = new Swiper('.swiperFull', {
  // Optional parameters
  direction: 'horizontal',
  slidesPerView:1,
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: false,

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  loopFillGroupWithBlank: false,
   slidesOffsetAfter: 0, 
});



  const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  breakpoints : {
    320 : {
       slidesPerView: 1.09, 
       spaceBetween: 15,
    },
    640: { //640 이상일 경우
          slidesPerView: 2, //레이아웃 2열
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 25,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        loopFillGroupWithBlank: false,
         slidesOffsetAfter: 0, 
    },
  
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  loopFillGroupWithBlank: false,
   slidesOffsetAfter: 0, 
});


});



