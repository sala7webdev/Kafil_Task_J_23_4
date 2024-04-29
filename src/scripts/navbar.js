
/********************
 * Navbar Functions 
 ********************/

// Profile Menu Elements
const profileImageButton = document.getElementById("profileImageButton")
const profileMenu = document.getElementById("profileMenu")

// Navbar Menu Elements
const navbarMenusToggler = document.getElementById("navbarToggler");
const navbarMenusCloser = document.getElementById("navbarCloser");
const navbarMenusContainer = document.getElementById("navbarMenusContainer");

// Profile Menu 
profileImageButton.onclick = () => {
    if (profileMenu.classList.contains("show")) {
        profileMenu.classList.remove("show")

    } else {
        profileMenu.classList.add("show")
    }
}

// Open Navbar Menus on toggler click
navbarMenusToggler.onclick = () => {
    if (!navbarMenusContainer.classList.contains("show")) {
        navbarMenusContainer.classList.add("show")
    }
}

// Close Navbar Menus on closer click
navbarMenusCloser.onclick = () => {
    if (navbarMenusContainer.classList.contains("show")) {
        navbarMenusContainer.classList.remove("show")
    }
}


/***************************
 * XX Navbar Functions XX
 ***************************/
