var navmenu = document.getElementById('navlist');
navlist.style.maxHeight = '0px';

function togglemenu() {
  if (navlist.style.maxHeight == '0px') {
    navlist.style.maxHeight = '150px';
    // navlist.style.display = "block";
  } else {
    navlist.style.maxHeight = '0px';
    // navlist.style.display = "none";
  }
}


function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName('slides');
  var dots = document.getElementsByClassName('aroimg');
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].className += ' active';
}
