# nikke-utils

[![npm version](https://badge.fury.io/js/@sancti0n%2Fnikke-utils.svg)](https://www.npmjs.com/package/@sancti0n/nikke-utils)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub](https://img.shields.io/badge/Source-GitHub-181717?style=flat&logo=github&logoColor=white)](https://github.com/Sancti0n/nikke-utils)
[![GitLab](https://img.shields.io/badge/Miroir-GitLab-FC6D26?style=flat&logo=gitlab&logoColor=white)](https://gitlab.com/Sancti0n/nikke-utils)

---

## 🇬🇧 Description

The complete unofficial SDK (Software Development Kit) for developers working with the game **NIKKE: Goddess of Victory**. It provides utility functions for static data access, gacha simulation, and team synergy analysis.

## 🇫🇷 Description

Le kit de développement (SDK) non-officiel et complet pour les développeurs travaillant avec le jeu **NIKKE: Goddess of Victory**. Il fournit des fonctions utilitaires pour l'accès aux données statiques, la simulation de gacha et l'analyse de synergie d'équipe.

---

## 🇬🇧 Filtering demo / 🇫🇷 Démo du filtrage

https://Sancti0n.github.io/nikke-utils/

---

## 🇬🇧 Key Features / 🇫🇷 Fonctionnalités Clés

* **🇺🇸 Data Explorer:** Direct access to Nikke stats, Burst levels, and affiliations.
* **🇺🇸 Gacha Simulator:** Simulation of pulls based on the official drop rates.
* **🇺🇸 Team Synergy Checker:** Tool to validate team compositions (I-II-III Burst chains).

* **🇫🇷 Exploration des Données :** Accès direct aux statistiques, aux niveaux de Burst et aux affiliations des Nikkes.
* **🇫🇷 Simulateur Gacha :** Simulation des tirages basée sur les taux de drop officiels.
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
| `getAllSpecialties` | Returns an array of all specialities | Retourne un tableau de toutes les spécialités | `string` | `Array<string>` |
| `getAllNikkesWithThisSpecialtie` | Return all Nikkes with this specialty | Retourne toutes les Nikkes avec cette spécialité | `string` | `Array<string>` |
| `getAllNikkesWithThisField` | Returns all Nikkes with a key and a value | Retourne toutes les Nikkes avec une clé et une valeur | `string` | `Array<string>` |

## 🇬🇧 Specialties & Tags Reference Guide | 🇫🇷 Guide de Référence des Spécialités et Tags

🇬🇧 Below is the complete list of combat specialties and tags recognized by `nikke-utils`. Use these exact strings with `getAllNikkesWithThisSpecialtie()`.  
🇫🇷 Ci-dessous se trouve la liste complète des spécialités de combat et tags reconnus par `nikke-utils`. Utilisez ces chaînes exactes avec `getAllNikkesWithThisSpecialtie()`.

### Sustained Damage Meta (Méta Dégâts Continus)
* **`Sustained DoT Dealer`**
    * 🇬🇧 Applies Damage over Time (DoT) effects (Burn, Poison, Hacked, etc.) to enemies every second.
    * 🇫🇷 Inflige des dégâts continus (DoT) aux ennemis à intervalles réguliers (Brûlure, Poison, etc.).
* **`Sustained Self Buffer`**
    * 🇬🇧 Boosts own Sustained Damage stats (`Sustained Damage ▲`) to amplify personal DoT ticks.
    * 🇫🇷 Augmente sa propre statistique de dégâts continus pour démultiplier la puissance de ses propres tics.
* **`Sustained Team Buffer`**
    * 🇬🇧 Grants a team-wide or ally-specific `Sustained Damage ▲` buff to empower the whole team's DoT output.
    * 🇫🇷 Accorde un bonus de dégâts continus à toute l'équipe pour amplifier les tics de tous les alliés.
* **`Sustained Damage Reducer`**
    * 🇬🇧 Reduces incoming Sustained Damage (`Sustained Damage ▼`) inflicted by enemies on allies.
    * 🇫🇷 Réduit les dégâts continus subis par l'équipe (contre les brûlures ou poisons des boss).

### Special Damage Types (Types de Dégâts Spéciaux)
* **`Pierce`**
    * 🇬🇧 Attacks penetrate through multiple enemies/parts.
    * 🇫🇷 Transperce les ennemis et parties.
* **`True Damage`**
    * 🇬🇧 Deals raw damage bypassing enemy DEF.
    * 🇫🇷 Inflige des dégâts bruts ignorant la DEF.
* **`Distributed Damage`**
    * 🇬🇧 Deals damage divided equally among hit targets.
    * 🇫🇷 Inflige des dégâts répartis équitablement.
* **`Buffer Distributed Damage`**
    * 🇬🇧 Boosts allies' Distributed Damage output.
    * 🇫🇷 Augmente les dégâts répartis des alliés.

### Defense, Healing & Survival (Défense, Soins & Survie)
* **`Healer`**
    * 🇬🇧 Restores HP to self or allies.
    * 🇫🇷 Restaure les points de vie (HP) des alliés.
* **`Cover Heal`**
    * 🇬🇧 Restores or repairs Cover HP.
    * 🇫🇷 Régénère ou répare la couverture/l'abri.
* **`Shielder`**
    * 🇬🇧 Creates a shield absorbing incoming damage.
    * 🇫🇷 Génère un bouclier d'absorption.
* **`Cleanser`**
    * 🇬🇧 Dispels debuffs from allies.
    * 🇫🇷 Purifie et retire les malus de l'équipe.
* **`Revive`**
    * 🇬🇧 Resurrects a fallen ally during battle.
    * 🇫🇷 Réanime un allié tombé au combat.

### Buffs, Utility & Synergies (Support, Utilité & Synergies)
* **`Buffer`**
    * 🇬🇧 Increases stats or capabilities of allies.
    * 🇫🇷 Boost les statistiques des alliés.
* **`Debuffer`**
    * 🇬🇧 Applies negative status effects to enemies.
    * 🇫🇷 Applique des malus aux ennemis.
* **`Burst CD Reduction`**
    * 🇬🇧 Reduces Burst Skill cooldowns for faster rotations.
    * 🇫🇷 Réduit le temps de recharge des Bursts.
* **`Buff Time Alteration`**
    * 🇬🇧 Extends or modifies active buff durations.
    * 🇫🇷 Prolonge ou modifie la durée des buffs.
* **`Stack Oriented`**
    * 🇬🇧 Accumulates charges over time to unlock full power.
    * 🇫🇷 Accumule des charges (stacks) séquentiellement.
* **`Elemental DPS Self`**
    * 🇬🇧 Increases personal damage against weak element.
    * 🇫🇷 Boost ses dégâts élémentaires personnels.
* **`Elemental DPS Buffer`**
    * 🇬🇧 Grants elemental damage buffs to allies.
    * 🇫🇷 Confère des buffs élémentaires à l'équipe.

### Control & Aggro Management (Contrôle & Gestion du Terrain)
* **`Screen Wipe`**
    * 🇬🇧 Deals large AoE damage clearing all mobs instantly.
    * 🇫🇷 Dégâts de zone (AoE) nettoyant l'écran.
* **`Taunter`**
    * 🇬🇧 Forces enemies to target this unit.
    * 🇫🇷 Attire les tirs ennemis (provocation/agro).
* **`Decoy`**
    * 🇬🇧 Summons a targetable illusion to draw enemy attacks.
    * 🇫🇷 Invoque un leurre pour détourner les tirs.
* **`Crowd Controller`**
    * 🇬🇧 Restricts enemy actions or mobility (Stun, Repulsion).
    * 🇫🇷 Entrave les mouvements/actions des ennemis.

### HP Scaling & HP Buffs (Gestion & Conversion des PV)
* **`Max HP Buffer`**
    * 🇬🇧 Increases Max HP for allies or self.
    * 🇫🇷 Augmente les PV Max des alliés ou du lanceur.
* **`HP Scaling DPS`**
    * 🇬🇧 Converts Max HP into ATK or scales damage output based on Max HP.
    * 🇫🇷 Transforme les PV Max en ATK ou augmente ses dégâts en fonction des PV Max.