let navigataionBar = document.querySelector('.ul-nav');
let navigationMenuItems = document.querySelectorAll('navigationList');
let hamburgerButton = document.querySelector('.nav-button2');
let closeIcon= document.querySelector(".closeIcon");
let menuIcon = document.querySelector(".menuIcon");

// hamburgerButton.addEventListener('click', function (event) {
// navigataionBar.classList.toggle('active')
// });

function hamburgerMenu() {
    if (navigataionBar.classList.contains("showMenu")) {
    navigataionBar.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
    } 
    else {
    navigataionBar.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
    }
  }
  
  hamburgerButton.addEventListener("click", hamburgerMenu);

  navigationMenuItems.forEach( 
    function(navigationList) { 
        navigationList.addEventListener("click", hamburgerMenu);
    }
  )