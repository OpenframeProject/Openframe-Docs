//= require ./all_nosearch
//= require ./app/_search

// smooth scroll to anchors with sticky header-notice

function scrollToAnchor(_hash){
  var $target = $(_hash);

  var offset = $('#header-notice').outerHeight()

  $('html, body').stop().animate({
    'scrollTop': $target.offset().top - offset
  }, 100, 'swing', function () {
    // window.location.hash = target;
  });
}

$(document).ready(function () {
  if (window.location.hash) scrollToAnchor(window.location.hash);
  
  $(document).on('click','a[href^="#"]', function (e) {
    e.preventDefault();
            
    scrollToAnchor(this.hash);
  });
});
 
 
 // http://localhost:4567/?Raspberry%20Pi%20terminal#getting-started