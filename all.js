/* Swiper */
const swiper = new Swiper('.swiper', {
  // Default parameter
  slidesPerView: 1,  // 顯示3個slide元素
  spaceBetween: 24,  // 間距24px
  breakpoints: {
    992:{
      slidesPerView: 3
    },
    768: {
      slidesPerView: 2
    },
    375: {
      slidesPerView: 1
    }
  },
  // 分頁   
  pagination: {
     el: '.swiper-pagination',
     clickable: true,
  },
  // 左右箭頭    
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // 滾動條
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },
});
/*
Swiper初始化必須放在最前面，否則當頁面中有swiper類元素尚未被swiper初始化，因此無法找到swiper元素
導致後續的`document.querySelector`返回null，導致整個JS無法順利執行
*/


var navbarToggler = document.querySelector(".navbar-toggler");
var navbarTogglerIcon = navbarToggler.querySelector(".navbar-toggler-icon");

navbarToggler.addEventListener("click", function() {
navbarTogglerIcon.classList.toggle("active");
var currentIcon = navbarTogglerIcon.innerHTML;
navbarTogglerIcon.innerHTML = (currentIcon === "menu") ? "close" : "menu";
});

// Pricing page
$(".accordion-item").click(function (e) {
  // 在自身元素增加 .show，並選到同層的元素(siblings())同時取消賦予的 .show 效果
  $(this).addClass("show").siblings().removeClass("show");
});

// Use data-*attribute to custimize class name and switch btn-filter name
$(".dropdown-item[data-sort='new-to-old']").click(function (e) {
  e.preventDefault();
  $(this).toggleClass("filter-active");
  $(".dropdown-item[data-sort='old-to-new']").removeClass("filter-active");
  $(".dropdown-btnText").text("由新到舊");
});
$(".dropdown-item[data-sort='old-to-new']").click(function (e) {
  e.preventDefault();
  $(this).toggleClass("filter-active");
  $(".dropdown-item[data-sort='new-to-old']").removeClass("filter-active");
  $(".dropdown-btnText").text("由舊到新");
});

