// src/team/synergy.js

export function checkFullBurst(teamArray) {
    if (!Array.isArray(teamArray) || teamArray.length === 0) {
        return { valid: false, message: "L'équipe est vide." };
    }

    const hasBurst1 = teamArray.some(char => char.burst === "I");
    const hasBurst2 = teamArray.some(char => char.burst === "II");
    const hasBurst3 = teamArray.some(char => char.burst === "III");

    if (hasBurst1 && hasBurst2 && hasBurst3) {
        return { valid: true, message: "Full Burst Ready!" };
    }

    let missing = [];
    if (!hasBurst1) missing.push("Burst I");
    if (!hasBurst2) missing.push("Burst II");
    if (!hasBurst3) missing.push("Burst III");

    return {
        valid: false,
        message: `Impossible de Full Burst. Manquant : ${missing.join(', ')}`
    };
}