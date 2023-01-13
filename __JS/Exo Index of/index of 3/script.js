let doublons = [10, 12, 50, 20, 30, 12, 40, 12, 50, 12, 60, 12, 70, 12, 80, 50, 12, 90, 12, 100];
function rpt (word) {
    let result = [];
    let val = doublons.indexOf(word);
    while (val != -1) {
        result.push(val);
        val = doublons.indexOf(word, val + 1);
    }
    console.log(result.length);
}

rpt(50);