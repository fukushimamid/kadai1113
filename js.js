var $slide = $(".slide")
  .slick({
    fade: true,
    speed: 1500,
    autoplaySpeed: 3000,
    arrows: false,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true
  });

const modal = document.getElementById('modal_body');
function modal_open() {
　　modal.style.display = 'block';
};
function modal_close() {
　　modal.style.display = 'none';
};
