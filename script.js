function bukaUcapan() {
  document.getElementById('section1').classList.remove('show');
  document.getElementById('section2').classList.add('show');

  const left = document.getElementById('leftCurtain');
  const right = document.getElementById('rightCurtain');
  left.style.transition = '1s';
  right.style.transition = '1s';
  left.style.transform = 'translateX(-100%)';
  right.style.transform = 'translateX(100%)';

  setTimeout(() => {
    document.getElementById('ucapanText').style.opacity = 1;
  }, 1000);
}

function keAlbum() {
  document.getElementById('section2').classList.remove('show');
  document.getElementById('section3').classList.add('show');
  updateIndicators();
}

// Manual Slider
let index = 0;

function showSlide(i) {
  const slides = document.getElementById('slides');
  const total = slides.children.length;
  if (i < 0) index = total - 1;
  else if (i >= total) index = 0;
  else index = i;
  slides.style.transform = `translateX(-${index * 100}%)`;
  updateIndicators();
}

function nextSlide() { showSlide(index + 1); }
function prevSlide() { showSlide(index - 1); }

// Indicators
function updateIndicators() {
  const dots = document.querySelectorAll('.dot');
  dots.forEach(dot => dot.classList.remove('active'));
  if (dots[index]) dots[index].classList.add('active');
}

// Touch support
let startX = 0;
document.getElementById('slides').addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});
document.getElementById('slides').addEventListener('touchend', (e) => {
  const endX = e.changedTouches[0].clientX;
  if (endX < startX - 50) nextSlide();
  if (endX > startX + 50) prevSlide();
});
