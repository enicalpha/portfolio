$(function() {
  $('#scroll').click(function() {
    // スクロール
    $('html,body').animate({scrollTop: $('#scroll-point').offset().top}, 500, 'swing');
  });
});
