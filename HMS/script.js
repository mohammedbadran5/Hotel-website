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