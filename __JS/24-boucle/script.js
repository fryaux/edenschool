/* EXERCICE - Economies
j'ai 1000€ sur mon compte
chaque mois j'ajoute 50€
combien de temps me faut-il pour avoir 2000€ sur mon compte ?
Afficher le résultat : (1) en mois et (2) en années.
-------------------------------- */
let b = 1000;
for(let a = 1; b < 2000; a++){
    b+= 50;
    if(b == 2000){
        document.write(a + " Mois <br>");
    }
}

let année = 0;
let e = 1000;
let mois = 0;
while(e < 2000){
    e+= 50;
    if(mois == 12){
        année = 1;
        mois = 0;
    }
    mois++;
}
document.write("année " + année + "<br>" + "mois " + mois);