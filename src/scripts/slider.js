/********************
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
