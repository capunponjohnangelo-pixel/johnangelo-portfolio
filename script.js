// Reveal animations on scroll
const revealEls = document.querySelectorAll('.exp-card, .tl-item, .why-card');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

revealEls.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(16px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});

// Nav background on scroll
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 8) {
    nav.style.boxShadow = '0 4px 24px rgba(8,40,35,0.06)';
  } else {
    nav.style.boxShadow = 'none';
  }
});

// Respect reduced motion
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  revealEls.forEach(el => {
    el.style.transition = 'none';
    el.style.opacity = '1';
    el.style.transform = 'none';
  });
}
