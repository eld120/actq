/**
 * Main JavaScript for Accounteque Services
 */

document.addEventListener("DOMContentLoaded", () => {
  const pathName = window.location.pathname;
  const navLinks = document.querySelectorAll(".nav-link");
  const navbarToggler = document.querySelector(".navbar-toggler");
  const offcanvasElement = document.getElementById("navbarSupportedContent");

  // Navigation path mapping
  const paths = {
    "/services/": "Services",
    "/calculators/": "Financial Calculators",
    "/about/": "About Us",
    "/": "Home",
  };

  /**
   * Update active state of navigation links
   */
  const updateActiveNav = () => {
    // Normalize path (handle trailing slashes)
    const normalizedPath = pathName.endsWith("/") ? pathName : `${pathName}/`;
    const activeLabel = paths[normalizedPath] || paths[pathName];

    navLinks.forEach((link) => {
      const isCurrent = link.textContent.trim() === activeLabel;
      link.ariaCurrent = isCurrent ? "page" : "";
      link.classList.toggle("active", isCurrent);
    });
  };

  /**
   * Handle Bootstrap Offcanvas accessibility
   */
  const initNavbarAccessibility = () => {
    if (!offcanvasElement || !navbarToggler) return;

    offcanvasElement.addEventListener("shown.bs.offcanvas", () => {
      navbarToggler.setAttribute("aria-expanded", "true");
    });

    offcanvasElement.addEventListener("hidden.bs.offcanvas", () => {
      navbarToggler.setAttribute("aria-expanded", "false");
    });
  };

  updateActiveNav();
  initNavbarAccessibility();
});
