// index.js

import { getAllNikkes } from './src/data/characters.js';

const nikkes = getAllNikkes();
// Génération dynamique des listes d'options sans doublons
const uniqueElements = [...new Set(nikkes.map(n => n.element))].sort();
const uniqueBursts = [...new Set(nikkes.map(n => n.burst))].sort();
const uniqueClasses = [...new Set(nikkes.map(n => n.class))].sort();
const uniqueWeapons = [...new Set(nikkes.map(n => n.weapon))].sort();
const uniqueCooldown = [...new Set(nikkes.map(n => Object.values(n.cooldown)[0]))].sort((a, b) => a - b);

// Spécialités : extraction des valeurs des objets {1: "...", 2: "..."}
const allSpecs = nikkes.flatMap(n => Object.values(n.specialties));
const uniqueSpecs = [...new Set(allSpecs)].sort();

// Fonction pour injecter les cases à cocher dans le HTML
function generateCheckboxGroup(containerId, items, className) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = items.map(item => `
    <label class="checkbox-label">
      <input type="checkbox" class="${className}" value="${item}">
      <span>${item}</span>
    </label>
  `).join('');
}

// Initialisation des filtres dans leurs conteneurs HTML respectifs
function initFilters() {
    generateCheckboxGroup("filter-element-container", uniqueElements, "filter-element");
    generateCheckboxGroup("filter-burst-container", uniqueBursts, "filter-burst");
    generateCheckboxGroup("filter-class-container", uniqueClasses, "filter-class");
    generateCheckboxGroup("filter-weapon-container", uniqueWeapons, "filter-weapon");
    generateCheckboxGroup("filter-specialty-container", uniqueSpecs, "filter-specialty");
    generateCheckboxGroup("filter-cooldown-container", uniqueCooldown, "filter-cooldown");

    // Ajout des écouteurs d'événements sur toutes les cases à cocher générées
    document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
        checkbox.addEventListener('change', applyAllFilters);
    });
}

// Fonction de filtrage globale
function applyAllFilters() {
    // Récupération des valeurs cochees
    const selectedElements = Array.from(document.querySelectorAll('.filter-element:checked')).map(cb => cb.value);
    const selectedBursts = Array.from(document.querySelectorAll('.filter-burst:checked')).map(cb => cb.value);
    const selectedClasses = Array.from(document.querySelectorAll('.filter-class:checked')).map(cb => cb.value);
    const selectedWeapons = Array.from(document.querySelectorAll('.filter-weapon:checked')).map(cb => cb.value);
    const selectedSpecs = Array.from(document.querySelectorAll('.filter-specialty:checked')).map(cb => cb.value);
    const selectedCooldown = Array.from(document.querySelectorAll('.filter-cooldown:checked')).map(cb => Number(cb.value));

    const treasureOnlyEl = document.getElementById('filter-treasure');
    const treasureOnly = treasureOnlyEl ? treasureOnlyEl.checked : false;

    // Filtrage du tableau de données
    const filteredNikkes = nikkes.filter(nikke => {
        // Condition Élément
        const matchElement = selectedElements.length === 0 || selectedElements.includes(nikke.element);

        // Condition Burst
        const matchBurst = selectedBursts.length === 0 || selectedBursts.includes(nikke.burst);

        // Condition Classe
        const matchClass = selectedClasses.length === 0 || selectedClasses.includes(nikke.class);

        // Condition Arme
        const matchWeapon = selectedWeapons.length === 0 || selectedWeapons.includes(nikke.weapon);

        // Condition Cooldown
        const matchCooldown = selectedCooldown.length === 0 || Object.values(nikke.cooldown).some(cd => {
            return selectedCooldown.includes(cd);
        });

        // Condition Treasure
        const matchTreasure = !treasureOnly || nikke.treasure !== "no";

        // Condition Spécialités
        const listNikkeSpecs = Object.values(nikke.specialties);
        const matchSpecialty = selectedSpecs.length === 0 || selectedSpecs.every(spec => listNikkeSpecs.includes(spec));

        return matchElement && matchBurst && matchClass && matchWeapon && matchTreasure && matchSpecialty && matchCooldown;
    });

    // Affichage des résultats filtrés
    renderTable(filteredNikkes);
}

// Rendu haute performance du tableau (mises à jour DOM instantanées)
function renderTable(data) {
    const tbody = document.getElementById("nikke-body");
    if (!tbody) return;

    const rowsHtml = data.map(nikke => {
        const imgUrl = `https://nkas.pages.dev/characters/si_${nikke.character_id}_s.png`;
        const specsList = Object.values(nikke.specialties).join(", ");
        const valueCooldown = Object.values(nikke.cooldown)[0];

        return `<tr><td>
            <img src="${imgUrl}" alt="${nikke.name}" width="40" height="40" 
            onerror="this.src='https://nkas.pages.dev/characters_missing_si/si_${nikke.character_id}_s.png';"
            />
            </td>
            <td><b>${nikke.name}</b></td>
            <td>${nikke.burst}</td>
            <td>${nikke.element}</td>
            <td>${nikke.class}</td>
            <td>${nikke.weapon}</td>
            <td>${nikke.treasure == "no" ? "" : "Oui"}</td>
            <td>${specsList}</td>
            <td>${valueCooldown}</td>
            <td>${nikke.reEnterBurstSkill == "no" ? "" : "Oui"}</td>
            </tr>`;
    }).join("");

    tbody.innerHTML = rowsHtml;
}

// Lancement au chargement de la page
document.addEventListener("DOMContentLoaded", () => {
    initFilters();
    renderTable(nikkes);
});