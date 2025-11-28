# nikke-utils

[![npm version](https://badge.fury.io/js/@sancti0n/nikke-utils.svg)](https://www.npmjs.com/package/@sancti0n/nikke-utils)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

## 🇬🇧 Description

The complete unofficial SDK (Software Development Kit) for developers working with the game **NIKKE: Goddess of Victory**. It provides utility functions for static data access, gacha simulation, and team synergy analysis.

## 🇫🇷 Description

Le kit de développement (SDK) non-officiel et complet pour les développeurs travaillant avec le jeu **NIKKE: Goddess of Victory**. Il fournit des fonctions utilitaires pour l'accès aux données statiques, la simulation de gacha et l'analyse de synergie d'équipe.

---

## 🇬🇧 Key Features / 🇫🇷 Fonctionnalités Clés

* **🇺🇸 Data Explorer:** Direct access to Nikke stats, Burst levels, and affiliations.
* **🇫🇷 Exploration des Données :** Accès direct aux statistiques, aux niveaux de Burst et aux affiliations des Nikkes.
* **🇺🇸 Gacha Simulator:** Simulation of pulls based on the official drop rates.
* **🇫🇷 Simulateur Gacha :** Simulation des tirages basée sur les taux de drop officiels.
* **🇺🇸 Team Synergy Checker:** Tool to validate team compositions (I-II-III Burst chains).
* **🇫🇷 Vérificateur de Synergie :** Outil pour valider la composition des équipes (chaînes de Burst I-II-III).

---

## 🇬🇧 Installation / 🇫🇷 Installation

🇬🇧 The package uses **ES Modules**. Ensure your project supports the `import` syntax.  
🇫🇷 Le package utilise les **ES Modules**. Assurez-vous que votre projet prend en charge la syntaxe `import`.

```bash
npm install @sancti0n/nikke-utils
```


🇬🇧 You must import the specific named functions you intend to use.  
🇫🇷 Vous devez importer les fonctions nommées spécifiques que vous souhaitez utiliser.

## 1. Data Management (Gestion des Données)
```js
import { getNikkeByName, getAllNikkes } from 'nikke-utils';

// Retrieve a specific character
// Récupérer un personnage spécifique
const rapi = getNikkeByName('Rapi');
console.log(`Rapi's rarity is ${rapi.rarity} with a Burst ${rapi.burst}.`); 

// Display the full list count
// Afficher le nombre total dans la liste
console.log(`Total Nikkes in database: ${getAllNikkes().length}`);
```

## 2. Gacha Simulation (Simulation de Tirage)
```js
import { pullTen } from 'nikke-utils';

// Simulate a 10-pull
// Simuler un tirage de 10
const results = pullTen();
console.log("Your 10 pulls:", results);

// Count the SSRs
// Compter les SSR
const ssrCount = results.filter(r => r === 'SSR').length;
console.log(`You obtained ${ssrCount} SSR!`);
```

## 3. Team Synergy Analysis (Analyse de Synergie d'Équipe)
```js
import { getNikkeByName, checkFullBurst } from 'nikke-utils';

const team = [
    getNikkeByName('Neon'),     // Burst I
    getNikkeByName('Anis'),     // Burst II
    getNikkeByName('Modernia')  // Burst III
];

const analysis = checkFullBurst(team);

console.log(`Team Status: ${analysis.message}`); 
// Expected output / Sortie attendue : "Full Burst Ready!"
```

## 🇬🇧 Detailed Function Documentation / 🇫🇷 Documentation Détaillée des Fonctions

| Fonction | 🇬🇧 Description | 🇫🇷 Description | 🇬🇧 Arguments / 🇫🇷 Arguments | 🇬🇧 Returns / 🇫🇷 Retourne |
| :--- | :--- | :--- | :--- | :--- |
| `getAllNikkes()` | Returns the complete array of Nikkes. | Retourne le tableau complet des Nikkes. | None / Aucun | `Array<Object>` |
| `getNikkeByName(name)` | Searches for a Nikke by name. | Cherche un Nikke par son nom. | `string` | `Object` or `undefined` / `Object` ou `undefined` |
| `pullOne()` | Simulates a single pull. | Simule un tirage simple. | None / Aucun | `string` ('SSR', 'SR' or 'R') |
| `pullTen()` | Simulates ten pulls. | Simule dix tirages. | None / Aucun | `Array<string>` |
| `checkFullBurst(teamArray)`| Validates if the team contains all three Burst levels. | Valide si l'équipe contient les trois niveaux de Burst. | `Array<Object>` (characters) / `Array<Object>` (personnages) | `Object` ({ valid: bool, message: string }) |