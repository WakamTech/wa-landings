document.addEventListener('DOMContentLoaded', function() {
    // Menu Burger
    const burgerMenu = document.getElementById('burger-menu');
    const mainMenu = document.getElementById('main-menu');

    if (burgerMenu && mainMenu) {
        burgerMenu.addEventListener('click', () => {
            burgerMenu.classList.toggle('active');
            mainMenu.classList.toggle('active');
        });

        // Fermer le menu burger si on clique sur un lien (optionnel)
        mainMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                burgerMenu.classList.remove('active');
                mainMenu.classList.remove('active');
            });
        });
    }


    // Formulaire de Contact (exemple de validation basique et envoi simulé)
    const contactForm = document.getElementById('contactForm');
    const formMessageDiv = document.getElementById('form-message');

    if (contactForm && formMessageDiv) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Empêcher la soumission par défaut

            // Validation basique (ajouter des validations plus robustes si nécessaire)
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');

            if (!nameInput.value || !emailInput.value || !messageInput.value) {
                formMessageDiv.textContent = "Veuillez remplir tous les champs.";
                formMessageDiv.className = 'form-message error';
                return;
            }

            if (!isValidEmail(emailInput.value)) {
                formMessageDiv.textContent = "Adresse email invalide.";
                formMessageDiv.className = 'form-message error';
                return;
            }

            // Simulation d'envoi réussi (remplacer par un véritable envoi AJAX si besoin)
            setTimeout(() => {
                formMessageDiv.textContent = "Message envoyé avec succès !";
                formMessageDiv.className = 'form-message success';
                contactForm.reset(); // Réinitialiser le formulaire
            }, 1000); // Délai simulé de 1 seconde
        });
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});