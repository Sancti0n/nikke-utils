// src/data/characters.js

const characters = [
    { id: 1, name: "Rapi", rarity: "SR", burst: "II", element: "Fire", manufacturer: "Elysion", class: "Attacker", weapon: "Assault Rifle", squad: "Counters", specialties: { 1: "Taunter" }, treasure: "no", dateAdded: "2022-04-11" },
    { id: 2, name: "Anis", rarity: "SR", burst: "II", element: "Iron", manufacturer: "Tetra Line", class: "Defender", weapon: "Rocket Launcher", squad: "Counters", specialties: { 1: "Buffer", 2: "Debuffer" }, treasure: "no", dateAdded: "2022-04-11" },
    { id: 3, name: "Neon", rarity: "SR", burst: "I", element: "Fire", manufacturer: "Elysion", class: "Supporter", weapon: "Shotgun", squad: "Counters", specialties: { 1: "Buffer" }, treasure: "no", dateAdded: "2022-04-11" },
    { id: 4, name: "Modernia", rarity: "SSR", burst: "III", element: "Fire", manufacturer: "Pilgrim", class: "Attacker", weapon: "Machine Gun", squad: "Heretic", specialties: { 1: "Buffer" }, treasure: "no", dateAdded: "2022-04-11" },
    { id: 5, name: "Helm", rarity: "SSR", burst: "III", element: "Water", manufacturer: "Elysion", class: "Attacker", weapon: "Sniper Rifle", squad: "Aegis", specialties: { 1: "Buffer", 2: "Healer" }, treasure: "yes", dateAdded: "2022-11-10" },
    { id: 6, name: "Admi", rarity: "SSR", burst: "III", element: "Wind", manufacturer: "Missilis Industry", class: "Supporter", weapon: "Sniper Rifle", squad: "Triangle", specialties: { 1: "Buffer" }, treasure: "no", dateAdded: "2022-04-11" },
    { id: 7, name: "Alice", rarity: "SSR", burst: "III", element: "Fire", manufacturer: "Tetra Line", class: "Attacker", weapon: "Sniper Rifle", squad: "Unlimited", specialties: { 1: "Buffer", 2: "Pierce" }, treasure: "no", dateAdded: "2022-04-11" },
    { id: 8, name: "Aria", rarity: "SSR", burst: "II", element: "Water", manufacturer: "Tetra Line", class: "Attacker", weapon: "Machine Gun", squad: "Prima Donna", specialties: { 1: "Buffer", 2: "Shielder" }, treasure: "no", dateAdded: "2022-04 - 11" },
    { id: 9, name: "Belorta", rarity: "SR", burst: "II", element: "Electric", manufacturer: "Tetra Line", class: "Attacker", weapon: "Rocket Launcher", squad: "The Carronades", specialties: { 1: "Buffer", 2: "Debuffer" }, treasure: "no", dateAdded: "2022-04-11" },
    { id: 10, name: "Brid", rarity: "SSR", burst: "III", element: "Water", manufacturer: "Elysion", class: "Attacker", weapon: "Assault Rifle", squad: "Infinity Rail", specialties: {}, treasure: "no", dateAdded: "2022-04-11" },
    { id: 11, name: "Centi", rarity: "SSR", burst: "II", element: "Iron", manufacturer: "Missilis Industry", class: "Defender", weapon: "Rocket Launcher", squad: "Mighty Tools", specialties: { 1: "Debuffer", 2: "Shielder" }, treasure: "no", dateAdded: "2022-04-11" },
    { id: 12, name: "Crow", rarity: "SSR", burst: "III", element: "Fire", manufacturer: "Missilis Industry", class: "Defender", weapon: "Sub Machine Gun", squad: "Exotic", specialties: { 1: "Debuffer" }, treasure: "no", dateAdded: "2022-04-11" },
    { id: 13, name: "Delta", rarity: "SR", burst: "II", element: "Wind", manufacturer: "Elysion", class: "Defender", weapon: "Sniper Rifle", squad: "The Scouts", specialties: { 1: "Decoy", 2: "Taunter" }, treasure: "no", dateAdded: "2022-04-11" },
    { id: 14, name: "Diesel", rarity: "SSR", burst: "II", element: "Wind", manufacturer: "Elysion", class: "Defender", weapon: "Machine Gun", squad: "Infinity Rail", specialties: { 1: "Buffer", 2: "Taunter" }, treasure: "yes", dateAdded: "2022-04-11" },
    { id: 15, name: "Dolla", rarity: "SSR", burst: "II", element: "Wind", manufacturer: "Tetra Line", class: "Supporter", weapon: "Sniper Rifle", squad: "Talentum", specialties: { 1: "Buffer", 2: "Burst CD Reduction" }, treasure: "no", dateAdded: "2022-04-11" },
    { id: 16, name: "Drake", rarity: "SSR", burst: "III", element: "Fire", manufacturer: "Missilis Industry", class: "Attacker", weapon: "Shotgun", squad: "Matis", specialties: { 1: "Buffer" }, treasure: "yes", dateAdded: "2022-04-11" },
];

export function getAllNikkes() {
    return characters;
}

export function getNikkeByName(name) {
    return characters.find(char => char.name.toLowerCase() === name.toLowerCase());
}