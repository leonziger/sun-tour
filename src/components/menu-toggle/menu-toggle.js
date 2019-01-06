import $ from 'jquery';


$('.menu-toggle').click(function() {
  $(this).toggleClass('menu-toggle_active');
  $($(this).attr('data-target')).toggleClass('is-open');
});
