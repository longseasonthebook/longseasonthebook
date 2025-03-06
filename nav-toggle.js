document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-menu");
    const overlay = document.querySelector(".overlay");
    const navLinks = document.querySelectorAll(".nav-menu a");

    // Function to open menu
    function openMenu() {
        navMenu.classList.add("active");
        overlay.classList.add("active");
    }

    // Function to close menu
    function closeMenu() {
        navMenu.classList.remove("active");
        overlay.classList.remove("active");
    }

    // Toggle menu when button is clicked
    menuToggle.addEventListener("click", () => {
        if (navMenu.classList.contains("active")) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    // Close menu when clicking on a nav item
    navLinks.forEach(link => {
        link.addEventListener("click", closeMenu);
    });

    // Close menu when clicking outside the nav
    overlay.addEventListener("click", closeMenu);

    // Ensure menu is closed on page load
    closeMenu();
});
