/* script.js */

document.addEventListener('DOMContentLoaded', () => {
    console.log('Dashboard script chargé.');

    // --- Gestion du champ de fichier personnalisé ---
    const fileInput = document.getElementById('input-file');
    const fileUploadButton = document.querySelector('.file-upload-button');
    const fileNameSpan = document.querySelector('.file-name');

    if (fileInput && fileUploadButton && fileNameSpan) {
        fileInput.addEventListener('change', function() {
            if (this.files && this.files[0]) {
                fileNameSpan.textContent = this.files[0].name;
                fileUploadButton.textContent = 'Fichier sélectionné'; // Changer le texte du bouton
            } else {
                fileNameSpan.textContent = 'Aucun fichier sélectionné';
                fileUploadButton.textContent = 'Choisir un fichier'; // Réinitialiser le texte du bouton
            }
        });

        fileUploadButton.addEventListener('click', function(e) {
            e.preventDefault(); // Empêcher le comportement par défaut (si bouton dans un formulaire)
            fileInput.click(); // Simuler un clic sur l'input de fichier caché
        });
    }

    // --- Gestion du formulaire de configuration ---
    const inputForm = document.getElementById('input-form');
    const statusDisplay = document.getElementById('status-display');
    const dataTableContainer = document.getElementById('data-table-container');

    if (inputForm && statusDisplay && dataTableContainer) {
        inputForm.addEventListener('submit', async (event) => {
            event.preventDefault(); // Empêcher la soumission par défaut du formulaire

            statusDisplay.textContent = 'Scraping en cours... Veuillez patienter.';
            dataTableContainer.innerHTML = '<p>Chargement des données...</p>'; // Message de chargement

            // Récupérer les valeurs du formulaire
            const inputFile = fileInput.files[0]; // Fichier (sera traité côté serveur dans une vraie application)
            const maxListings = document.getElementById('max-listings').value;
            const filterCriteria = document.getElementById('filter-criteria').value;

            console.log('Fichier:', inputFile ? inputFile.name : 'Aucun fichier');
            console.log('Max Listings:', maxListings);
            console.log('Critères de Filtre:', filterCriteria);

            // Simuler un délai de scraping (remplacer par l'appel réel à votre script Python)
            await new Promise(resolve => setTimeout(resolve, 2000)); // 2 secondes de délai simulé

            statusDisplay.textContent = 'Scraping terminé. Affichage des résultats...';

            // --- Simuler des données fictives ---
            const fictitiousData = generateFictitiousData(); // Fonction pour générer des données fictives (voir ci-dessous)

            // --- Générer et afficher le tableau de données ---
            if (fictitiousData && fictitiousData.length > 0) {
                const dataTableHTML = createDataTable(fictitiousData);
                dataTableContainer.innerHTML = dataTableHTML;
            } else {
                dataTableContainer.innerHTML = '<p>Aucune donnée scrapée trouvée.</p>';
                statusDisplay.textContent = 'Scraping terminé, mais aucune donnée trouvée.';
            }

            statusDisplay.textContent = 'Prêt.'; // Réinitialiser le statut après affichage des résultats

        });
    }

    // --- Fonctions pour générer des données fictives et créer le tableau ---

    function generateFictitiousData() {
        // Exemple de données fictives (peut être plus élaboré)
        const data = [];
        const businessNames = ["Restaurant Le Gourmet", "Boulangerie Artisanale", "Garage Auto Expert", "Pharmacie Centrale", "Librairie Le Coin des Livres"];
        const addresses = ["12 Rue de la Paix, Paris", "5 Avenue des Champs-Élysées, Paris", "10 Boulevard Montmartre, Paris", "2 Rue du Louvre, Paris", "15 Quai de la Seine, Paris"];
        const websites = ["www.legourmet.fr", "www.boulangerieartisanale.com", "www.garageautoexpert.net", "www.pharmaciecentrale.fr", "www.lecoindeslivres.org"];
        const phoneNumbers = ["01 40 00 00 01", "01 40 00 00 02", "01 40 00 00 03", "01 40 00 00 04", "01 40 00 00 05"];
        const reviewCounts = [150, 220, 85, 310, 190];
        const ratings = [4.5, 4.8, 4.2, 4.9, 4.6];

        for (let i = 0; i < 5; i++) {
            data.push({
                Nom: businessNames[i],
                Adresse: addresses[i],
                Website: websites[i],
                Téléphone: phoneNumbers[i],
                "Nombre d'Avis": reviewCounts[i],
                Note: ratings[i].toFixed(1) + ' <i class="fas fa-star star-icon"></i>'.repeat(Math.round(ratings[i])) // Note avec étoiles
            });
        }
        return data;
    }

    function createDataTable(data) {
        let tableHTML = '<table class="data-table">';
        tableHTML += '<thead><tr>';
        // Créer les en-têtes à partir des clés du premier objet de données
        for (const key in data[0]) {
            tableHTML += `<th>${key}</th>`;
        }
        tableHTML += '</tr></thead><tbody>';

        // Ajouter les lignes de données
        data.forEach(rowData => {
            tableHTML += '<tr>';
            for (const key in rowData) {
                tableHTML += `<td>${rowData[key]}</td>`;
            }
            tableHTML += '</tr>';
        });

        tableHTML += '</tbody></table>';
        return tableHTML;
    }


    // --- Gestion des boutons d'export (simulé côté client) ---
    const exportCsvButton = document.getElementById('export-csv');
    const exportExcelButton = document.getElementById('export-excel');

    if (exportCsvButton && exportExcelButton) {
        exportCsvButton.addEventListener('click', () => {
            console.log('Exporter en CSV cliqué (fonctionnalité à implémenter côté serveur pour le téléchargement réel)');
            alert('Fonctionnalité d\'export CSV simulée. Dans une application réelle, cela déclencherait un téléchargement CSV.');
            // Dans une application réelle, vous enverriez les données au serveur pour générer et télécharger le CSV.
        });

        exportExcelButton.addEventListener('click', () => {
            console.log('Exporter en Excel cliqué (fonctionnalité à implémenter côté serveur)');
            alert('Fonctionnalité d\'export Excel simulée. Dans une application réelle, cela déclencherait un téléchargement Excel.');
            // Similaire à CSV, fonctionnalité d'export Excel côté serveur à implémenter.
        });
    }


});