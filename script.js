// Theme toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark');
  themeToggle.textContent = document.documentElement.classList.contains('dark') ? '☀️' : '🌙';
});

// Scroll reveal using IntersectionObserver
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealEls.forEach(el => io.observe(el));

// Sticky header shadow on scroll
window.addEventListener('scroll', () => {
  const header = document.querySelector('.site-header');
  if (window.scrollY > 12) header.style.boxShadow = '0 6px 20px rgba(2,6,23,0.08)';
  else header.style.boxShadow = 'none';
});

// Small tweak: keep hero overlay centered nicely on small screens
function adjustHero() {
  const heroInner = document.querySelector('.hero-inner');
  if (!heroInner) return;
  if (window.innerWidth < 700) heroInner.style.transform = 'translateY(0)';
  else heroInner.style.transform = 'translateY(-6%)';
}
window.addEventListener('resize', adjustHero);
adjustHero();

// accessibility: keyboard focus outline for buttons/links
document.addEventListener('keydown', (e) => {
  if (e.key === 'Tab') document.documentElement.classList.add('user-is-tabbing');
});
