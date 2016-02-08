$(function () { // wait for document ready
	// init
	var controller = new ScrollMagic.Controller();
	var headerTween = TweenMax.to("#header", 1, {
		css:{
			height: "64px",
			backgroundColor: "rgba(0,0,0,0.8)",
    		boxShadow: " 0 2px 5px rgba(0,0,0,0.26)"
		}, 
		ease: Linear.easeNone
	});

	var scene = new ScrollMagic.Scene({triggerElement: "#trigger", duration: "50%"})
		.setTween(headerTween)
		// .addIndicators() // add indicators (requires plugin)
		.addTo(controller);
	smoothScroll();
	function smoothScroll() {
	    var a = $(window);
	    a.on("mousewheel DOMMouseScroll", function(b) {
	        b.preventDefault();
	        b = b.originalEvent.wheelDelta / 120 || -b.originalEvent.detail / 3;
	        b = a.scrollTop() - parseInt(280 * b);
	        TweenMax.to(a, 1.1, {
	            scrollTo: {
	                y: b,
	                autoKill: !0
	            },
	            ease: Power1.easeOut,
	            overwrite: 5
	        })
	    })
	}
		
});