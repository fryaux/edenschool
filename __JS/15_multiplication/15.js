let nombre = prompt("Choisisez un nombre");
for(let compteur = 1; compteur <= 10; compteur++){
    if(nombre >= 100 || nombre <= 50){
    document.write(nombre*compteur + '<br>')
    }
    else{
        nombre = prompt("choisisez un nombre")
    }
}