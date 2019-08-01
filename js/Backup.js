$(document).ready(function(){
/*
	$(".main").onepage_scroll({
	   sectionContainer: "section",     // sectionContainer accepts any kind of selector in case you don't want to use section
	   easing: "ease",                  // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
	                                    // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
	   animationTime: 1000,             // AnimationTime let you define how long each section takes to animate
	   pagination: true,                // You can either show or hide the pagination. Toggle true for show, false for hide.
	   updateURL: false,                // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
	   beforeMove: function(index) {},  // This option accepts a callback function. The function will be called before the page moves.
	   afterMove: function(index) {},   // This option accepts a callback function. The function will be called after the page moves.
	   loop: false,                     // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
	   keyboard: true,                  // You can activate the keyboard controls
	   responsiveFallback: 480,        // You can fallback to normal page scroll by defining the width of the browser in which
	                                    // you want the responsive fallback to be triggered. For example, set this to 600 and whenever
	                                    // the browser's width is less than 600, the fallback will kick in.
	   direction: "vertical"            // You can now define the direction of the One Page Scroll animation. Options available are "vertical" and "horizontal". The default value is "vertical".  
	});*/

/* Toggle Javascript */

var theToggle = document.getElementById('toggle');

// based on Todd Motto functions
// https://toddmotto.com/labs/reusable-js/

// hasClass
function hasClass(elem, className) {
	return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
}
// addClass
function addClass(elem, className) {
    if (!hasClass(elem, className)) {
    	elem.className += ' ' + className;
    }
}
// removeClass
function removeClass(elem, className) {
	var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, ' ') + ' ';
	if (hasClass(elem, className)) {
        while (newClass.indexOf(' ' + className + ' ') >= 0 ) {
            newClass = newClass.replace(' ' + className + ' ', ' ');
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
    }
}
// toggleClass
function toggleClass(elem, className) {
	var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, " " ) + ' ';
    if (hasClass(elem, className)) {
        while (newClass.indexOf(" " + className + " ") >= 0 ) {
            newClass = newClass.replace( " " + className + " " , " " );
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
    } else {
        elem.className += ' ' + className;
    }
}

theToggle.onclick = function() {
   toggleClass(this, 'on');
   return false;
}


/* Toggle Javascript */

/* Toggle Video Tabs */

	$("div.df-tab-menu>div.list-group>a").click(function (e) {
           e.preventDefault();
           $(this).siblings('a.active').removeClass("active");
           $(this).addClass("active");
           var index = $(this).index();
           $("div.df-tab>div.df-tab-content").removeClass("active");
           $("div.df-tab>div.df-tab-content").eq(index).addClass("active");
       });

/* Toggle Video Tabs */

/* Initialize Wow js */

var wow = new WOW();
  wow.init();


/* Initialize Wow js */

/* For toggle header */

var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();
	

	$(window).scroll(function () {

		didScroll = true;

        var home = $("#section-home").offset().top - 100;
        var aboutus = $("#section-about").offset().top - 100;
        var product = $("#section-product").offset().top - 100;
        var features = $("#section-features").offset().top - 100;
        var services = $("#section-services").offset().top - 100;
        var tutorials = $("#tutorials").offset().top - 100;
        //var contactus = $("#section-contact-us").offset().top - 100;

      
		/*if ($(window).width() > 1400) {*/

        if ($(this).scrollTop() >= home) {
          $("#home").css({
	        'color': '#2f87b8',
	        'font-size': '1.6vw',
	        'font-weight': 'bold',
	        'transition': '0.3s all ease-in',
	      });
	      $("#about-us").css({
	        'color': '#414042',
	        'font-size': '1.5vw',
	        'font-weight': 'normal',
	      });
	      $("#product").css({
	        'color': '#414042',
	        'font-size': '1.5vw',
	        'font-weight': 'normal',
	      });
	      $("#features").css({
	        'color': '#414042',
	        'font-size': '1.5vw',
	        'font-weight': 'normal',
	      });
	      $("#services").css({
	        'color': '#414042',
	        'font-size': '1.5vw',
	        'font-weight': 'normal',
	      });
	      $("#contact-us").css({
			   	'color': '#414042',
			    'font-size': '1.5vw',
			    'font-weight': 'normal',
		  });
          if ($(this).scrollTop() >= aboutus) {
          	//window.scrollTo(0, product);
            $("#home").css({
		        'color': '#414042',
		        'font-size': '1.5vw',
		        'font-weight': 'normal',
		      });
		      $("#about-us").css({
		      	'color': '#2f87b8',
		        'font-size': '1.6vw',
		        'font-weight': 'bold',
		        'transition': '0.3s all ease-in',
		      });
		      $("#product").css({
		        'color': '#414042',
		        'font-size': '1.5vw',
		        'font-weight': 'normal',
		      });
		      $("#features").css({
		        'color': '#414042',
		        'font-size': '1.5vw',
		        'font-weight': 'normal',
		      });
		      $("#services").css({
		        'color': '#414042',
		        'font-size': '1.5vw',
		        'font-weight': 'normal',
		      });
		      $("#contact-us").css({
			     'color': '#414042',
			     'font-size': '1.5vw',
			     'font-weight': 'normal',
			   });
            if ($(this).scrollTop() >= product) {
              $("#home").css({
		        'color': '#414042',
		        'font-size': '1.5vw',
		        'font-weight': 'normal',
		      });
		      $("#about-us").css({
		      	'color': '#414042',
		        'font-size': '1.5vw',
		        'font-weight': 'normal',
		      });
		      $("#product").css({
		      	'color': '#2f87b8',
		        'font-size': '1.6vw',
		        'font-weight': 'bold',
		        'transition': '0.3s all ease-in',
		      });
		      $("#features").css({
		        'color': '#414042',
		        'font-size': '1.5vw',
		        'font-weight': 'normal',
		      });
		      $("#services").css({
		        'color': '#414042',
		        'font-size': '1.5vw',
		        'font-weight': 'normal',
		      });
		      $("#contact-us").css({
			      	'color': '#414042',
			        'font-size': '1.5vw',
			        'font-weight': 'normal',
			      });
              if ($(this).scrollTop() >= features) {
                $("#home").css({
			        'color': '#414042',
			        'font-size': '1.5vw',
			        'font-weight': 'normal',
			      });
			      $("#about-us").css({
			      	'color': '#414042',
			        'font-size': '1.5vw',
			        'font-weight': 'normal',
			      });
			      $("#product").css({
			      	'color': '#414042',
			        'font-size': '1.5vw',
			        'font-weight': 'normal',
			      });
			      $("#features").css({
			      	'color': '#2f87b8',
			        'font-size': '1.6vw',
			        'font-weight': 'bold',
			        'transition': '0.3s all ease-in',
			      });
			      $("#services").css({
			        'color': '#414042',
			        'font-size': '1.5vw',
			        'font-weight': 'normal',
			      });
			      $("#contact-us").css({
			      	'color': '#414042',
			        'font-size': '1.5vw',
			        'font-weight': 'normal',
			      });
                if ($(this).scrollTop() >= services) {
                  $("#home").css({
			        'color': '#414042',
			        'font-size': '1.5vw',
			        'font-weight': 'normal',
			      });
			      $("#about-us").css({
			      	'color': '#414042',
			        'font-size': '1.5vw',
			        'font-weight': 'normal',
			      });
			      $("#product").css({
			      	'color': '#414042',
			        'font-size': '1.5vw',
			        'font-weight': 'normal',
			      });
			      $("#features").css({
			      	'color': '#414042',
			        'font-size': '1.5vw',
			        'font-weight': 'normal',
			      });
			      $("#services").css({
			      	'color': '#2f87b8',
			        'font-size': '1.6vw',
			        'font-weight': 'bold',
			        'transition': '0.3s all ease-in',
			      });
			      $("#contact-us").css({
			      	'color': '#414042',
			        'font-size': '1.5vw',
			        'font-weight': 'normal',
			      });
			      if ($(this).scrollTop() >= tutorials) {
	                  $("#home").css({
				        'color': '#414042',
				        'font-size': '1.5vw',
				        'font-weight': 'normal',
				      });
				      $("#about-us").css({
				      	'color': '#414042',
				        'font-size': '1.5vw',
				        'font-weight': 'normal',
				      });
				      $("#product").css({
				      	'color': '#414042',
				        'font-size': '1.5vw',
				        'font-weight': 'normal',
				      });
				      $("#features").css({
				      	'color': '#414042',
				        'font-size': '1.5vw',
				        'font-weight': 'normal',
				      });
				      $("#services").css({
				      	'color': '#414042',
				        'font-size': '1.5vw',
				        'font-weight': 'normal',
				      });
				      $("#contact-us").css({
				      	'color': '#2f87b8',
				        'font-size': '1.6vw',
				        'font-weight': 'bold',
				        'transition': '0.3s all ease-in',
				      });
                	}
                }
              }
            }
          }
        }
        else {
          
        }
/*
		}*/

		/*else if ($(window).width() < 1400) {

			if ($(this).scrollTop() >= home) {
          $("#home").css({
	        'color': '#2f87b8',
	        'font-size': '22px',
	        'font-weight': 'bold',
	        'transition': '0.3s all ease-in',
	      });
	      $("#about-us").css({
	        'color': '#414042',
	        'font-size': '20px',
	        'font-weight': 'normal',
	      });
	      $("#product").css({
	        'color': '#414042',
	        'font-size': '20px',
	        'font-weight': 'normal',
	      });
	      $("#features").css({
	        'color': '#414042',
	        'font-size': '20px',
	        'font-weight': 'normal',
	      });
	      $("#services").css({
	        'color': '#414042',
	        'font-size': '20px',
	        'font-weight': 'normal',
	      });
	      $("#contact-us").css({
	        'color': '#414042',
	        'font-size': '20px',
	        'font-weight': 'normal',
	      });
          if ($(this).scrollTop() >= aboutus) {
            $("#home").css({
		        'color': '#414042',
		        'font-size': '20px',
		        'font-weight': 'normal',
		      });
		      $("#about-us").css({
		      	'color': '#2f87b8',
		        'font-size': '22px',
		        'font-weight': 'bold',
		        'transition': '0.3s all ease-in',
		      });
		      $("#product").css({
		        'color': '#414042',
		        'font-size': '20px',
		        'font-weight': 'normal',
		      });
		      $("#features").css({
		        'color': '#414042',
		        'font-size': '20px',
		        'font-weight': 'normal',
		      });
		      $("#services").css({
		        'color': '#414042',
		        'font-size': '20px',
		        'font-weight': 'normal',
		      });
		      $("#contact-us").css({
		        'color': '#414042',
		        'font-size': '20px',
		        'font-weight': 'normal',
		      });
            if ($(this).scrollTop() >= product) {
              $("#home").css({
		        'color': '#414042',
		        'font-size': '20px',
		        'font-weight': 'normal',
		      });
		      $("#about-us").css({
		      	'color': '#414042',
		        'font-size': '20px',
		        'font-weight': 'normal',
		      });
		      $("#product").css({
		      	'color': '#2f87b8',
		        'font-size': '22px',
		        'font-weight': 'bold',
		        'transition': '0.3s all ease-in',
		      });
		      $("#features").css({
		        'color': '#414042',
		        'font-size': '20px',
		        'font-weight': 'normal',
		      });
		      $("#services").css({
		        'color': '#414042',
		        'font-size': '20px',
		        'font-weight': 'normal',
		      });
		      $("#contact-us").css({
		        'color': '#414042',
		        'font-size': '20px',
		        'font-weight': 'normal',
		      });
              if ($(this).scrollTop() >= features) {
                $("#home").css({
			        'color': '#414042',
			        'font-size': '20px',
			        'font-weight': 'normal',
			      });
			      $("#about-us").css({
			      	'color': '#414042',
			        'font-size': '20px',
			        'font-weight': 'normal',
			      });
			      $("#product").css({
			      	'color': '#414042',
			        'font-size': '20px',
			        'font-weight': 'normal',
			      });
			      $("#features").css({
			      	'color': '#2f87b8',
			        'font-size': '22px',
			        'font-weight': 'bold',
			        'transition': '0.3s all ease-in',
			      });
			      $("#services").css({
			        'color': '#414042',
			        'font-size': '20px',
			        'font-weight': 'normal',
			      });
			      $("#contact-us").css({
			        'color': '#414042',
			        'font-size': '20px',
			        'font-weight': 'normal',
			      });
                if ($(this).scrollTop() >= services) {
                  $("#home").css({
			        'color': '#414042',
			        'font-size': '20px',
			        'font-weight': 'normal',
			      });
			      $("#about-us").css({
			      	'color': '#414042',
			        'font-size': '20px',
			        'font-weight': 'normal',
			      });
			      $("#product").css({
			      	'color': '#414042',
			        'font-size': '20px',
			        'font-weight': 'normal',
			      });
			      $("#features").css({
			      	'color': '#414042',
			        'font-size': '20px',
			        'font-weight': 'normal',
			      });
			      $("#services").css({
			      	'color': '#2f87b8',
			        'font-size': '22px',
			        'font-weight': 'bold',
			        'transition': '0.3s all ease-in',
			      });
			      $("#contact-us").css({
			        'color': '#414042',
			        'font-size': '20px',
			        'font-weight': 'normal',
			      });
			      if ($(this).scrollTop() >= contactus) {
	                  $("#home").css({
				        'color': '#414042',
				        'font-size': '20px',
				        'font-weight': 'normal',
				      });
				      $("#about-us").css({
				      	'color': '#414042',
				        'font-size': '20px',
				        'font-weight': 'normal',
				      });
				      $("#product").css({
				      	'color': '#414042',
				        'font-size': '20px',
				        'font-weight': 'normal',
				      });
				      $("#features").css({
				      	'color': '#414042',
				        'font-size': '20px',
				        'font-weight': 'normal',
				      });
				      $("#services").css({
				      	'color': '#414042',
				        'font-size': '20px',
				        'font-weight': 'normal',
				      });
				      $("#contact-us").css({
				      	'color': '#2f87b8',
				        'font-size': '22px',
				        'font-weight': 'bold',
				        'transition': '0.3s all ease-in',
				      });
                	}
                }
              }
            }
          }
        }
        else {
          
        }

		}*/
    });

/* for toggle header */

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > 10){
        // Scroll Down
        $('header').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-up');
        }
    }
    
    lastScrollTop = st;
}

