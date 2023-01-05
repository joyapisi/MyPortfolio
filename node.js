const navButton2 = document.querySelector(".nav-button2");
const navMenu = document.querySelector(".ul-nav");

navButton2.addEventListener('click', () => {
  navButton2.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('ul.ul-nav > li').forEach((n) => n.addEventListener('click', () => {
    navButton2.classList.remove('active');
    navMenu.classList.remove('active');
  }));
