const happySound = new Audio("sounds/happy-sound.mp3");
const wiiSound = new Audio("sounds/wii.mp3");
const ducksSound = new Audio("sounds/ducks.mp3");
const miauSound = new Audio("sounds/miau.mp3");
// Wrap every letter in a span for the first text
var textWrapper1 = document.querySelector('.ml2');
textWrapper1.innerHTML = textWrapper1.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.text-1 .letter',
    scale: [4, 1],
    opacity: [0, 1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 350,
    delay: (el, i) => 70 * i
  });

// Wrap every letter in a span for the second text
var textWrapper2 = document.querySelector('.ml3');
textWrapper2.innerHTML = textWrapper2.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

// Function to trigger animation for the second text
function animateText() {
  anime.timeline({loop: false})
    .add({
      targets: '.ml3 .letter',
      scale: [4, 1],
      opacity: [0, 1],
      translateZ: 0,
      easing: "easeOutExpo",
      duration: 350,
      delay: (el, i) => 70 * i
    });
}

// Intersection Observer to detect when .ml3 is in view
var observer = new IntersectionObserver(function(entries) {
  if (entries[0].isIntersecting) {
    animateText();
    observer.disconnect(); // To ensure the animation runs only once
  }
}, { threshold: 0.1 }); // Trigger when 10% of the element is in view

observer.observe(document.querySelector('.ml3'));


const soundBtn = document.querySelector('#sound-btn');
const smileBtn = document.querySelector('#smile-btn');
const ducksBtn = document.querySelector('#ducks-btn');
const silentBtn = document.querySelector('#silent-btn');
const wishesBtn = document.querySelector('#wishes-btn');

const arrow2 = document.querySelector('.arrow-2');
const arrow4 = document.querySelector('.arrow-4');
const arrow5 = document.querySelector('.arrow-5');
const section2 = document.querySelector('.section-2');
const section3 = document.querySelector('.section-3');
const section4 = document.querySelector('.section-4');
const section5 = document.querySelector('.section-5');
const section6 = document.querySelector('.section-6');

soundBtn.addEventListener('click', function() {
  happySound.play();
  arrow2.classList.remove('d-none')
  section2.classList.remove('d-none');
})

smileBtn.addEventListener('click', function() {
  wiiSound.play();
  document.querySelector('.arrow-3').classList.remove('d-none')
  section3.classList.remove('d-none');
})

ducksBtn.addEventListener('click', function() {
  ducksSound.play();
  document.querySelector('.arrow-4').classList.remove('d-none')
  section4.classList.remove('d-none')
})


silentBtn.addEventListener('click', function() {
  if (!ducksSound.paused) {
    alert('Halo halo, dalej gdaczemy, proszę dać nam skończyć !');
  } else {
    document.querySelector('.arrow-5').classList.remove('d-none')
    section5.classList.remove('d-none')
  }
});

wishesBtn.addEventListener('click', function() {
  section6.classList.remove('d-none')
  section6.scrollIntoView({ behavior: 'smooth' });
  miauSound.play()
})