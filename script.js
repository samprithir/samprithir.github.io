const toggle = document.querySelector('.menu-toggle');
const links = document.querySelector('.nav-links');
const year = document.querySelector('#year');

year.textContent = new Date().getFullYear();

toggle.addEventListener('click', () => {
  const isOpen = links.classList.toggle('open');
  toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  toggle.textContent = isOpen ? '×' : '☰';
});

document.querySelectorAll('.nav-links a').forEach((link) => {
  link.addEventListener('click', () => {
    links.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.textContent = '☰';
  });
});
