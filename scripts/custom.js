
$(document).ready(function(){

	var initialScroll = false;
	var objectString = $('.count1')[0];

	
	if (isScrolledIntoView(objectString)  ){
		counter1animate();
		initialScroll = true;
	}

	var initialScroll2 = false;
	var objectString2 = $('.count2')[0];

	
	if (isScrolledIntoView(objectString2)  ){
		counter2animate();
		initialScroll2 = true;
	}

	var initialScroll3 = false;
	var objectString3 = $('.count3')[0];

	if (isScrolledIntoView(objectString3)  ){
		counter3animate();
		initialScroll3 = true;
	}

	function counter1animate(){
		$('.count1').prop('Counter',0).animate({
	        Counter: 90
	    }, {
	        duration: 3000,
	        easing: 'swing',
	        step: function (now) {
	            $('.count1').text(Math.ceil(now));
	        }
	    });
	}

	function counter2animate(){
		$('.count2').prop('Counter',0).animate({
	        Counter: 14
	    }, {
	        duration: 1800,
	        easing: 'swing',
	        step: function (now) {
	            $('.count2').text(Math.ceil(now));
	        }
	    });
	}

	function counter3animate(){
		$('.count3').prop('Counter',0).animate({
	        Counter: 11
	    }, {
	        duration: 1000,
	        easing: 'swing',
	        step: function (now) {
	            $('.count3').text(Math.ceil(now));
	        }
	    });
	}


	// var imageElementString = $('.img-brand-block');
	function isScrolledIntoView(el) {
	    var elemTop = el.getBoundingClientRect().top;
	    var elemBottom = el.getBoundingClientRect().bottom;

	    var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
	    return isVisible;
	};

	$(window).scroll(function(){
		//Check for elements scrolling into view

		// var secondOne = document.getElementsByClassName("img-brand-block");
		if (initialScroll === false  && isScrolledIntoView(objectString)  ){
			counter1animate();
			initialScroll = true;
		}

		if (initialScroll2 === false  && isScrolledIntoView(objectString2)  ){
			counter2animate();
			initialScroll2 = true;
		}

		if (initialScroll3 === false  && isScrolledIntoView(objectString3)  ){
			counter3animate();
			initialScroll3 = true;
		}

		// if (initialScroll2 === false  && isScrolledIntoView(objectString2)  ){
		// 	console.log("Element is in view!");
		// 	initialScroll2 = true;
		// }




	})
	
});