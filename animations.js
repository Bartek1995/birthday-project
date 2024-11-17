const happySound = new Audio("sounds/happy-sound.mp3");
const wiiSound = new Audio("sounds/wii.mp3");

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

const arrow2 = document.querySelector('.arrow-2');
const section2 = document.querySelector('.section-2');
soundBtn.addEventListener('click', function() {
  happySound.play();
  arrow2.classList.remove('d-none')
  section2.classList.remove('d-none');
})

smileBtn.addEventListener('click', function() {
  wiiSound.play();
  document.querySelector('.arrow-3').classList.remove('d-none')
})
