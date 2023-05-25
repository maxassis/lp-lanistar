const menuMobile = document.querySelector(".menu-mobile");
const openBtn = document.querySelector(".header__open");
const closeBtn = document.querySelector(".header__close");
const body  = document.querySelector("body");

function showMenu() {
    const isMenuMobileShown = menuMobile.classList.toggle("menu-mobile--show");
    const isCloseBtnDisplayed = isMenuMobileShown ? "block" : "none";
    const isOpenBtnDisplayed = isMenuMobileShown ? "none" : "block";
    const isBodyOverflowHidden = isMenuMobileShown ? "hidden" : "auto";
  
    closeBtn.style.display = isCloseBtnDisplayed;
    openBtn.style.display = isOpenBtnDisplayed;
    document.body.style.overflow = isBodyOverflowHidden;
  }