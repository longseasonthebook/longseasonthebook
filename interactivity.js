// Progress Bar
window.onscroll = function () {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercent = (scrollTop / scrollHeight) * 100;
    document.getElementById("progress-bar").style.width = scrollPercent + "%";
};

// Back to Top Button Functionality
const backToTopButton = document.querySelector('.back-to-top');

// Show or hide the button based on scroll position
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) { // Show button after scrolling 300px
        backToTopButton.style.display = 'inline-flex';
    } else {
        backToTopButton.style.display = 'none';
    }
});

// Smooth scroll to top when the button is clicked
backToTopButton.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scroll animation
    });
});
