
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
 *************************/