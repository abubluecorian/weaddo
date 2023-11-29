
//
$(document).ready(function() {
			$('#fullpage').fullpage({
				'verticalCentered': false,
				'scrollingSpeed': 600,
				'autoScrolling': false,
				'css3': true,
				'navigation': true,
				'navigationPosition': 'right',
			});
		});

// wow
$(function()
{
    new WOW().init();
    $(".rotate").textrotator();
})

// code for counter
$.fn.jQuerySimpleCounter = function (options) {
	var settings = $.extend(
	  {
		start: 0,
		end: 100,
		easing: "swing",
		duration: 400,
		complete: ""
	  },
	  options
	);
  
	var thisElement = $(this);
  
	$({ count: settings.start }).animate(
	  { count: settings.end },
	  {
		duration: settings.duration,
		easing: settings.easing,
		step: function () {
		  var mathCount = Math.ceil(this.count);
		  thisElement.text(mathCount);
		},
		complete: settings.complete
	  }
	);
  };
  
  $("#number1").jQuerySimpleCounter({ end: 35, duration: 3000 });
  $("#number2").jQuerySimpleCounter({ end: 18, duration: 3000 });
  $("#number3").jQuerySimpleCounter({ end: 430, duration: 2000 });
  $("#number4").jQuerySimpleCounter({ end: 430, duration: 2500 });
  
  /* AUTHOR LINK */
  $(".about-me-img").hover(
	function () {
	  $(".authorWindowWrapper").stop().fadeIn("fast").find("p").addClass("trans");
	},
	function () {
	  $(".authorWindowWrapper")
		.stop()
		.fadeOut("fast")
		.find("p")
		.removeClass("trans");
	}
  );
  