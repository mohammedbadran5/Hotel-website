document.addEventListener("DOMContentLoaded", function() {
    const backToTopArrow = document.getElementById("back-to-top-arrow");

    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 100) {
        // Show the arrow when scrolling down
        backToTopArrow.style.display = "block";
      } else {
        // Hide the arrow when at the top
        backToTopArrow.style.display = "none";
      }
    });

    backToTopArrow.addEventListener("click", () => {
      // Smooth scroll to the top
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
  document.addEventListener("DOMContentLoaded", function() {
    const scrollDownButton = document.getElementById("scroll-down");
    const image = document.getElementById("image");
  
    scrollDownButton.addEventListener("click", function() {
      // Scroll down by 50px when the arrow is clicked
      image.scrollBy({
        top: 150,
        behavior: "smooth"
      });
    });
  });
