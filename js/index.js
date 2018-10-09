$(function(){
    // 轮播图
    var swiper1 = new Swiper('.banner-container', {
        slidesPerView: 1,
        spaceBetween:0,
        loop: true,
        pagination: {
          el: '.banner-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.banner-next',
          prevEl: '.banner-prev',
        },
        speed:800,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        }
      });
})