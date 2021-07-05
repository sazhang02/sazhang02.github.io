
var slide_index = 1;
var demo1_active = false;
show_slides(slide_index);

function plus_slides(n) {
  show_slides(slide_index += n);
}
function current_slide(n) {
  show_slides(slide_index = n);
}

function show_slides(n) {
  var i;
  var slides = document.getElementsByClassName("projects");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slide_index = 1 }
  if (n < 1) { slide_index = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slide_index - 1].style.display = "block";
  dots[slide_index - 1].className += " active";
}

function display_insta(n) {
  var figma = document.getElementsByClassName("figma");
  if (n == 0) {
    if (demo1_active) {
      figma[0].style.display = "none";
    }
    else {
      figma[0].style.display = "block";
    }

  }
  demo1_active = !demo1_active;
}