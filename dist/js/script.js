
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

/***************************
 * XX Main Functions XX
 ***************************/
const main = document.getElementsByTagName("main")[0]
const asideToggler = document.getElementById("asideToggler")
const asideElement = document.getElementById("aside")

// Aside Toggler
asideToggler.onclick = () => {
    if (asideElement.classList.contains("show")) {
        asideElement.classList.remove("show")
    } else {
        asideElement.classList.add("show")
    }
}

// Main Service Favorite icon clicked
function serviceFavoriteClicked(favoriteButton) {
    favoriteClicked(favoriteButton)
}


/***************************
 * XX Main Functions XX
 ***************************/


/********************
 * Global Functions
 *********************/
function favoriteClicked(favoriteContainer) {
    favoriteContainer.classList.toggle("checked");
}
/*************************
 * XX Global Functions XX
 *************************//********************
 * Slider Functions
 ********************/
//  initialize images slider
var swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
        //   type: "progressbar",
    },

});

const rightArrow = document.getElementById("rightArrow")
const leftArrow = document.getElementById("leftArrow")

// Slide to previous image
leftArrow.onclick = () => {
    swiper.slidePrev();
}

// Slide to next image
rightArrow.onclick = () => {
    swiper.slideNext()
}


/****************************
 * XX Slider Functions XX
 **************************/

/********************
 * Add-ons Functions
 *********************/
const selectAllAddonsToggler = document.getElementById("selectAllAddons");
const addlAddonsCheckboxes = document.querySelectorAll(".addon-checkbox");

// Select single add-on
function checkAddon(clickedCheckbox) {
    if (!clickedCheckbox.checked) {
        selectAllAddonsToggler.classList.remove("checked")
    } else {
        if (allAddonsChecked()) selectAllAddonsToggler.classList.add("checked")
    }
    updateAddonsIcons(clickedCheckbox)
}

// Select All Add-ons
selectAllAddonsToggler.onclick = () => {
    let currentCheckState = selectAllAddonsToggler.classList.contains("checked");
    // if selectAllAddonsToggler checked then uncheck All inputs
    updateAllCheckboxes(!currentCheckState);
    updateAddonsIcons()
    selectAllAddonsToggler.classList.toggle("checked");
}

/**
 * Change all add-ons inputs (chekboxes) based on checkedValue
 */
function updateAllCheckboxes(checkedValue) {
    // Get all add-ons checkboxes
    addlAddonsCheckboxes.forEach((addOn) => addOn.checked = checkedValue)
}

/**
 * Update addons icons empty or full (images) based on clicked 
 * checkbox or all checkboxes
 */
function updateAddonsIcons(checkboxElement = null) {
    if (checkboxElement) {
        updateCheckboxParentIcon(checkboxElement)
        return;
    }
    // Get all add-ons checkboxes
    addlAddonsCheckboxes.forEach((addOn) => {
        const parentElement = addOn.parentNode;
        if (addOn.checked) parentElement.classList.add("checked");
        else parentElement.classList.remove("checked");

    });
}

/**
 * Update Single checkbox Parent Icon
 */
function updateCheckboxParentIcon(checkboxElement) {
    const parentElement = checkboxElement.parentNode;
    if (checkboxElement.checked) {
        parentElement.classList.add("checked");
    } else {
        parentElement.classList.remove("checked");
    }
}


/***
 * Check if all Add-ons are checked
 */
function allAddonsChecked() {
    let allInputsChecked = true;
    addlAddonsCheckboxes.forEach((input) => {
        if (!input.checked) allInputsChecked = false
    })
    return allInputsChecked
}

/***************************
 * XX Add-ons Functions XX
 ***************************/
/******************************
 * Purchase Service Functions
 ******************************/

const increaseServiceCount = document.getElementById("increaseServiceCount");
const decreaseServiceCount = document.getElementById("decreaseServiceCount");
const countValueElement = document.getElementById("serviceCount");
const totalPriceElement = document.getElementById("totalPrice");
const servicePrice = 100;

// Increase Service Count by 1
increaseServiceCount.onclick = () => {
    updateServiceCount(getCurrentCountValue() + 1);
    updateTotalPrice()
}


// Decrease Service Count by 1 if current count > 1
decreaseServiceCount.onclick = () => {
    let currentValue = getCurrentCountValue();
    if (currentValue <= 1) return

    updateServiceCount(currentValue - 1);
    updateTotalPrice()
}


// Return the current purchase service count
function getCurrentCountValue() {
    return Number(countValueElement.innerText)
}

// Update Service Count with a given value
function updateServiceCount(value) {
    countValueElement.innerText = value
}

// Update total price by multipy current count by $100 (assuming 100$ per service)
function updateTotalPrice() {
    let totalPrice = getCurrentCountValue() * servicePrice;
    totalPriceElement.innerText = "$" + totalPrice
}


/***********************************
 * XX Purchase Service Functions XX
 ***********************************/
/********************************
 * Suggested Services Functions
 ********************************/
// handle when suggested service favorite icon clicked
function suggestedServiceFavoriteClicked(favoriteContainer) {
    favoriteClicked(favoriteContainer)

}
/**************************************
 * XX  Suggested Services Functions XX
 *************************************/

/**********************************
 * Seller Other Service Functions
 **********************************/
// handle when aside seller other service favorite icon clicked
function sellerServiceFavoriteClicked(favoriteContainer) {
    favoriteClicked(favoriteContainer)
}


/**************************************
 * XX Seller Other Service Functions XX
 **************************************/


