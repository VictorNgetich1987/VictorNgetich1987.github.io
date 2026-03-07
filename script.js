
// Scroll reveal — adds 'show' class when sections enter the viewport
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('show');
      obs.unobserve(e.target); // stop watching once revealed
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade').forEach(el => obs.observe(el));
