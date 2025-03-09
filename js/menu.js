// js/menu.js

document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.querySelector('.burger-menu');
    const nav = document.querySelector('.nav');

    if (burgerMenu && nav) {
        burgerMenu.addEventListener('click', function() {
            nav.classList.toggle('active'); // Ajoute/supprime la classe 'active' au menu
            burgerMenu.classList.toggle('is-active'); // Optionnel: Pour animer le burger menu (si CSS prévu)
        });
    }
});