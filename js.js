  $('.slide').slick({
    centerMode: true,
    centerPadding: '25%',
    dots: true,
    arrows: true,
  });

  $(function(){
    var setImg = '#top_visual';
    var fadeSpeed = 1000;
    var switchDelay = 10000;
  
    $(setImg).children('img').css({opacity:'0'});
    $(setImg + ' img:first').stop().animate({opacity:'1',zIndex:'20'},fadeSpeed);
  
    setInterval(function(){
        $(setImg + ' :first-child').animate({opacity:'0'},fadeSpeed).next('img').animate({opacity:'1'},fadeSpeed).end().appendTo(setImg);
    },switchDelay);
  });

const modal = document.getElementById('modal_body');
function modal_open() {
  modal.style.display = 'block';
};
function modal_close() {
  modal.style.display = 'none';
};
function icon_change(){
  var menu_che = document.getElementById('menu-btn-check');

  if (menu_che.checked) {
    document.getElementById("menu_open").style.display = 'none';
    document.getElementById("menu_close").style.display = 'block';
  } else {
    document.getElementById("menu_open").style.display = 'block';
    document.getElementById("menu_close").style.display = 'none';
  }
}
