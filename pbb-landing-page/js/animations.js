document.addEventListener('DOMContentLoaded', function() {
    // Animations au Scroll (Intersection Observer API pour la performance)
    const sectionsToAnimate = document.querySelectorAll('.section');

    const observerOptions = {
        threshold: 0.2 // Déclencher l'animation quand 20% de la section est visible
    };

    const sectionObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in'); // Ajouter une classe pour l'animation CSS
                sectionObserver.unobserve(entry.target); // Une seule animation par section
            }
        });
    }, observerOptions);

    sectionsToAnimate.forEach(section => {
        sectionObserver.observe(section);
    });
});