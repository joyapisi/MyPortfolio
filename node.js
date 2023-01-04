let navigataionBar = document.querySelector('.ul-nav');
let navigationList = document.querySelectorAll('navigationList');
let hamburgerButton = document.querySelector('.nav-button2');
let closeIcon= document.querySelector(".closeIcon");
// let menuIcon = document.querySelector(".menuIcon");

function hamburgerMenu() {
    if 
    (navigataionBar.classList.contains("showMenu")) {
    navigataionBar.classList.remove("showMenu");
    closeIcon.style.display = "none";
    hamburgerButton.style.display = "block";
  } else {
    navigataionBar.classList.add("showMenu");
    closeIcon.style.display = "block";
    hamburgerButton.style.display = "none";
 }
}
  
  hamburgerButton.addEventListener("click", hamburgerMenu);

  navigationList.forEach( 
    function(navigationList) { 
        navigationList.addEventListener("click", hamburgerMenu);
    }
  )