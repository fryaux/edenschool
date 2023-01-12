// -- 1 --
// Afficher les nombres de 1 à 10
document.write("<h1> Exo 1 </h1><br>")
for(let i = 1; i <= 10; i++){
    document.write(i + "<br>")
}
// -- 2 --
// Afficher tous les nombres impairs entre 1 et 100
document.write("<h1> Exo 2 </h1><br>")
for(let i = 1; i <= 100; i++){
    if(i % 2){
        document.write(i + "<br>")
    }
}
// -- 3 --
// Afficher la table de multiplication des 3
document.write("<h1> Exo 3 </h1><br>")
for(let i = 0; i <= 10; i++){
    document.write(i * 3 + "<br>");
}
// -- 4 --
// Afficher toutes les tables de multiplication de 1 à 10
document.write("<h1> Exo 4 </h1><br>")
for( let i = 1; i <= 10; i++){
    for(let j = 1; j <= 10; j++){
        document.write(i * j + "<br>");
    }
}
// -- 5 --
// Afficher toutes les tables de multiplication de 1 à 100
document.write("<h1> Exo 5 </h1><br>")
for( let i = 1; i <= 100; i++){
    for(let j = 1; j <= 10; j++){
        document.write(i * j + "<br>");
    }
}
// -- 6 --
// Calculer l'addition des chiffres de 1 à 10
// -- 7 --
// Calculer l'addition des chiffres de 1 à 100
// -- 8 --
// Calculer l'addition des nombre pairs entre 10 et 30
// -- 9 --
// Créer une fonction qui convertit des Celsius en Fahrenheit
// -- 10 --
// Créer une fonction qui convertit n'importe quelle monnaie (avec le taux de change en paramètre) en Euros
// -- 11 --
// Calculer la somme de chiffres provenant d'un array
// -- 12 --
// Calculer la moyenne de chiffres provenant d'un array
// -- 13 --
// Créer une fonction qui prend en paramètre un array de nombres et renvoie un array contenant uniquement les nombres entiers positifs (ex : [10, -8, 99, -277] => [10, 99])
// -- 14 --
// Créer une fonction qui renvoie le plus grand chiffre d'un array
// -- 15 --
// Afficher les 100 premiers nombres premiers
// -- 16 --
// Print the first 100 prime numbers
// -- 17 --
// Créer une fonction qui prend un array en paramètre et le renvoie classé à l'envers
// -- 18 --
// Créer une fonction qui prend une string en paramètre et la renvoie à l'envers
// -- 19 --
// Créer une fonction qui prend deux arrays en paramètres et renvoie un seul tableau contenant les deux tableaux fusionnés
// -- 20 --
// Créer une fonction qui prend deux arrays en paramètres et renvoie un seul tableau contenant les deux tableaux fusionnés sans répéter les doublons (ex : [10, -8, 99, -277] [77, 12, -8, 775] => [10, -8, 99, -277, 77, 12, 775])
// -- 21 --
// Créer une fonction qui prend deux arrays en paramètres et renvoie un seul tableau contenant les deux tableaux fusionnés classés dans l'ordre croissant
// -- 22 --
// Créer une fonction qui prend deux arrays en paramètres et renvoie un seul tableau contenant les deux tableaux fusionnés classés dans l'ordre croissant et sans répéter les doublons (exo 21 amélioré)
// -- 23 --
// Créer une fonction qui compte le nombre de mots dans un texte
// -- 24 --
// Créer une fonction qui met la première lettre de chaque mot d'un texte en majuscules
// -- 25 --
// Créer une fonction qui convertit un texte en un array de caractères
// -- 26 --
// Créer une fonction qui convertit un texte en un array de mots
// -- 27 --
// Créer une fonction qui compte le nombre de fois un caractère passé en argument est trouvé dans une , lui aussi passé en argument
// -- 28 --
// Créer une fonction qui compte pour chaque lettre d'un texte le nombre de fois où elle se répète, la fonction renvoie un array dont chaque sous-array contient 2 informations : la lettre et son occurence
// ex : 'Bonjour il fait beau' => [['b', 2], ['o', 2], ['n', 1], ... ]
// -- 29 --
// Créer une fonction pour calculer le diamètre d'un cercle (diamètre = rayon x PI)
// -- 30 --
// J'ai 1000€ sur mon compte bancaire.
// Tous les 2 mois, je mets 55€ de côté.
// Combien de temps faut-il pour que j'ai 5000€ sur mon compte ?
// Afficher le résultat en détaillant les 4 informations suivantes :
// (1) nombre de mois nécessaires
// (2) nombre d'années' nécessaires
// (3) nombre de semaines nécessaires
// (4) nombre de versements nécessaires