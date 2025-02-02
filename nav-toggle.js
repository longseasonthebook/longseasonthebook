document.addEventListener("DOMContentLoaded", function () {
    const navToggle = document.getElementById("nav-toggle");
    const nav = document.querySelector("nav");
    const overlay = document.createElement("div");
    const mainContent = document.querySelector("body");
    const menuItems = document.querySelectorAll("nav a");
    
    // Add overlay to the body
    overlay.className = "overlay";
    document.body.appendChild(overlay);

    // Show the nav toggle button after the page has loaded
    document.body.classList.add("loaded");

    // Toggle the menu and overlay visibility
    navToggle.addEventListener("click", function () {
        nav.classList.toggle("open");
        overlay.classList.toggle("visible");

    navToggle.addEventListener("click", function () {
        if (nav.classList.contains("open")) {
                mainContent.classList.add("dimmed");
        } else {
                mainContent.classList.remove("dimmed");
        }
        });
    });

    // Close menu when clicking outside
    overlay.addEventListener("click", function () {
        nav.classList.remove("open");
        overlay.classList.remove("visible");
    });
    menuItems.forEach(item => {
        item.addEventListener("click", function () {
            nav.classList.remove("open"); // Close the menu
            mainContent.classList.remove("dimmed"); // Restore opacity
        });
    });
});