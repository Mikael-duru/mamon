const menuOpen = document.querySelector("#header__openMenu");
const menuClose = document.querySelector("#header__closeMenu");
const navBar = document.querySelector(".header__navbar");
const themeToggle = document.querySelector('#header__themeToggle');
const body = document.querySelector('body')

// opens mobile menu
menuOpen.addEventListener('click', ()=> {
  navBar.classList.add('active');
});

// closes mobile menu
menuClose.addEventListener('click', ()=> {
  navBar.classList.remove('active');
});

// day and night theme toggle
themeToggle.addEventListener('click', ()=> {

  document.body.classList.toggle('dark-theme');

  if (document.body.classList.contains('dark-theme')) {
    themeToggle.src = "./image/sun.svg";
  } else {
    themeToggle.src = "./image/moon.svg";
  }

});
