
$(function(){
const tview_out_swiper = new Swiper('.tview_out_swiper', {
  // Optional parameters
  direction: 'horizontal',
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

  breakpoints: { //반응형 조건 속성
      640: { //360 이상일 경우
        slidesPerView: 1, //레이아웃 2열
      },
      1024: {
        slidesPerView: 2,
      },
    }
});



  const room_swiper = new Swiper('.room_swiper', {
  // Optional parameters
  direction: 'horizontal',
  slidesPerView: 1,
  
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
});


  const facil_swiper = new Swiper('.facil_swiper', {
  // Optional parameters
  direction: 'horizontal',
  slidesPerView: 1.03,
  spaceBetween: 15,
  loop: true,
  breakpoints: {
    640: { //360 이상일 경우
        slidesPerView: 1.5, //레이아웃 2열
      },
      1024: {
        slidesPerView: 4,
      },
  },
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
});


});



