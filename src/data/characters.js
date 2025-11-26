// src/data/characters.js

const characters = [
    { id: 1, name: "Rapi", rarity: "SR", burst: "II", element: "Fire", manufacturer: "Elysion" },
    { id: 2, name: "Anis", rarity: "SR", burst: "II", element: "Electric", manufacturer: "Tetra" },
    { id: 3, name: "Neon", rarity: "SR", burst: "I", element: "Fire", manufacturer: "Elysion" },
    { id: 4, name: "Modernia", rarity: "SSR", burst: "III", element: "Fire", manufacturer: "Pilgrim" },
];

export function getAllNikkes() {
    return characters;
}

export function getNikkeByName(name) {
    return characters.find(char => char.name.toLowerCase() === name.toLowerCase());
}