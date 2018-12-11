function carouselNormalization() {
  var items   = $('#carousel-id .item'),              // grab all the slides
      heights = [],                                   // array to store heights
      tallest;                                        // tallest slide

  if (items.length) {
    function normalizeHeights() {
      items.each(function() {
        heights.push($(this).height());               // add each slide's height
      });                                             // to the array

      tallest = Math.max.apply(null, heights);        // find the largest height

      items.each(function() {
        $(this).css('min-height', tallest + 'px');    // set each slide's minimum
      });                                             // height to the largest
    };

    normalizeHeights();

    $(window).on('resize orientationchange', function() {
      tallest = 0, heights.length = 0;               // reset the variables

      items.each(function() {
        $(this).css('min-height', '0');              // reset each slide's height
      });

      normalizeHeights();                            // run it again
    });
  }
}

$(document).ready(function(){
	 carouselNormalization();
	var $carouselView = $(".carousel-item .view");
	var $carouselItem = $(".carousel-item");
	
	var $childImgSrc = $carouselView.children().find('img');
	
	if ($carouselItem.hasClass('active') == true){
		// meaning it's an image rather than a video or a section
		var src = $carouselItem.children().find('img');
		console.log(src);
	}
	var $width = $(this).width();
	$nav = $(".scrolling-navbar");
	if ($width <= '992'){
		$nav.removeClass("navbar-dark");
		$nav.addClass("navbar-light");
	}
		
});

 function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
  }
  
$(window).on('resize',function(){
	$nav = $(".scrolling-navbar");
	var $width = $(this).width();
	if ($width <= '992'){
		
		$nav.removeClass("navbar-dark");
		$nav.addClass("navbar-light");
	}else{
		$nav.addClass("navbar-dark");
		$nav.removeClass("navbar-light");
		
	}
	
});
$(document).scroll(function () {
	  
	  $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
	  $nav.toggleClass("navbar-dark",$(this).scrollTop() > $nav.height());
	  $nav.toggleClass("navbar-light",$(this).scrollTop() < $nav.height());
	 $('.scroll-animations .animated').each(function() {
      if (isScrolledIntoView(this) === true) {
        $(this).addClass('slideInLeft');
      }
    });
	
	
});