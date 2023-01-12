let min=1;
let max=100;
let numberRandom = Math.floor(Math.random() * (max - min)) + min;
console.log(numberRandom)
let a = prompt('Pierre Feuille Ciseaux ?')
let pc;
if(numberRandom < 33){
    pc = 'Ciseaux'
}
else if(numberRandom < 66){
    pc = 'Pierre'
}
else{
    pc = 'feuille'
}
console.log(pc)
if(a == pc){
    document.write('Vous avez gagner')
}
else{
    document.write('Dommage /:')
}