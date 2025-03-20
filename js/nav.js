// Function to load the navbar
function loadNavbar() {
    return fetch('/pages/comp/nav.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('nav-placeholder').innerHTML = data;
        })
        .catch(error => console.error('Error loading navigation:', error));
}

// Function to set the active class based on the current path
function setActiveClass() {
    const currentPath = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href && href.includes(currentPath)) {
            link.classList.add('active');
            // Check if the link is part of nav-second
            if (link.classList.contains('nav-second')) {
                const parentNavButton = link.closest('.nav-button');
                if (parentNavButton) {
                    const parentNavLink = parentNavButton.querySelector('.nav-link.nav-first');
                    if (parentNavLink) {
                        parentNavLink.classList.add('active');
                    }
                }
            }
        }
    });
}

// Load the navbar and set the active class once the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    loadNavbar().then(setActiveClass);
});
