/* Swiper */
const swiper = new Swiper('.swiper', {
  // Default parameter
  slidesPerView: 3,  // 顯示3個slide元素
  spaceBetween: 24,  // 間距24px
  slidesPerGroup: 3, // 3個一組切換
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
