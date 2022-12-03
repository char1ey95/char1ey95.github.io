const hamburger_btn = document.querySelector(".hamburger_btn")
const menus = document.querySelector(".header_navigation_menus_folded")

hamburger_btn.addEventListener("click", () => {
    if(menus.style.maxHeight !== "17.75rem"){
        menus.style.maxHeight = "17.75rem";
    } else {
        menus.style.maxHeight = "0rem"
    }
})