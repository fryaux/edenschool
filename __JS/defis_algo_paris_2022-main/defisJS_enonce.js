// -- 1 -- afficher une suite de nombres de 1 à 10
document.write("<hr><h1>Exercice 1</h1>")
for(let i = 0; i <= 10; i++){
    document.write(i + "<br>");
}

// -- 2 -- afficher une suite de nombres de 10 à 1
document.write("<hr><h1>Exercice 2</h1>")
let i = 10;
while(i > 0){
    document.write(i + "<br>")
    i--
}

// -- 3 -- afficher les nombres pairs inférieurs à 100
document.write("<hr><h1>Exercice 3</h1>")
for(let i = 0; i <= 100; i++){
    if(i % 2 === 0){
        document.write(i + "<br>")
    }
}
// -- 4 -- afficher la table de multiplication de 7
document.write("<hr><h1>Exercice 4</h1>")
    a = 7;
for(let v = 1; v <= 10; v++){
    document.write(a * v + "<br>");
}
// -- 5 -- afficher toutes les tables de multiplication de 1 à 10
document.write("<hr><h1>Exercice 5</h1>")
for(let i = 1; i <= 10; i++){
    for(let a = 1; a <= 10; a++){
        document.write(a * i + "<br>");
    }
}
// -- 6 -- calculer la somme des nombres de 13 à 33
document.write("<hr><h1>Exercice 6</h1>")
for(let i = 13; i <= 33; i++){
    for(let a = 13; a <= 33; a++){
        document.write(i + " + " + a + " = " + (i + a) + "<br>");
    }
    document.write("<br>" + "<hr>")
}
// -- 7 -- calculer le factoriel de 10 (10! = 10 x 9 x 8 x 7 x 6 x 5 x 4 x 3 x 2 x 1 = 3628800)
document.write("<hr><h1>Exercice 7</h1>");
    document.write(10 * 9 * 8 * 7 * 6 * 5 * 4 * 3 * 2);
// -- 8 -- calculer la somme des nombres impairs entre 10 et 30
document.write("<hr><h1>Exercice 8</h1>");
for(let i = 10; i <= 30; i++){
    for(let a = 10; a <= 30; a++){
        if(a % 2 !== 0 && i % 2 !== 0){
            document.write(i + " + " + a + " = " + (i + a) + "<br>");
        }
    }
}
// -- 9 -- écrire une fonction pour convertir des minutes en heures et minutes
// /!\ si les minutes sont inférieures à 60, on affiche uniquement les minutes
// /!\ si les minutes sont inférieures à 10, on affiche les minutes avec 2 chiffres '03' et non '3'
document.write("<hr><h1>Exercice 9</h1>");
function heure (minutes) {
    // si minutes inférieur es à 60
        // si minutes inférieures à 10
            // ajouter un 0
        // sinon afficher les minutes

    // sinon im faut gérer les heures
    let heures =Math.floor(minutes / 60);
    minutes = minutes % 60;// si minutes inférieures à 10
         // si minutes inférieures à 10
            // ajouter un 0 avant
            // minutes =
        // sinon afficher les minutes
            // minutes =


    return heures;
}
console.log(heure(90))

// -- 10 -- écrire une fonction pour calculer la somme des chiffres d'un nombre
// /!\ on ne peut pas utiliser de chaîne de caractères
// /!\ on ne peut pas utiliser de tableau
// /!\ le nombre doit être un entier positif
// /!\ le nombre peut avoir plusieurs chiffres (exemples : 1234 666 123456789)




// -- 10-bis -- même exercuce que le 10 (calculer la somme des chiffres d'un nombre) mais cette fois il faut gérer les nombres négatifs et les nombres à virgule


// -- 11 -- écrire une fonction pour calculer la somme des nombres d'un tableau


// -- 11-bis -- écrire une fonction pour calculer la somme des nombres d'un tableau
// /!\ on ne peut pas utiliser de boucle FOR
// /!\ on ne peut pas utiliser de boucle WHILE

// -- 12 -- écrire une fonction pour calculer la moyenne des nombres d'un tableau


// -- 13 -- écrire une fonction qui prend un tableau de nombres et renvoie un tableau contenant uniquement les nombres pairs


// -- 14 -- écrire une fonction qui prend un tableau de nombres et renvoie un tableau sans les doublons sans utiliser includes
// /!\ utiliser la méthode includes(


// -- 14-bis -- écrire une fonction qui prend un tableau de nombres et renvoie un tableau sans les doublons en utilisant la méthode filter()


// -- 14-bis -- écrire une fonction qui prend un tableau de nombres et renvoie le plus petit chiffre pair sans utiliser la méthode filter() ni d'autre méthode prédéfinie


// -- 15 -- écrire une fonction qui affiche si le nombre passé en paramètre est premier


// -- 16 -- écrire une fonction qui affiche la liste des 100 premiers nombres premiers


