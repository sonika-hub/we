document.addEventListener("DOMContentLoaded", () => {
    
    // 1. HAMBURGER LOGIC (Always runs)
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
            // Toggle body scroll to prevent scrolling when menu is open
            document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
        });
    }

    // 2. ANIMATIONS (Only runs if the element is found on the page)
    const heroTitle = document.querySelector(".hero .title");
    if (heroTitle) {
        gsap.from(heroTitle, { duration: 1.5, y: 50, opacity: 0, ease: "expo.out" });
    }

    const cards = document.querySelectorAll(".glass-card, .artist-card");
    if (cards.length > 0) {
        gsap.from(cards, {
            scrollTrigger: ".glass-card",
            duration: 1,
            y: 100,
            opacity: 0,
            stagger: 0.2,
            ease: "power4.out"
        });
    }

    // 3. MOUSE BLOB (Always runs, background only)
    if (!document.getElementById("mouse-blob")) {
        const blob = document.createElement("div");
        blob.id = "mouse-blob";
        blob.style.cssText = "position:fixed; top:0; left:0; width:400px; height:400px; background:radial-gradient(circle, rgba(112,0,255,0.06) 0%, transparent 70%); pointer-events:none; z-index:-1;";
        document.body.appendChild(blob);

        window.addEventListener("mousemove", (e) => {
            gsap.to(blob, {
                x: e.clientX - 200,
                y: e.clientY - 200,
                duration: 1.5,
                ease: "power2.out"
            });
        });
    }
});
// Wrap in an IIFE to avoid conflicts with other scripts
(function() {
    const initNav = () => {
        const menuToggle = document.getElementById('mobile-menu');
        const navLinks = document.querySelector('.nav-links');

        // Check if elements exist
        if (!menuToggle || !navLinks) {
            console.warn("Navbar elements not found. Check your IDs.");
            return;
        }

        // Remove old listeners to prevent duplicates
        menuToggle.onclick = null;

        menuToggle.onclick = function(e) {
            e.preventDefault();
            this.classList.toggle('active');
            navLinks.classList.toggle('active');
            document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
        };
    };

    // Run on load
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initNav);
    } else {
        initNav();
    }
})();
document.addEventListener("DOMContentLoaded", () => {
    // 1. SELECT ELEMENTS
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    // 2. LOG TO CONSOLE (Check this in your browser F12)
    console.log("Menu Toggle Found:", menuToggle);
    console.log("Nav Links Found:", navLinks);

    // 3. ATTACH CLICK
    if (menuToggle && navLinks) {
        menuToggle.onclick = function(e) {
            console.log("Hamburger Clicked!"); // If this doesn't show in console, CSS is blocking the click
            menuToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
            
            // Prevent background scrolling
            document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
        };
    }
});