/* for toggle header */

	/*if ($(window).width() > 1400) {*/

	$("#home").click(function() {
    var offset = $("#section-home").offset().top - 100;
	    $('html, body').animate({
	        scrollTop: offset
	    }, 1000);
      $(this).css({
        'color': '#2f87b8',
        'font-size': '1.6vw',
        'font-weight': 'bold',
        'transition': '0.3s all ease-in',
      });
      $("#about-us").css({
        'color': '#414042',
        'font-size': '1.5vw',
        'font-weight': 'normal',
      });
      $("#product").css({
        'color': '#414042',
        'font-size': '1.5vw',
        'font-weight': 'normal',
      });
      $("#features").css({
        'color': '#414042',
        'font-size': '1.5vw',
        'font-weight': 'normal',
      });
      $("#services").css({
        'color': '#414042',
        'font-size': '1.5vw',
        'font-weight': 'normal',
      });
      $("#contact-us").css({
        'color': '#414042',
        'font-size': '1.5vw',
        'font-weight': 'normal',
      });
	});

	$("#about-us").click(function() {
    var offset = $("#section-about").offset().top - 100;
      $('html, body').animate({
          scrollTop: offset
      }, 1000);
	    // $('html, body').animate({
	    //     scrollTop: $("#section-4").offset().top
	    // }, 1000);
      $(this).css({
        'color': '#2f87b8',
        'font-size': '1.6vw',
        'font-weight': 'bold',
        'transition': '0.3s all ease-in',
      });
      $("#home").css({
        'color': '#414042',
        'font-size': '1.5vw',
        'font-weight': 'normal',
      });
      $("#product").css({
        'color': '#414042',
        'font-size': '1.5vw',
        'font-weight': 'normal',
      });
      $("#features").css({
        'color': '#414042',
        'font-size': '1.5vw',
        'font-weight': 'normal',
      });
      $("#services").css({
        'color': '#414042',
        'font-size': '1.5vw',
        'font-weight': 'normal',
      });
      $("#contact-us").css({
        'color': '#414042',
        'font-size': '1.5vw',
        'font-weight': 'normal',
      });
	});
	$("#product").click(function() {
    var offset = $("#section-product").offset().top - 100;
      $('html, body').animate({
          scrollTop: offset
      }, 1000);
	    // $('html, body').animate({
	    //     scrollTop: $("#section-3").offset().top
	    // }, 1000);
      $(this).css({
        'color': '#2f87b8',
        'font-size': '1.6vw',
        'font-weight': 'bold',
        'transition': '0.3s all ease-in',
      });
      $("#home").css({
        'color': '#414042',
        'font-size': '1.5vw',
        'font-weight': 'normal',
      });
      $("#about-us").css({
        'color': '#414042',
        'font-size': '1.5vw',
        'font-weight': 'normal',
      });
      $("#features").css({
        'color': '#414042',
        'font-size': '1.5vw',
        'font-weight': 'normal',
      });
      $("#services").css({
        'color': '#414042',
        'font-size': '1.5vw',
        'font-weight': 'normal',
      });
      $("#contact-us").css({
        'color': '#414042',
        'font-size': '1.5vw',
        'font-weight': 'normal',
      });
	});
	$("#features").click(function() {
    var offset = $("#section-features").offset().top - 100;
      $('html, body').animate({
          scrollTop: offset
      }, 1000);
	    // $('html, body').animate({
	    //     scrollTop: $("#section-5").offset().top
	    // }, 1000);
      $(this).css({
        'color': '#2f87b8',
        'font-size': '1.6vw',
        'font-weight': 'bold',
        'transition': '0.3s all ease-in',
      });
      $("#home").css({
        'color': '#414042',
        'font-size': '1.5vw',
        'font-weight': 'normal',
      });
      $("#about-us").css({
        'color': '#414042',
        'font-size': '1.5vw',
        'font-weight': 'normal',
      });
      $("#product").css({
        'color': '#414042',
        'font-size': '1.5vw',
        'font-weight': 'normal',
      });
      $("#services").css({
        'color': '#414042',
        'font-size': '1.5vw',
        'font-weight': 'normal',
      });
      $("#contact-us").css({
        'color': '#414042',
        'font-size': '1.5vw',
        'font-weight': 'normal',
      });
	});
	$("#services").click(function() {
    var offset = $("#section-services").offset().top - 100;
      $('html, body').animate({
          scrollTop: offset
      }, 1000);
	    // $('html, body').animate({
	    //     scrollTop: $("#section-6").offset().top
	    // }, 1000);
      $(this).css({
        'color': '#2f87b8',
        'font-size': '1.6vw',
        'font-weight': 'bold',
        'transition': '0.3s all ease-in',
      });
      $("#home").css({
        'color': '#414042',
        'font-size': '1.5vw',
        'font-weight': 'normal',
      });
      $("#about-us").css({
        'color': '#414042',
        'font-size': '1.5vw',
        'font-weight': 'normal',
      });
      $("#product").css({
        'color': '#414042',
        'font-size': '1.5vw',
        'font-weight': 'normal',
      });
      $("#features").css({
        'color': '#414042',
        'font-size': '1.5vw',
        'font-weight': 'normal',
      });
      $("#contact-us").css({
        'color': '#414042',
        'font-size': '1.5vw',
        'font-weight': 'normal',
      });
	});
	$("#contact-us").click(function() {
    var offset = $("#tutorials").offset().top - 100;
      $('html, body').animate({
          scrollTop: offset
      }, 1000);
	    // $('html, body').animate({
	    //     scrollTop: $("#section-6").offset().top
	    // }, 1000);
      $(this).css({
        'color': '#2f87b8',
        'font-size': '1.6vw',
        'font-weight': 'bold',
        'transition': '0.3s all ease-in',
      });
      $("#home").css({
        'color': '#414042',
        'font-size': '1.5vw',
        'font-weight': 'normal',
      });
      $("#about-us").css({
        'color': '#414042',
        'font-size': '1.5vw',
        'font-weight': 'normal',
      });
      $("#product").css({
        'color': '#414042',
        'font-size': '1.5vw',
        'font-weight': 'normal',
      });
      $("#features").css({
        'color': '#414042',
        'font-size': '1.5vw',
        'font-weight': 'normal',
      });
      $("#services").css({
        'color': '#414042',
        'font-size': '1.5vw',
        'font-weight': 'normal',
      });
	});

