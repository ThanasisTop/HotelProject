(function($) {

	'use strict';

  $('.site-menu-toggle').click(function(){
    var $this = $(this);
    if ( $('body').hasClass('menu-open') ) {
      $this.removeClass('open');
      $('.js-site-navbar').fadeOut(400);
      $('body').removeClass('menu-open');
    } else {
      $this.addClass('open');
      $('.js-site-navbar').fadeIn(400);
      $('body').addClass('menu-open');
    }
  });

	
	$('nav .dropdown').hover(function(){
		var $this = $(this);
		$this.addClass('show');
		$this.find('> a').attr('aria-expanded', true);
		$this.find('.dropdown-menu').addClass('show');
	}, function(){
		var $this = $(this);
			$this.removeClass('show');
			$this.find('> a').attr('aria-expanded', false);
			$this.find('.dropdown-menu').removeClass('show');
	});



	$('#dropdown04').on('show.bs.dropdown', function () {
	  console.log('show');
	});

  // aos
  AOS.init({
    duration: 1000
  });

	// home slider
	$('.home-slider').owlCarousel({
    loop:true,
    autoplay: true,
    margin:10,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    nav:true,
    autoplayHoverPause: true,
    items: 1,
    autoheight: true,
    navText : ["<span class='ion-chevron-left'></span>","<span class='ion-chevron-right'></span>"],
    responsive:{
      0:{
        items:1,
        nav:false
      },
      600:{
        items:1,
        nav:false
      },
      1000:{
        items:1,
        nav:true
      }
    }
	});

	// owl carousel
	var majorCarousel = $('.js-carousel-1');
	majorCarousel.owlCarousel({
    loop:true,
    autoplay: true,
    stagePadding: 7,
    margin: 20,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    nav: true,
    autoplayHoverPause: true,
    items: 3,
    navText : ["<span class='ion-chevron-left'></span>","<span class='ion-chevron-right'></span>"],
    responsive:{
      0:{
        items:1,
        nav:false
      },
      600:{
        items:2,
        nav:false
      },
      1000:{
        items:3,
        nav:true,
        loop:false
      }
  	}
	});

	// owl carousel
	var major2Carousel = $('.js-carousel-2');
	major2Carousel.owlCarousel({
    loop:true,
    autoplay: true,
    stagePadding: 7,
    margin: 20,
    // animateOut: 'fadeOut',
    // animateIn: 'fadeIn',
    nav: true,
    autoplayHoverPause: true,
    autoHeight: true,
    items: 3,
    navText : ["<span class='ion-chevron-left'></span>","<span class='ion-chevron-right'></span>"],
    responsive:{
      0:{
        items:1,
        nav:false
      },
      600:{
        items:2,
        nav:false
      },
      1000:{
        items:3,
        dots: true,
        nav:true,
        loop:false
      }
  	}
	});

  var siteStellar = function() {
    $(window).stellar({
      responsive: false,
      parallaxBackgrounds: true,
      parallaxElements: true,
      horizontalScrolling: false,
      hideDistantElements: false,
      scrollProperty: 'scroll'
    });
  }
  siteStellar();

  var smoothScroll = function() {
    var $root = $('html, body');

    $('a.smoothscroll[href^="#"]').click(function () {
      $root.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
      }, 500);
      return false;
    });
  }
  smoothScroll();

  var dateAndTime = function() {
    $('#m_date').datepicker({
      'format': 'm/d/yyyy',
      'autoclose': true
    });
    $('#checkin_date, #checkout_date').datepicker({
      'format': 'd MM, yyyy',
      'autoclose': true
    });
    $('#m_time').timepicker();
  };
  dateAndTime();


  var windowScroll = function() {

    $(window).scroll(function(){
      var $win = $(window);
      if ($win.scrollTop() > 200) {
        $('.js-site-header').addClass('scrolled');
      } else {
        $('.js-site-header').removeClass('scrolled');
      }

    });

  };
  windowScroll();


  var goToTop = function() {

    $('.js-gotop').on('click', function(event){
      
      event.preventDefault();

      $('html, body').animate({
        scrollTop: $('html').offset().top
      }, 500, 'easeInOutExpo');
      
      return false;
    });

    $(window).scroll(function(){

      var $win = $(window);
      if ($win.scrollTop() > 200) {
        $('.js-top').addClass('active');
      } else {
        $('.js-top').removeClass('active');
      }

    });
  
  };


})(jQuery);


function checkAvailability(checkin_date, checkout_date, adults=2, children=0) {
  var dateCheckIn = checkin_date.split(' ')[0];
  var monthCheckIn = checkin_date.split(' ')[1];
  var yearCheckIn = checkin_date.split(' ')[2];

  var monthCheckInStr = monthCheckIn.split(',')[0];
  var monthCheckInNumber;
  var newCheckInDateFormat;

  var dateCheckOut = checkout_date.split(' ')[0];
  var monthCheckOut = checkout_date.split(' ')[1];
  var yearCheckOut = checkout_date.split(' ')[2];

  var monthCheckOutStr = monthCheckOut.split(',')[0];
  var monthCheckOutNumber;
  var newCheckOutDateFormat;

  var months = {
    January: "-01-",
    February : "-02-",
    March: "-03-",
    April: "-04-",
    May:"-05-",
    June:"-06-",
    July:"-07-",
    August:"-08-",
    September:"-09-",
    Obtomber:"-10-",
    Novembre:"-11-",
    December:"-12-",
  }

  for (var key in months) {
    if(monthCheckInStr==key){
      monthCheckInNumber=months[key];
    }
    if(monthCheckOutStr==key){
      monthCheckOutNumber=months[key];
    }
  }

  newCheckInDateFormat=yearCheckIn+monthCheckInNumber+dateCheckIn;
  newCheckOutDateFormat=yearCheckOut+monthCheckOutNumber+dateCheckOut;
  //console.log(newCheckInDateFormat,'checkin');
  //console.log(newCheckOutDateFormat,'checkout');
  var url='https://www.booking.com/hotel/gr/vivian-apartments-rethumno.en-gb.html?aid=311984&label=vivian-apartments-rethumno-PunsJS8o87SGzFAM8MSGGwS589959799561%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-1645839500805%3Alp9067713%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YTQUGSsRwx9_3qo3uPTHyoo&sid=f8a17736a09719e824301069fbb5af1d&all_sr_blocks=530627817_364229555_4_0_0;checkin='+newCheckInDateFormat+';checkout='+newCheckOutDateFormat+';dest_id=-827465;dest_type=city;dist=0;group_adults='+adults+';group_children='+children+';hapos=1;highlighted_blocks=530627817_364229555_4_0_0;hpos=1;matching_block_id=530627817_364229555_4_0_0;no_rooms=1;req_adults='+adults+';req_children='+children+';room1=A%2CA;sb_price_type=total;sr_order=popularity;ucfs=1&#hotelTmpl';
           
  window.open(url, '_blank');
  
}