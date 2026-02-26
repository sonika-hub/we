w// Ensure GSAP is loaded in your header
document.addEventListener("DOMContentLoaded", () => {
    // Reveal everything smoothly
    gsap.from(".hero .title", { 
        duration: 1.5, 
        y: 50, 
        opacity: 0, 
        ease: "expo.out" 
    });

    gsap.from(".glass-card, .artist-card", {
        scrollTrigger: ".glass-card",
        duration: 1,
        y: 100,
        opacity: 0,
        stagger: 0.2,
        ease: "power4.out"
    });

    // Dynamic Mouse-Follow Color Grading
    const blob = document.createElement("div");
    blob.style.cssText = "position:fixed; top:0; left:0; width:400px; height:400px; background:radial-gradient(circle, rgba(112,0,255,0.15) 0%, transparent 70%); pointer-events:none; z-index:-1;";
    document.body.appendChild(blob);

    window.addEventListener("mousemove", (e) => {
        gsap.to(blob, {
            x: e.clientX - 200,
            y: e.clientY - 200,
            duration: 1.5,
            ease: "power2.out"
        });
    });
});