const pathName = window.location.pathname;
const navLinks = document.querySelectorAll(".nav-link");

const paths = {
  "/services/": "Services",
  "/calculators/": "Financial Calculators",
  "/about/": "About Us",
  "/": "Home",
};
const navbarToggler = document.querySelector(".navbar-toggler");
const offcanvasElement = document.getElementById("navbarSupportedContent");

if (offcanvasElement && navbarToggler) {
  offcanvasElement.addEventListener("shown.bs.offcanvas", () => {
    navbarToggler.setAttribute("aria-expanded", "true");
  });

  offcanvasElement.addEventListener("hidden.bs.offcanvas", () => {
    navbarToggler.setAttribute("aria-expanded", "false");
  });
}

document.addEventListener("DOMContentLoaded", () => {
  navLinks.forEach((element) => {
    if (element.textContent.trim() === paths[pathName]) {
      element.ariaCurrent = "page";
      element.classList.add("active");
    } else {
      element.ariaCurrent = "";
      element.classList.remove("active");
    }
  });
});
