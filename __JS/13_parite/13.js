let nombre = parseInt(prompt("Choisissez un nombre entier :"))
n1 = 0
let max = nombre + 10;
// while(nombre+10 > nombre){
while(nombre < max){
    if(nombre%2 == 0){
    document.write(nombre + " est pair" + '<br>')
    }
    else{
            document.write(nombre + " est impair" + '<br>')
}
nombre++
}