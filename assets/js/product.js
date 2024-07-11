/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  toggle.addEventListener("click", () => {
    // Add show-menu class to nav menu
    nav.classList.toggle("show-menu");

    // Add show-icon to show and hide the menu icon
    toggle.classList.toggle("show-icon");
  });
};

showMenu("nav-toggle", "nav-menu");

document.querySelectorAll(".product-card").forEach((card) => {
  let circles = card.querySelector(".circles");
  let images = card.querySelector(".main-images");

  circles.addEventListener("click", (e) => {
    let target = e.target;
    if (target.classList.contains("circle")) {
      circles.querySelector(".active").classList.remove("active");
      target.classList.add("active");
      images.querySelector(".active").classList.remove("active");
      images.querySelector(`.${target.classList[1]}`).classList.add("active");
    }
  });
});
