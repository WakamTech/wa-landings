// js/script.js

document.addEventListener('DOMContentLoaded', function() {
    // --- Menu Actif au Scroll (Optionnel, mais améliore l'UX) ---
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    function updateActiveNavLink() {
        let currentSection = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            if (pageYOffset >= sectionTop - sectionHeight / 4) { // Point d'activation un peu avant le haut de la section
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(currentSection)) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', updateActiveNavLink);
    updateActiveNavLink(); // Appel initial pour définir le lien actif au chargement


    // --- Animations Fade-In au Scroll (Exemple basique) ---
    const elementsToAnimate = document.querySelectorAll('.hero-content, .about-content, .products-section, .testimonials-section, .contact-section');

    function checkSlide() {
        elementsToAnimate.forEach(element => {
            const slideInAt = (window.scrollY + window.innerHeight) - element.offsetHeight / 2; // Point d'apparition au milieu de l'élément
            const elementBottom = element.offsetTop + element.offsetHeight;
            const isHalfShown = slideInAt > element.offsetTop;
            const isNotScrolledPast = window.scrollY < elementBottom;

            if (isHalfShown && isNotScrolledPast) {
                element.classList.add('slide-in'); // Ajoute une classe pour déclencher l'animation CSS
            } else {
                element.classList.remove('slide-in'); // Optionnel: Enlever la classe si on remonte (pour une animation répétée)
            }
        });
    }

    window.addEventListener('scroll', checkSlide);
    checkSlide(); // Appel initial pour vérifier au chargement
});