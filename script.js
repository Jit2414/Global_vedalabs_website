const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');
const dropdown = document.querySelector('.nav-dropdown');
const dropdownTrigger = document.querySelector('.dropdown-trigger');

menuToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

dropdownTrigger.addEventListener('click', () => {
  const isOpen = dropdown.classList.toggle('open');
  dropdownTrigger.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('.main-nav a').forEach(link => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    dropdown.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});
