/**
 * WILLIAMEST - Expert Front-End Logic
 * Targets: Responsive Nav, Scroll Animations, Gallery Music
 */

(function() {
    "use strict";

    const init = () => {
        const menuToggle = document.getElementById('mobile-menu');
        const navLinks = document.querySelector('.nav-links');

        // --- 1. ROBUST MOBILE NAV ---
        if (menuToggle && navLinks) {
            menuToggle.addEventListener('click', (e) => {
                e.preventDefault();
                const isOpen = navLinks.classList.toggle('enhanced-open');
                menuToggle.classList.toggle('active'); // Animates your hamburger bars
                document.body.style.overflow = isOpen ? 'hidden' : '';
            });

            // Close menu on link click
            navLinks.querySelectorAll('a').forEach(link => {
                link.onclick = () => {
                    navLinks.classList.remove('enhanced-open');
                    menuToggle.classList.remove('active');
                    document.body.style.overflow = '';
                };
            });
        }

        // --- 2. SCROLL REVEAL (Fixes "Missing Effects") ---
        const revealTargets = document.querySelectorAll('.series-img, .glass-card, .artist-card, .dump-item, .series-item');
        
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    // Optional: Trigger GSAP if script is loaded
                    if (window.gsap) {
                        gsap.to(entry.target, { opacity: 1, y: 0, duration: 1, ease: "power2.out" });
                    }
                }
            });
        }, { threshold: 0.1 });

        revealTargets.forEach(target => {
            target.classList.add('enhanced-fade-element');
            revealObserver.observe(target);
        });

        // --- 3. GALLERY MUSIC SYSTEM ---
        const galleryGrid = document.querySelector('.photo-dump-grid') || document.querySelector('.gallery-section');
        
        if (galleryGrid) {
            const bgMusic = new Audio('/audio/gallery-theme.mp3'); 
            bgMusic.loop = true;
            let musicUnlocked = false;

            const musicBtn = document.createElement('button');
            musicBtn.className = 'enhanced-music-btn';
            musicBtn.innerHTML = '<i class="fas fa-music"></i>';
            document.body.appendChild(musicBtn);

            // Play/Pause when entering/leaving gallery
            const musicObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting && musicUnlocked) {
                        bgMusic.play().catch(() => {});
                    } else {
                        bgMusic.pause();
                    }
                });
            }, { threshold: 0.05 });

            musicObserver.observe(galleryGrid);

            // Click to enable/disable (Required to bypass browser autoplay blocks)
            musicBtn.onclick = () => {
                musicUnlocked = !musicUnlocked;
                musicBtn.classList.toggle('playing', musicUnlocked);
                
                if (musicUnlocked) {
                    bgMusic.play();
                    musicBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
                } else {
                    bgMusic.pause();
                    musicBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
                }
            };
        }
    };

    // Ensure DOM is ready and handle route changes
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();