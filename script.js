// Reveal on scroll
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      revealObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// Narrative toggles
function toggleNarrative(header) {
  const body = header.nextElementSibling;
  const toggle = header.querySelector('.narrative-toggle');
  const isOpen = body.classList.contains('open');
  body.classList.toggle('open', !isOpen);
  toggle.textContent = isOpen ? '[ expand ]' : '[ collapse ]';
}
