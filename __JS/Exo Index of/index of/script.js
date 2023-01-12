let doublons = [10, 12, 50, 20, 30, 12, 40, 12, 50, 12, 60, 12, 70, 12, 80, 50, 12, 90, 12, 100];
let result = [];
let ix = doublons.indexOf(12);
while(ix !== -1){
    result.push(ix);
    ix = doublons.indexOf(12, ix + 1);
}