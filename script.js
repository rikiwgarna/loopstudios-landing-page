const btnClose = document.querySelector('.btn-close');
const btnMenu = document.querySelector('.menu-icon');
const mobileMenu = document.querySelector('.mobile-menu');

btnMenu.addEventListener('click', () => {
  mobileMenu.classList.add('active');
});

btnClose.addEventListener('click', () => {
  mobileMenu.classList.remove('active');
});
