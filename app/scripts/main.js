'use strict';

$(document).ready(function(){
    $('#clock').countdown("2014/10/04 10:00:00", function(event) {
        var totalHours = event.offset.totalDays * 24 + event.offset.hours;
        $(this).html(event.strftime('T -%D days %H hours %M mins %S secs'));
    });
    
    $('.header').stickyNavbar({
        activeClass: "active",
        sectionSelector: "scrollto",
        navOffset: 0,
        animDuration: 250,
        startAt: 0,
        easing: "linear",
        animateCSS: false,
        animateCSSRepeat: false,
        bottomAnimation: false,
        cssAnimation: "fadeInDown",
        jqueryEffects: false,
        jqueryAnim: "slideDown",
        selector: "a",
        mobile: false
    });
    
});
