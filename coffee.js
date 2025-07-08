const button=document.querySelector(".open")

button.addEventListener("click", ()=>{
    document.body.classList.toggle("show-menu");
});

const buttonc=document.querySelector(".close")

buttonc.addEventListener("click",()=>button.click());

// Initialize Swipper

const swiper = new Swiper('.slider-wrapper', {
    loop:true,
    spaceBetween:25,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable:true,
    dynamicBullets:true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints:{
    0:{
        slidesPerView:1
    },

    900:{
        slidesPerView:2
    },

    1024:{
        slidesPerView:3
    }
  }

});