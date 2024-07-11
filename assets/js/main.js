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

// const COLOR_BTNS = document.querySelectorAll(".color");
// COLOR_BTNS.forEach((color) => {
//   color.addEventListener("click", () => {
//     let colorNameClass = color.className;
//     if (!color.classList.contains("active-color")) {
//       let colorName = colorNameClass.slice(
//         colorNameClass.indexOf("-") + 1,
//         colorNameClass.length
//       );
//       resetActiveBtns();
//       color.classList.add("active-color");
//       setNewColor(colorName);
//     }
//   });
// });

// // Resetting all color buttons
// function resetActiveBtns() {
//   COLOR_BTNS.forEach((color) => {
//     color.classList.remove("active-color");
//   });
// }

// // Set new color on the banner right and change text color
// function setNewColor(color) {
//   const bannerImage = document.querySelector(".banner-right img");
//   const bannerText = document.querySelector(".banner-left h2");

//   // Fade out the image
//   bannerImage.classList.add("fade-out");

//   // Wait for the fade-out effect to complete
//   setTimeout(() => {
//     // Change the image source
//     bannerImage.src = `assets/images/tshirt_${color}.png`;
//     bannerImage.classList.remove("fade-out");
//     bannerImage.classList.add("fade-in");

//     // Change the text color
//     switch (color) {
//       case "white":
//         bannerText.style.color = "#FFFFFF";
//         break;
//       case "black":
//         bannerText.style.color = "#000000";
//         break;
//       case "yellow":
//         bannerText.style.color = "#FFD700";
//         break;
//       case "blue":
//         bannerText.style.color = "#0000FF";
//         break;
//       case "red":
//         bannerText.style.color = "#FF0000";
//         break;
//       default:
//         bannerText.style.color = "#000000"; // Default color
//     }
//   }, 500);

//   // Remove fade-in class after the animation completes
//   setTimeout(() => {
//     bannerImage.classList.remove("fade-in");
//   }, 1000);
// }

const initSlider = () => {
  const imageList = document.querySelector(".slider-wrapper .image-list");
  const slideButtons = document.querySelectorAll(
    ".slider-wrapper .slide-button"
  );
  const sliderScrollbar = document.querySelector(
    ".container .slider-scrollbar"
  );
  const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar-thumb");
  const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

  // Handle scrollbar thumb drag
  scrollbarThumb.addEventListener("mousedown", (e) => {
    const startX = e.clientX;
    const thumbPosition = scrollbarThumb.offsetLeft;
    const maxThumbPosition =
      sliderScrollbar.getBoundingClientRect().width -
      scrollbarThumb.offsetWidth;

    // Update thumb position on mouse move
    const handleMouseMove = (e) => {
      const deltaX = e.clientX - startX;
      const newThumbPosition = thumbPosition + deltaX;

      // Ensure the scrollbar thumb stays within bounds
      const boundedPosition = Math.max(
        0,
        Math.min(maxThumbPosition, newThumbPosition)
      );
      const scrollPosition =
        (boundedPosition / maxThumbPosition) * maxScrollLeft;

      scrollbarThumb.style.left = `${boundedPosition}px`;
      imageList.scrollLeft = scrollPosition;
    };

    // Remove event listeners on mouse up
    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    // Add event listeners for drag interaction
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  });

  // Slide images according to the slide button clicks
  slideButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const direction = button.id === "prev-slide" ? -1 : 1;
      const scrollAmount = imageList.clientWidth * direction;
      imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });
  });

  // Show or hide slide buttons based on scroll position
  const handleSlideButtons = () => {
    slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "flex";
    slideButtons[1].style.display =
      imageList.scrollLeft >= maxScrollLeft ? "none" : "flex";
  };

  // Update scrollbar thumb position based on image scroll
  const updateScrollThumbPosition = () => {
    const scrollPosition = imageList.scrollLeft;
    const thumbPosition =
      (scrollPosition / maxScrollLeft) *
      (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
    scrollbarThumb.style.left = `${thumbPosition}px`;
  };

  // Call these two functions when image list scrolls
  imageList.addEventListener("scroll", () => {
    updateScrollThumbPosition();
    handleSlideButtons();
  });
};

window.addEventListener("resize", initSlider);
window.addEventListener("load", initSlider);

document.addEventListener("DOMContentLoaded", function () {
  const COLOR_BTNS = document.querySelectorAll(".color");
  let currentIndex = 0;

  // Function to simulate click on color buttons
  function simulateColorClick() {
    // Simulate click on the current color button
    COLOR_BTNS[currentIndex].click();

    // Update current index for the next iteration
    currentIndex = (currentIndex + 1) % COLOR_BTNS.length;
  }

  // Function to start automatic color change
  function startAutomaticColorChange(interval) {
    setInterval(simulateColorClick, interval);
  }

  // Start automatic color change with a 5-second interval
  startAutomaticColorChange(3000); // Change the interval as needed

  // Color change event listener
  COLOR_BTNS.forEach((color, index) => {
    color.addEventListener("click", () => {
      resetActiveBtns();
      color.classList.add("active-color");
      setNewColor(color.classList[1].slice(6)); // Extract color from class name
    });
  });

  // Function to reset all color buttons
  function resetActiveBtns() {
    COLOR_BTNS.forEach((color) => {
      color.classList.remove("active-color");
    });
  }

  // Set new color on the banner right and change text color
  function setNewColor(color) {
    const bannerImage = document.querySelector(".banner-right img");
    const bannerText = document.querySelector(".banner-left h2");

    // Change the image source
    bannerImage.src = `assets/images/tshirt_${color}.png`;


document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav__link");

  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      navLinks.forEach((link) => link.classList.remove("active"));
      this.classList.add("active");
    });
  });
});
