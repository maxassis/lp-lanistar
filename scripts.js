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


  const items = document.querySelectorAll(".section-mobile__item");

  function activeItem() {
    if (this.classList.contains("section-mobile__item--active")) {
      return;
    }
  
    items.forEach((item) => {
      item.classList.remove("section-mobile__item--active");
    });
  
    this.classList.add("section-mobile__item--active");
  }
  
  items.forEach((item) => {
    item.addEventListener("click", activeItem);
  })


const dialog = document.querySelector("dialog")
window.addEventListener('load', openModal);

function openModal() {
  body.style.overflow = "hidden";
  dialog.showModal()
}

function closeModal() {
  body.style.overflow = "auto";
  dialog.close()
}
