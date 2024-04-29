
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
