document.addEventListener("DOMContentLoaded", function() {
//Infinite slider
	var nextButton = document.querySelector(".arrow_right");
	console.log(nextButton);
	var prevButton = document.querySelector(".arrow_left");
	console.log(prevButton);
	var slides = document.querySelectorAll(".slider ul li");
	console.log(slides)
	var picturePosition = 0;
	console.log(picturePosition);
	slides[picturePosition].classList.add("visible");
	var clickCount =0;
	function clickCounter1 (event) {
		clickCount += 1;
		slides[picturePosition].classList.remove("visible");
		picturePosition +=1;
		if (picturePosition>=3) {
			picturePosition = 0;
		}
		console.log("Nr kliknięcia:", clickCount);
		slides[picturePosition].classList.add("visible");
	}
	function clickCounter2 (event) {
		clickCount += 1;
		slides[picturePosition].classList.remove("visible");
		picturePosition +=1;
		if (picturePosition<1) {
			picturePosition = slides.length;
		} else if (picturePosition>=3) {
			picturePosition = 0;
		}
		console.log("Nr kliknięcia:", clickCount);
		slides[picturePosition].classList.add("visible");

	}
	nextButton.addEventListener("click", clickCounter1);
	prevButton.addEventListener("click", clickCounter2);
});
//form validation
document.addEventListener("DOMContentLoaded", function() {
	var myForm = document.querySelector("form");
	myForm.addEventListener("submit", function(event) {
		event.preventDefault();
		var name = document.querySelector('input[placeholder="Imię"]').value;
		var email = document.querySelector('input[placeholder="E-mail"]').value;
		var textArea = document.querySelector('textarea').value;
		var checkbox = document.querySelector('input[type="checkbox"]').checked;
		var errorMessage1 = "";
		var errorMessage2 = "";
		var errorMessage3 = "";
		var errorMessage4 = "";
		var errorHolder1 = document.getElementsByClassName("error_message1")[0];
		var errorHolder2 = document.getElementsByClassName("error_message2")[0];
		var errorHolder3 = document.getElementsByClassName("error_message3")[0];
		var errorHolder4 = document.getElementsByClassName("error_message4")[0];
		var result = true;
		//validation conditions
		if (name.length < 3) {
			//window.alert("Name can not be less than 3 characters");
				errorMessage1 = "Error: name can't be less than 3 characters";
				console.log("FY");
				result = false;
		} else {
				errorHolder1.innerHTML =""; //Cleanup error messages
		}

		if (email.indexOf("@") === -1) {
 				//window.alert("no @");
 				console.log("Y");
 				errorMessage2 = "Error: no @ in email";
 				result = false;
		} else {
 				//window.alert("no @");
 				errorHolder2.innerHTML =""; //Cleanup error messages
		}

		if (textArea.length < 1) {
				//window.alert("no text");
				errorMessage3 = "Error: no text in message";
				console.log("Z");
				result = false;
		} else {
				//window.alert("no text");
				errorHolder3.innerHTML =""; //Cleanup error messages
		}
		if (checkbox === false) {
			errorMessage4 = "Error: checbox must be checked";
			result = false;
		} else {
			errorHolder3.innerHTML =""; //Cleanup error messages
		}
		//show error message
		if (errorMessage1.length > 0) {
			errorHolder1.innerHTML = errorMessage1; 
			result = false;	
		} 

		if (errorMessage2.length > 0) { 
			errorHolder2.innerHTML = errorMessage2; 
			result = false;
		} 
		if (errorMessage3.length > 0) { 
			errorHolder3.innerHTML = errorMessage3;
			result = false;
		} 
		if (errorMessage4.length > 0) { 
			errorHolder4.innerHTML = errorMessage4;
			result = false;
		} 
		//condictions of form submit
		if ((errorMessage1.length = 0) && (errorMessage2.length = 0) && (errorMessage3.length = 0)) {
			errorHolder1.innerHTML = "";
			errorHolder2.innerHTML = "";
			errorHolder3.innerHTML = "";
			errorHolder4.innerHTML = "";
			result = true; 
		}
		//form submit
		if (result) {
			this.submit();
		}
  	});
});
//smooth scroll
document.addEventListener("DOMContentLoaded", function() {
	function scroll(toElement, speed) {
  		var windowObject = window;
  		var windowPosition = windowObject.pageYOffset;
  		var pointer = toElement.getAttribute('href').slice(1);
  		var element = document.getElementById(pointer);
  		var elementOffset = element.offsetTop;
  		var counter = setInterval(function() {
    		windowPosition;
    		if (windowPosition > elementOffset) {
      			windowObject.scrollTo(0, windowPosition);
      			windowPosition -= speed;
      			if (windowPosition <= elementOffset) { 
        			clearInterval(counter);
        			windowObject.scrollTo(0, elementOffset);
      			}
    		} else { // from top to bottom
      			windowObject.scrollTo(0, windowPosition);
      			windowPosition += speed;
				if (windowPosition >= elementOffset) {
        			clearInterval(counter);
        			windowObject.scrollTo(0, elementOffset);
      			}
    		}
		}, 1);
	}
	var navPointer = document.getElementsByClassName('nav__anchor');
	for (i = 0; i < navPointer.length; i++) {
  		navPointer[i].addEventListener('click', function(e) {
    		scroll(this, 12);
    		e.preventDefault();
  		});
	}
});