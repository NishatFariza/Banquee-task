const hamburgerButton = document.getElementById("hamberger-button");
const hamburgerCrossButton = document.querySelector(".mobile_menu__cross");

hamburgerButton.addEventListener("click", function () {
  const nav = document.querySelector(".mobile_menu");
  nav.classList.toggle("mobile_menu--open");
});

hamburgerCrossButton.addEventListener("click", function () {
  const nav = document.querySelector(".mobile_menu");
  nav.classList.toggle("mobile_menu--open");
});
