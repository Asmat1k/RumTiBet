export function toggleBurger() {
  const BURGER = document.querySelector('.header__menu-burger');
  const MENU = document.querySelector('.header__menu');
  const BODY = document.querySelector('body');
  BURGER.addEventListener('click', () => {
    BODY.classList.toggle('lock');
    MENU.classList.toggle('active');
    BURGER.classList.toggle('burger-active');
  });
}
