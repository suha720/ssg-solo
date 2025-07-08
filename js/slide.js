window.addEventListener("load", () => {
  const slideCount = document.querySelectorAll(
    ".sw_slide .swiper-slide"
  ).length;

  const swiper = new Swiper(".sw_slide", {
    loop: true,
    loopAdditionalSlides: 1,
    spaceBetween: 80,
    centeredSlides: true,
    speed: 1000,
    // autoplay: {
    //   delay: 3000,
    //   disableOnInteraction: false,
    // },
    navigation: {
      nextEl: ".sw_slide_next",
      prevEl: ".sw_slide_prev",
    },
    pagination: {
      el: ".sw_slide_pg",
      clickable: true,
    },
  });
});
