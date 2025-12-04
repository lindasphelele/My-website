// Wait until the page loads
document.addEventListener("DOMContentLoaded", () => {
  
  // Highlight active navigation link
  const navLinks = document.querySelectorAll("nav a");
  navLinks.forEach(link => {
    if (link.href === window.location.href) {
      link.classList.add("active");
    }
  });

  // Add to Cart button functionality
  const cartButtons = document.querySelectorAll(".product button");
  cartButtons.forEach(button => {
    button.addEventListener("click", () => {
      const productName = button.parentElement.querySelector("h3").textContent;
      alert(`${productName} has been added to your cart!`);
    });
  });

  // Smooth scroll for navigation links
  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      if (link.getAttribute("href").startsWith("#")) {
        e.preventDefault();
        const targetId = link.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      }
    });
  });

  // Hero button animation
  const shopBtn = document.querySelector(".shop-btn");
  if (shopBtn) {
    shopBtn.addEventListener("mouseover", () => {
      shopBtn.style.transform = "scale(1.1)";
      shopBtn.style.transition = "transform 0.3s ease";
    });
    shopBtn.addEventListener("mouseout", () => {
      shopBtn.style.transform = "scale(1)";
    });
  }

});
