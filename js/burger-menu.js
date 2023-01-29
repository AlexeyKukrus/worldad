(function () {
  const burgerItem = document.querySelector('.burger');
  const menu = document.querySelector('.header-nav');
  const menuCloseItem = document.querySelector('.header__nav-close');
  const menuLinks = document.querySelectorAll('.header__link');
  burgerItem.addEventListener('click', () => {
    menu.classList.add('header__nav-active');
  });
  menuCloseItem.addEventListener('click', () => {
    menu.classList.remove('header__nav-active');
  });
  if (window.innerWidth <= 1024) {
    for(let i = 0; i < menuLinks.length; i += 1)  {
      menuLinks[i].addEventListener('click',  () => {
        menu.classList.remove('header__nav-active');
      });
    }
  }
}());