const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('nav');

toggle.addEventListener('click', () => {
  nav.classList.toggle('show');
});

// Close menu when clicking a link (mobile)
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('show');
  });
});
