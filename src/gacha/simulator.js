// src/gacha/simulator.js

const RATES = {
    SSR: 0.04, // 4%
    SR: 0.43,  // 43%
    R: 0.53    // 53%
};

export function pullOne() {
    const rand = Math.random();

    if (rand < RATES.SSR) return "SSR";
    if (rand < RATES.SSR + RATES.SR) return "SR";
    return "R";
}

export function pullTen() {
    const results = [];
    for (let i = 0; i < 10; i++) {
        results.push(pullOne());
    }
    return results;
}