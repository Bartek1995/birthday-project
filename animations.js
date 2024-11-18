const happySound = new Audio("sounds/happy-sound.mp3");
const wiiSound = new Audio("sounds/wii.mp3");
const ducksSound = new Audio("sounds/ducks.mp3");
const miauSound = new Audio("sounds/miau.mp3");

function animateText(selector, callback) {
  var elements = document.querySelectorAll(selector);
  elements.forEach(function(element) {
      element.innerHTML = element.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
      
      anime.timeline({loop: false})
          .add({
              targets: selector + ' .letter',
              opacity: [0, 1],
              easing: "easeInOutQuad",
              duration: 200,  // Przyspieszenie animacji
              offset: '-=775',
              delay: function(el, i) {
                  return 50 * (i + 1);  // Przyspieszenie opóźnienia
              },
              complete: callback // Wywołaj callback po zakończeniu animacji
          });
  });
}

// Funkcja do uruchamiania animacji gdy element jest widoczny
function setupAnimationObserver(selector, callback) {
  var observer = new IntersectionObserver(function(entries) {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              animateText(selector, callback);
              observer.unobserve(entry.target);  // Odłączenie obserwatora po uruchomieniu animacji
          }
      });
  }, { threshold: 0.1 });  // Uruchomienie gdy 10% elementu jest widoczne

  document.querySelectorAll(selector).forEach(element => {
      observer.observe(element);
  });
}

// Dodajemy callback do setupAnimationObserver dla .ml4
setupAnimationObserver('.ml2');
setupAnimationObserver('.ml3');
setupAnimationObserver('.ml4', function() {
  document.getElementById('check-me').classList.remove('d-none');
});


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