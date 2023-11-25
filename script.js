var slides = document.getElementsByClassName("slide");
var dots = document.getElementsByClassName("dot");

const setNextActiveSlide = () => {
  for (i = 0; i < slides.length; i++) {
    if (slides[i].classList.contains('active')) {
      if (slides[i].nextElementSibling == null) {
        slides[i].classList.remove('active');
        dots[i].classList.remove('active-dot');
        slides[0].className += ' active';
        dots[0].className += ' active-dot';
      } else {
        slides[i].classList.remove('active');
        dots[i].classList.remove('active-dot');
        slides[i].nextElementSibling.className += ' active';
        dots[i].nextElementSibling.className += ' active-dot';
        break;
      }
    }
  }
}

const setPrevActiveSlide = () => {
  for (i = 0; i < slides.length; i++) {
    if (slides[i].classList.contains('active')) {
      if (slides[i].previousElementSibling == null) {
        slides[i].classList.remove('active');
        dots[i].classList.remove('active-dot');
        slides[slides.length - 1].className += ' active';
        dots[slides.length - 1].className += ' active-dot';
        break;
      } else {
        slides[i].classList.remove('active');
        dots[i].classList.remove('active-dot');
        slides[i].previousElementSibling.className += ' active';
        dots[i].previousElementSibling.className += ' active-dot';
        break;
      }
    }
  }
}

const calcSlideMovement = (n, size) => {
  var pixels = n * size;
  var fullStyle = 'translateX(-' + pixels + 'px)';
  return fullStyle;
}

const nextSlide = () => {

  setNextActiveSlide();

  let activeSlide = document.getElementsByClassName('active');
  activeSlide = activeSlide[0].id;
  slides = [...slides];
  var slideIds = [];

  if (slides[0].id == activeSlide) {
    // if last slide ...
    for (j = 0; j < slides.length; j++) {
      slideIds.push(slides[j].id);
      var index = slideIds.indexOf(activeSlide);
      slides[j].style.transform = 'translateX(0px)';
    }
  } else {
    // if NOT last slide ...
    for (j = 0; j < slides.length; j++) {
      slideIds.push(slides[j].id);
      if (slides[j].id == activeSlide) {
        var index = slideIds.indexOf(activeSlide);
        slides[j].style.transform = calcSlideMovement(index, 500);
      }
    }
  }
}

const prevSlide = () => {

  setPrevActiveSlide();

  let activeSlide = document.getElementsByClassName('active');
  activeSlide = activeSlide[0].id;
  slides = [...slides];
  var slideIds = [];

  if (slides[0].id == activeSlide) {
    //if last slide ...
    for (j = 0; j < slides.length; j++) {
      slideIds.push(slides[j].id);
      var index = slideIds.indexOf(activeSlide);
      slides[j].style.transform = 'translateX(0px)';
    }
  } else {
    // if NOT last slide ...
    for (j = 0; j < slides.length; j++) {
      slideIds.push(slides[j].id);
    }

    var index = slideIds.indexOf(activeSlide);

    for (z = 0; z < slides.length; z++) {
      slides[z].style.transform = calcSlideMovement(index, 500);
    }
  }
}

const generateDots = () => {
  for (t = 0; t < slides.length; t++) {
    var dot = document.createElement('div');
    dot.className += 'dot';

    if (t == 0) {
      dot.className += ' active-dot';
    }

    const dotsContainer = document.getElementById('dot-container');
    dotsContainer.appendChild(dot);
  }
}

const setColors = () => {
  for (v = 0; v < slides.length; v++) {
    let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    slides[v].style.background = randomColor;
  }
}

generateDots();
setColors();

$("#next-slide").on("click", nextSlide);
$("#prev-slide").on("click", prevSlide);

setInterval(nextSlide, 5000);