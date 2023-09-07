const menu = document.querySelector('.header__section--list');
const menuItems = document.querySelectorAll('.header__section--menu');
const hamburger = document.querySelector('.header__menu');
const closeIcon = document.querySelector('.icon__close');
const menuIcon = document.querySelector('.icon__menu');
const principalTitle = document.querySelector('.container__principal--title');
const principalSubtitle = document.querySelector('.container__principal--subtitle');

function toggleMenu() {
  if (menu.classList.contains('showMenu')) {
    menu.classList.remove('showMenu');
    closeIcon.style.display = 'none';
    menuIcon.style.display = 'block';
    principalTitle.style.color = 'rgba(255, 255, 255, 1)';
    principalSubtitle.style.color = 'rgba(255, 255, 255, 1)';

  } else {
    menu.classList.add('showMenu');
    closeIcon.style.display = 'block';
    menuIcon.style.display = 'none';
    principalTitle.style.color = 'rgba(255, 255, 255, 0)';
    principalSubtitle.style.color = 'rgba(255, 255, 255, 0)';
    principalTitle.style.transition = 'color 1s'; 
    principalSubtitle.style.transition = 'color 1s';
  }
}

hamburger.addEventListener('click', toggleMenu);

menuItems.forEach(function (menuItem) {
  menuItem.addEventListener('click', toggleMenu);
});
