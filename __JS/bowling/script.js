const assert = require("node:assert");

function calculerScore(lancers) {
    let dernierLancer = 0;
    let totalScore = 0;
    let spare = false;

    for (let lancer of lancers) {
        totalScore += lancer;
        if (spare === true){
            totalScore += lancer;
            spare = false;
        }

        if (dernierLancer + lancer === 10){
            spare = true;
        }
        dernierLancer = lancer;
    }
    return totalScore;
}
function calculerScoreTest() {
    const zeroQuille = [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ];
    const uneQuille = [
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    ];
    const plusieursQuilles = [
        5, 3, 7, 2, 4, 1, 9, 0, 1, 4, 2, 0, 7, 2, 0, 9, 2, 4, 5, 3,
    ]
    const spareQuilles = [
        5, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    ]
    const strikeQuilles = [
        10, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 8,
    ]
    const scoreAttenduZeroQuille = 0;
    const scoreAttenduUneQuille = 20;
    const scoreMaxAttenduQuille = 72;
    const scoreAttenduSpareQuille = 30;
    const scoreAttenduStrikeQuille = 35;

    try {
        assert.strictEqual(
            calculerScore(zeroQuille),
            scoreAttenduZeroQuille,
            "20 lancés de 0 quille tombé donnent 0 points"
        );
        assert.strictEqual(
            calculerScore(uneQuille),
            scoreAttenduUneQuille,
            "20 lancés de 1 quille tombé donnent 20 points"
        );
        assert.strictEqual(
            calculerScore(plusieursQuilles),
            scoreMaxAttenduQuille,
            "20 lancés de quilles choisis par défaut tombé donnent 72 points"
        );
        assert.strictEqual(
            calculerScore(spareQuilles),
            scoreAttenduSpareQuille,
            "20 lancés de quilles choisis et les deux premiers font un spare et donnent 28 points"
        );
        assert.strictEqual(
            calculerScore(strikeQuilles),
            scoreAttenduStrikeQuille,
            "20 lancés de quilles choisies et les deux premiers font un strike et donnent 35 points");
        logVert("Succès du test 🎉")
    } catch (error) {
        logRouge(error);
    }
}

function logVert(message) {
    console.log("\u001b[" + 32 + "m" + message + "\u001b[0m");
}

function logRouge(message) {
    console.log("\u001b[" + 31 + "m" + message + "\u001b[0m");
}

calculerScoreTest();