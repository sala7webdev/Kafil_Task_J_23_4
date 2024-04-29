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
