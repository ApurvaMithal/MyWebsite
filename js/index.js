var slideIndex=1;
// open tab page content

function openPg(evt, pgName) {
		  var i, tabcontent, tablinks;
		  tablinks = document.getElementsByClassName("tablinks");
		  var pg = "#"+pgName;
		  for (i = 0; i < tablinks.length; i++) {
			  var anchor = tablinks[i].querySelector("a").getAttribute("href");
			  if(anchor.trim() === pg.trim()){
				  tablinks[i].classList.add("active");
				  topFunction();
			  }
			  else{
		    	tablinks[i].className = tablinks[i].className.replace("active", "");
			  }
		  }
		}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


/* Hobbies page */


function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("thumbnail");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += "active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
