// animação ao rolar
const elements = document.querySelectorAll('.card, .grid span, .about, .contact');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});

elements.forEach(el => {
  el.classList.add('hidden');
  observer.observe(el);
});