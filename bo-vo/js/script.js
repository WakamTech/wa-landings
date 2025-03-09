document.addEventListener('DOMContentLoaded', function() {
    // Menu Hamburger
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    navToggle.addEventListener('click', function() {
        navLinks.classList.toggle('nav-links-open');
        navToggle.classList.toggle('nav-toggle-active'); // Optionnel: si vous voulez changer l'apparence du bouton burger quand le menu est ouvert
    });

    // Smooth Scroll pour les liens internes
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetElement = document.querySelector(this.getAttribute('href'));
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });

                // Fermer le menu mobile après avoir cliqué sur un lien (si menu ouvert)
                if (navLinks.classList.contains('nav-links-open')) {
                    navLinks.classList.remove('nav-links-open');
                    navToggle.classList.remove('nav-toggle-active'); // Si vous avez ajouté la classe 'nav-toggle-active'
                }
            }
        });
    });

    // Animation fade-in (exemple simple, à améliorer/étendre)
    const sections = document.querySelectorAll('.section'); // Sélectionner toutes les sections
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('section-visible'); // Ajoute une classe pour l'animation
                observer.unobserve(entry.target); // Une seule animation par section
            }
        });
    }, {
        threshold: 0.15 // Se déclenche quand 15% de la section est visible
    });

    sections.forEach(section => {
        section.classList.add('section-hidden'); // Classe initiale pour cacher
        observer.observe(section); // Observer chaque section
    });
});

// Optionnel: Fonction pour adoucir les couleurs (exemple pour le :hover des liens, nécessite potentiellement une librairie comme chroma.js pour une meilleure gestion des couleurs)
// Fonction simplifiée, pour un usage en production, préférez une librairie ou un préprocesseur CSS
function darken(color, percent) {
    // Fonction très simplifiée, à améliorer pour une gestion robuste des couleurs
    let num = parseInt(color.replace("#",""),16),
        amt = Math.round(2.55 * percent),
        R = (num >> 16) - amt,
        B = (num >> 8 & 0x00FF) - amt,
        G = (num & 0x0000FF) - amt;

    return "#" + (0x1000000 + (R<255?R<1?0:R:255)*0x10000 + (B<255?B<1?0:B:255)*0x100 + (G<255?G<1?0:G:255)).toString(16).slice(1);
}