/*	}
	else if ($(window).width() < 1400) {

		$("#home").click(function() {
    var offset = $("#section-home").offset().top - 100;
	    $('html, body').animate({
	        scrollTop: offset
	    }, 1000);
      $(this).css({
        'color': '#2f87b8',
        'font-size': '22px',
        'font-weight': 'bold',
        'transition': '0.3s all ease-in',
      });
      $("#about-us").css({
        'color': '#414042',
        'font-size': '20px',
        'font-weight': 'normal',
      });
      $("#product").css({
        'color': '#414042',
        'font-size': '20px',
        'font-weight': 'normal',
      });
      $("#features").css({
        'color': '#414042',
        'font-size': '20px',
        'font-weight': 'normal',
      });
      $("#services").css({
        'color': '#414042',
        'font-size': '20px',
        'font-weight': 'normal',
      });
      $("#contact-us").css({
        'color': '#414042',
        'font-size': '20px',
        'font-weight': 'normal',
      });
	});

	$("#about-us").click(function() {
    var offset = $("#section-about").offset().top - 100;
      $('html, body').animate({
          scrollTop: offset
      }, 1000);
	    // $('html, body').animate({
	    //     scrollTop: $("#section-4").offset().top
	    // }, 1000);
      $(this).css({
        'color': '#2f87b8',
        'font-size': '22px',
        'font-weight': 'bold',
        'transition': '0.3s all ease-in',
      });
      $("#home").css({
        'color': '#414042',
        'font-size': '20px',
        'font-weight': 'normal',
      });
      $("#product").css({
        'color': '#414042',
        'font-size': '20px',
        'font-weight': 'normal',
      });
      $("#features").css({
        'color': '#414042',
        'font-size': '20px',
        'font-weight': 'normal',
      });
      $("#services").css({
        'color': '#414042',
        'font-size': '20px',
        'font-weight': 'normal',
      });
      $("#contact-us").css({
        'color': '#414042',
        'font-size': '20px',
        'font-weight': 'normal',
      });
	});
	$("#product").click(function() {
    var offset = $("#section-product").offset().top - 100;
      $('html, body').animate({
          scrollTop: offset
      }, 1000);
	    // $('html, body').animate({
	    //     scrollTop: $("#section-3").offset().top
	    // }, 1000);
      $(this).css({
        'color': '#2f87b8',
        'font-size': '22px',
        'font-weight': 'bold',
        'transition': '0.3s all ease-in',
      });
      $("#home").css({
        'color': '#414042',
        'font-size': '20px',
        'font-weight': 'normal',
      });
      $("#about-us").css({
        'color': '#414042',
        'font-size': '20px',
        'font-weight': 'normal',
      });
      $("#features").css({
        'color': '#414042',
        'font-size': '20px',
        'font-weight': 'normal',
      });
      $("#services").css({
        'color': '#414042',
        'font-size': '20px',
        'font-weight': 'normal',
      });
      $("#contact-us").css({
        'color': '#414042',
        'font-size': '20px',
        'font-weight': 'normal',
      });
	});
	$("#features").click(function() {
    var offset = $("#section-features").offset().top - 100;
      $('html, body').animate({
          scrollTop: offset
      }, 1000);
	    // $('html, body').animate({
	    //     scrollTop: $("#section-5").offset().top
	    // }, 1000);
      $(this).css({
        'color': '#2f87b8',
        'font-size': '22px',
        'font-weight': 'bold',
        'transition': '0.3s all ease-in',
      });
      $("#home").css({
        'color': '#414042',
        'font-size': '20px',
        'font-weight': 'normal',
      });
      $("#about-us").css({
        'color': '#414042',
        'font-size': '20px',
        'font-weight': 'normal',
      });
      $("#product").css({
        'color': '#414042',
        'font-size': '20px',
        'font-weight': 'normal',
      });
      $("#services").css({
        'color': '#414042',
        'font-size': '20px',
        'font-weight': 'normal',
      });
      $("#contact-us").css({
        'color': '#414042',
        'font-size': '20px',
        'font-weight': 'normal',
      });
	});
	$("#services").click(function() {
    var offset = $("#section-services").offset().top - 100;
      $('html, body').animate({
          scrollTop: offset
      }, 1000);
	    // $('html, body').animate({
	    //     scrollTop: $("#section-6").offset().top
	    // }, 1000);
      $(this).css({
        'color': '#2f87b8',
        'font-size': '22px',
        'font-weight': 'bold',
        'transition': '0.3s all ease-in',
      });
      $("#home").css({
        'color': '#414042',
        'font-size': '20px',
        'font-weight': 'normal',
      });
      $("#about-us").css({
        'color': '#414042',
        'font-size': '20px',
        'font-weight': 'normal',
      });
      $("#product").css({
        'color': '#414042',
        'font-size': '20px',
        'font-weight': 'normal',
      });
      $("#features").css({
        'color': '#414042',
        'font-size': '20px',
        'font-weight': 'normal',
      });
      $("#contact-us").css({
        'color': '#414042',
        'font-size': '20px',
        'font-weight': 'normal',
      });
	});
	$("#contact-us").click(function() {
    var offset = $("#section-contact-us").offset().top - 100;
      $('html, body').animate({
          scrollTop: offset
      }, 1000);
	    // $('html, body').animate({
	    //     scrollTop: $("#section-6").offset().top
	    // }, 1000);
      $(this).css({
        'color': '#2f87b8',
        'font-size': '22px',
        'font-weight': 'bold',
        'transition': '0.3s all ease-in',
      });
      $("#home").css({
        'color': '#414042',
        'font-size': '20px',
        'font-weight': 'normal',
      });
      $("#about-us").css({
        'color': '#414042',
        'font-size': '20px',
        'font-weight': 'normal',
      });
      $("#product").css({
        'color': '#414042',
        'font-size': '20px',
        'font-weight': 'normal',
      });
      $("#features").css({
        'color': '#414042',
        'font-size': '20px',
        'font-weight': 'normal',
      });
      $("#services").css({
        'color': '#414042',
        'font-size': '20px',
        'font-weight': 'normal',
      });
	});

	}*/

});