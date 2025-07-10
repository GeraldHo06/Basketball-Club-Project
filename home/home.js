document.querySelectorAll('.slideshow').forEach(slideshow => {
  const slides = slideshow.querySelectorAll('.gallerypic');
  let index = 0;

  function showNextSlide() {
    slides[index].classList.remove('start');
    index = (index + 1) % slides.length;
    slides[index].classList.add('start');
  }

  slides.forEach((slide, i) => {
    slide.classList.toggle('start', i === 0);
  });

  setInterval(showNextSlide, 3000);
});

