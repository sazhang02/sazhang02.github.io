var slide_index = 1;
var demo1_active = false;
var demo2_active = false;
var video_active = false;
show_slides(slide_index);

function plus_slides(n) {
  show_slides(slide_index += n);
}
function current_slide(n) {
  show_slides(slide_index = n);
}

function close_demo(n) {
  var figma = document.getElementsByClassName("figma");
  figma[n].style.display = "none";
  if (n == 0) {
    demo1_active = false;
  }
  else {
    demo2_active = false;
  }
}

function close_vid(n) {
  var video = document.getElementsByClassName("video");
  video[n].style.display = "none";
  video_active = false;
}

function close_all() {
  var figma = document.getElementsByClassName("figma");
  var video = document.getElementsByClassName("video");
  for (var i = 0; i < figma.length; i++) {
    figma[i].style.display = "none";
  }
  for (var i = 0; i < video.length; i++) {
    video[i].style.display = "none";
  }
  video_active = false;
  demo1_active = false;
  demo2_active = false;
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

function display_figma(n) {
  var figma = document.getElementsByClassName("figma");
  if (n == 0) {
    if (demo1_active) {
      figma[n].style.display = "none";
    }
    else {
      figma[n].style.display = "block";
    }
    demo1_active = !demo1_active;
  }
  else if (n == 1) {
    if (demo2_active) {
      figma[n].style.display = "none";
    }
    else {
      figma[n].style.display = "block";
    }
    demo2_active = !demo2_active;
  }
}
function display_video(n) {
  var video = document.getElementsByClassName("video");
  if (n == 0) {
    if (video_active) {
      video[0].style.display = "none";
    }
    else {
      video[0].style.display = "block";
    }
  }
  video_active = !video_active;
}

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

function reload_website() {
  location.reload();
}