let tab = [10, 12, 50, 20, 30, 12, 40, 12, 50, 12, 60, 12, 70, 12, 80, 50, 12, 90, 12, 100];
let pets = ['Merlin', 'Pixel', 'Merlin']
function findpets(tab, val){
    let result = [];
    let ix = tab.indexOf(val);
    while(ix !== -1){
        result.push(ix);
        ix = tab.indexOf(val, ix + 1);
    }
    return result;
}
let res1 = findpets(tab, 12);
let res2 = findpets(pets, 'Merlin');
console.log(res1, res2);