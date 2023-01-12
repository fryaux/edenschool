let a = prompt('Choisis un chiffre ?');
let b = prompt('Deuxieme chiffre ?');

if(a < b){
    document.write('Le premier chiffre' + ' ' + a + ' est plus petit que ' + ' ' + b);
}
else if(a > b){
    document.write('Le premier chiffre' + ' ' + a +  ' est plus grand' + ' ' + b);
}
else{
    document.write('Les deux chiffres sont egauts');
}