//= require ./all_nosearch
//= require ./app/_search

// smooth scroll to anchors with sticky header-notice

$(document).ready(function () {
     $(document).on('click','a[href^="#"]', function (e) {
         e.preventDefault();

         var offset = $('#header-notice').outerHeight()
                  
         var target = this.hash,
             $target = $(target);

         $('html, body').stop().animate({
             'scrollTop': $target.offset().top - offset
         }, 100, 'swing', function () {
             // window.location.hash = target;
         });
     });
 });