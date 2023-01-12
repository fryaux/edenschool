/**
 * EVALUATION 1 - JS ALGO
 * Prénom : Gustave
 * Nom : Seror
 */

// -- 1 --
// Afficher tous les nombres pairs entre 30 et 75 (inclus)
for(let i = 30; i <= 75; i++){
    if(i % 2 === 0){
        document.write(i + "<br>");
    }
}


// -- 2 --
// Afficher la table de multiplication des 5
document.write("<hr>")
for(let i = 0; i <= 10; i++){
    document.write(i * 5 + "<br>");
}

// -- 3 --
// Afficher toutes les tables de multiplication des nombres pairs uniquement entre 10 et 20 (inclus)
for(let i = 10; i <= 20; i++){
    if(i % 2 === 0){
        for (let j = 0; j <= 10; j++){
            document.write(j * i + "<br>")
        }
    }
}


// -- 4 --
// Calculer l'addition des nombres pairs entre 10 et 30
document.write("<hr>")
for(let i = 10; i <= 30; i++){
    if(i % 2 === 0){
        document.write(i + i + "<br>");
    }
}
// -- 5 --
// Créer une fonction qui convertit n'importe quelle monnaie (avec le taux de change en paramètre) en Euros


// -- 6 --
// Calculer la moyenne de chiffres provenant d'un array
let tableau = [1, 2, 3, 4, 5, 6];
document.write(tableau[0] + tableau[1] + tableau[2] + tableau[3] + tableau[4] + tableau[5] % 2)

// -- 7 --
// Créer une fonction qui prend une string en paramètre et la renvoie à l'envers


// -- 8 --
// Créer une fonction qui compte le nombre de mots dans un texte


// -- 9 --
// Créer une fonction qui renvoie le plus petit chiffre d'un array


// -- 10 --
// Créer une fonction qui met la première lettre de chaque mot d'un texte en majuscules


// -- 11 --
// Créer une fonction qui compte le nombre de fois un caractère passé en argument est trouvé dans une string lui aussi passé en argument
// Ex : countChar("Hello World!", "l") => 3


// -- 12 --
// j'ai un array qui contient les années de naissance de mes clients
// je veux créer un array qui contient leurs âges (on ne tient pas compte des mois ni des jours) et afficher la liste des âges


// -- 13 --
// Créer une fonction qui demande à l'utilisateur son age et lui indique dans combien d'années il aura 100 ans


// -- 14 --
// Créez un tableau qui contient les prénoms des élèves d'EDEN School Paris (au moins 10)
document.write("<hr>");
let tableaue = ["Gustave", "Isaac", "Noe", "Ziyad", "Sofiane", "Enzo", "Mathis", "Azazelle", "Brice", "Jules", "Vadim", "Jonas", "Mathias", "Tom",]
// Affichez dans la page la liste des élèves.
document.write(tableaue)
// Ajoutez un bouton "Ajouter un élève" qui permet d'ajouter un élève à la liste


// -- 15 --
// J'ai 103€ sur mon compte bancaire. J'économise pour financer mon voyage autour du monde. Tous les 2 mois, je mets 55€ de côté. Combien de temps faut-il pour que j'ai 13400€ sur mon compte ?


// Afficher le résultat en détaillant les 4 informations suivantes :
// (1) nombre de mois nécessaires
for(let i = 103; i < 13400; i++){
    document.write("<br>" + i + 55)
}
// (2) nombre d'années' nécessaires
// (3) nombre de semaines nécessaires
// (4) nombre de jours nécessaires