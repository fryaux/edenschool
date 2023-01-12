let min=1;
let max=100;
let numberRandom = Math.floor(Math.random() * (max - min)) + min;
console.log(numberRandom)
let a = prompt('Choisissez un nombre entre 1 et 100')
for(let i = 0; i < 6; i++){
    if(a == numberRandom){
        document.write('Bien jouez vous avez trouvé')
        break
    }
    else if(a > numberRandom){
        a = prompt('Vous etes au dessus')
    }
    else if(a < numberRandom){
        a = prompt('Vous etes en dessous')
    }
}