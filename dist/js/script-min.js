const profileImageButton=document.getElementById("profileImageButton"),profileMenu=document.getElementById("profileMenu"),navbarMenusToggler=document.getElementById("navbarToggler"),navbarMenusCloser=document.getElementById("navbarCloser"),navbarMenusContainer=document.getElementById("navbarMenusContainer");profileImageButton.onclick=(()=>{profileMenu.classList.contains("show")?profileMenu.classList.remove("show"):profileMenu.classList.add("show")}),navbarMenusToggler.onclick=(()=>{navbarMenusContainer.classList.contains("show")||navbarMenusContainer.classList.add("show")}),navbarMenusCloser.onclick=(()=>{navbarMenusContainer.classList.contains("show")&&navbarMenusContainer.classList.remove("show")});const main=document.getElementsByTagName("main")[0],asideToggler=document.getElementById("asideToggler"),asideElement=document.getElementById("aside");function serviceFavoriteClicked(e){favoriteClicked(e)}function favoriteClicked(e){e.classList.toggle("checked")}asideToggler.onclick=(()=>{asideElement.classList.contains("show")?asideElement.classList.remove("show"):asideElement.classList.add("show")});var swiper=new Swiper(".mySwiper",{pagination:{el:".swiper-pagination"}});const rightArrow=document.getElementById("rightArrow"),leftArrow=document.getElementById("leftArrow");leftArrow.onclick=(()=>{swiper.slidePrev()}),rightArrow.onclick=(()=>{swiper.slideNext()});const selectAllAddonsToggler=document.getElementById("selectAllAddons"),addlAddonsCheckboxes=document.querySelectorAll(".addon-checkbox");function checkAddon(e){e.checked?allAddonsChecked()&&selectAllAddonsToggler.classList.add("checked"):selectAllAddonsToggler.classList.remove("checked"),updateAddonsIcons(e)}function updateAllCheckboxes(e){addlAddonsCheckboxes.forEach(n=>n.checked=e)}function updateAddonsIcons(e=null){e?updateCheckboxParentIcon(e):addlAddonsCheckboxes.forEach(e=>{const n=e.parentNode;e.checked?n.classList.add("checked"):n.classList.remove("checked")})}function updateCheckboxParentIcon(e){const n=e.parentNode;e.checked?n.classList.add("checked"):n.classList.remove("checked")}function allAddonsChecked(){let e=!0;return addlAddonsCheckboxes.forEach(n=>{n.checked||(e=!1)}),e}selectAllAddonsToggler.onclick=(()=>{updateAllCheckboxes(!selectAllAddonsToggler.classList.contains("checked")),updateAddonsIcons(),selectAllAddonsToggler.classList.toggle("checked")});const increaseServiceCount=document.getElementById("increaseServiceCount"),decreaseServiceCount=document.getElementById("decreaseServiceCount"),countValueElement=document.getElementById("serviceCount"),totalPriceElement=document.getElementById("totalPrice"),servicePrice=100;function getCurrentCountValue(){return Number(countValueElement.innerText)}function updateServiceCount(e){countValueElement.innerText=e}function updateTotalPrice(){let e=getCurrentCountValue()*servicePrice;totalPriceElement.innerText="$"+e}function suggestedServiceFavoriteClicked(e){favoriteClicked(e)}function sellerServiceFavoriteClicked(e){favoriteClicked(e)}increaseServiceCount.onclick=(()=>{updateServiceCount(getCurrentCountValue()+1),updateTotalPrice()}),decreaseServiceCount.onclick=(()=>{let e=getCurrentCountValue();e<=1||(updateServiceCount(e-1),updateTotalPrice())});