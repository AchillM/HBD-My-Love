function bukaUcapan() {
  document.getElementById('section1').classList.remove('show');
  document.getElementById('section2').classList.add('show');

  // Tirai animasi
  document.getElementById('leftCurtain').style.transition = '1s';
  document.getElementById('rightCurtain').style.transition = '1s';
  document.getElementById('leftCurtain').style.transform = 'translateX(-100%)';
  document.getElementById('rightCurtain').style.transform = 'translateX(100%)';

  setTimeout(() => {
    document.getElementById('ucapanText').style.opacity = 1;
  }, 1000);
}

function keAlbum() {
  document.getElementById('section2').classList.remove('show');
  document.getElementById('section3').classList.add('show');

  // Start slide show
  startSlider();
}

let index = 0;
function startSlider() {
  const slides = document.getElementById('slides');
  setInterval(() => {
    index = (index + 1) % 3;
    slides.style.transform = `translateX(-${index * 100}%)`;
  }, 3000);
}
