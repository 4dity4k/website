// mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
  const btn = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('mobile-menu');
  const open = document.getElementById('menu-open');
  const close = document.getElementById('menu-close');
  if (btn) {
    btn.addEventListener('click', () => {
      menu.classList.toggle('hidden');
      open.classList.toggle('hidden');
      close.classList.toggle('hidden');
    });
  }

  // simple testimonial rotator
  const slides = document.querySelectorAll('#testimonial-slider blockquote');
  let i = 0;
  if (slides.length > 1) {
    setInterval(() => {
      slides.forEach((s, idx) => s.classList.toggle('hidden', idx !== i));
      i = (i + 1) % slides.length;
    }, 4000);
  }
});
