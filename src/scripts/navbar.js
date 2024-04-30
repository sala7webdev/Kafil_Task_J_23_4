
/********************
 * Navbar Functions 
 ********************/

// Profile Menu Elements
const profileImageButton = document.getElementById("profileImageButton")
const profileMenu = document.getElementById("profileMenu")

// Notification Menu Elements
const notificationIconButton = document.getElementById("notificationsIconButton")
const notificationMenu = document.getElementById("notificationsMenu")

// Messages Menu Elements
const messagesIconButton = document.getElementById("messagesIconButton")
const messagesMenu = document.getElementById("messagesMenu")

// Navbar Menu Elements
const navbarMenusToggler = document.getElementById("navbarToggler");
const navbarMenusCloser = document.getElementById("navbarCloser");
const navbarMenusContainer = document.getElementById("navbarMenusContainer");

// hide all navbar icons menus
function hideAllNavbarIconMenus() {
    const allIconsMenus = document.querySelectorAll(".navbar-icon-menu-container");
    allIconsMenus.forEach(menu => { menu.classList.remove("show") });
}

// Profile Menu 
profileImageButton.onclick = () => {
    if (profileMenu.classList.contains("show")) {
        profileMenu.classList.remove("show")
    } else {
        hideAllNavbarIconMenus();
        profileMenu.classList.add("show")
    }
}

// Notification Menu 
notificationIconButton.onclick = () => {

    if (notificationMenu.classList.contains("show")) {
        notificationMenu.classList.remove("show")

    } else {
        hideAllNavbarIconMenus();
        notificationMenu.classList.add("show")
    }
}

// Notification Menu 
messagesIconButton.onclick = () => {

    if (messagesMenu.classList.contains("show")) {
        messagesMenu.classList.remove("show")

    } else {
        hideAllNavbarIconMenus();
        messagesMenu.classList.add("show")
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
