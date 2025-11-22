/* Smooth scroll */
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function (e) {
    if (this.hash) {
      e.preventDefault();
      document.querySelector(this.hash).scrollIntoView({ behavior: 'smooth' });
    }
  });
});

/* Typing Effect */
const phrases = ["Angular", "Good UI Skills", "Problem Solving"];
let currentPhraseIndex = 0;
const typedElement = document.getElementById("typing");

function typePhrase() {
  typedElement.textContent = phrases[currentPhraseIndex];
  currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
}

setInterval(typePhrase, 8000);
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal");
        observer.unobserve(entry.target); // animate only once
      }
    });
  },
  { threshold: 0.2 } // 20% visible triggers animation
);

sections.forEach(section => observer.observe(section));
const items = document.querySelectorAll(".work-item");

const observer2 = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.3 }
);

items.forEach((item) => observer2.observe(item));
// scroll top
const backToTopBtn = document.getElementById("backToTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopBtn.classList.remove("d-none");
  } else {
    backToTopBtn.classList.add("d-none");
  }
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
