$(document) .ready(function () {
  $('.tab1, .tab2, .tab3, .tab4') .hover(function () {
    $(this) .addClass('active');
  }, function () {
    $(this) .removeClass('active');
  });
  $('.sidetab1, .sidetab2, .sidetab3, .sidetab4') .hover(function () {
    $(this) .addClass('active2');
  }, function () {
    $(this) .removeClass('active2');
  });
  function sticky_relocate() {
    var window_top = $(window) .scrollTop();
    var div_top = $('#sticky-anchor') .offset() .top;
    if (window_top > div_top) {
      $('.tabStyle2, .sidetab1, .sidetab2, .sidetab3, .sidetab4') .addClass('stick');
    } else {
      $('.tabStyle2, .sidetab1, .sidetab2, .sidetab3, .sidetab4') .removeClass('stick');
    }
  }
  $(function () {
    $(window) .scroll(sticky_relocate);
    sticky_relocate();
  });
});
/*
[object Object]
*/
/*
Exception: [object Object]
*/
/*
undefined
*/
