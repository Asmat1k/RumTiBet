export function toggleBurger() {
  const BURGER = document.querySelector('.header__menu-burger');
  const LINKS = document.querySelectorAll('.header-nav__link');
  const MENU = document.querySelector('.header__menu');
  const BODY = document.querySelector('body');
  // Для откртытия бургера
  BURGER.addEventListener('click', () => {
    BODY.classList.toggle('lock');
    MENU.classList.toggle('active');
    BURGER.classList.toggle('burger-active');
  });
  // Для закрытия бургера после клика по ссылке
  LINKS.forEach((link) => {
    link.addEventListener('click', () => {
      BODY.classList.remove('lock');
      MENU.classList.remove('active');
      BURGER.classList.remove('burger-active');
    });
  });
}
