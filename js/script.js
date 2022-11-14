/********************* MENU ********************/

let menu = document.querySelector(".menu");
let burger = document.querySelector("#menu-btn");
let cross = document.querySelector("#menu-close");
let header = document.querySelector(".header");

burger.onclick = () => {
  menu.classList.add("active");
};

cross.onclick = () => {
  menu.classList.remove("active");
};

/*************** SEARCH FORM **********************/

let searchForm = document.querySelector(".search-form");
let searchIcon = document.querySelector("#search-btn");
let closeIcon = document.querySelector("#close-search");

searchIcon.onclick = () => {
  searchForm.classList.add("active");
};

closeIcon.onclick = () => {
  searchForm.classList.remove("active");
};

window.onscroll = () => {
  menu.classList.remove("active");

  if (window.scrollY > 0) {
    header.classList.add("active");
  } else header.classList.remove("active");
};

window.onload = () => {
  if (window.scrollY > 0) {
    header.classList.add("active");
  } else header.classList.remove("active");
};

var swiper = new Swiper(".home-slider", {
  loop: true,
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  keyboard: {
    enabled: true,
  },
});

var swiper = new Swiper(".restaurant-slider", {
  loop: true,
  grabCursor: true,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  keyboard: {
    enabled: true,
  },

  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});

var swiper = new Swiper(".review-slider", {
  loop: true,
  grabCursor: true,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
  },
});
