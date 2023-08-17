document.addEventListener("DOMContentLoaded", function () {
    const nextButton = document.querySelector(".carousel-control-next");
  
    nextButton.addEventListener("click", function () {
      const carousel = document.querySelector("#chandelierCarousel");
      const currentActive = carousel.querySelector(".carousel-item.active");
      const nextItem = currentActive.nextElementSibling;
  
      if (nextItem && nextItem.classList.contains("carousel-item")) {
        currentActive.classList.remove("active");
        nextItem.classList.add("active");
      }
    });
  });
  