// -- 1 -- afficher une suite de nombres de 1 à 10
for(let i = 1; i <= 10; i++){
    document.write(i + "<br>")
}

// -- 2 -- afficher une suite de nombres de 10 à 1
// -- 3 -- afficher les nombres pairs inférieurs à 100


// -- 4 -- afficher la table de multiplication de 7
document.write("<hr>");
for(let i = 1; i <= 10; i++){
    document.write(i * 7 + "<br>")
}

// -- 5 -- afficher toutes les tables de multiplication de 1 à 10


// -- 6 -- calculer la somme des nombres de 13 à 33


// -- 7 -- calculer le factoriel de 10 (10! = 10 x 9 x 8 x 7 x 6 x 5 x 4 x 3 x 2 x 1 = 3628800)


// -- 8 -- calculer la somme des nombres impairs entre 10 et 30


// -- 9 -- écrire une fonction pour convertir des minutes en heures et minutes
// /!\ si les minutes sont inférieures à 60, on affiche uniquement les minutes
// /!\ si les minutes sont inférieures à 10, on affiche les minutes avec 2 chiffres '03' et non '3'



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


// -- 17 -- écrire une fonction pour appliquer à une liste de prix un code promo s'il est fournit. La fonction prend 2 paramètres : un tableau de prix et un taux de réduction qui lui est optionnel. Si le taux de réduction n'est pas fourni, il est de 0% par défaut.


// -- 18 -- écrire une fonction qui prend un tableau de données (liste de prénoms) et renvoie un tableau des prénoms triés par ordre alphabétique


// -- 19 -- écrire une fonction qui prend un tableau de données et permute le premier et le dernier élément


// -- 20 -- écrire une fonction qui fusionne 2 tableaux de chiffres en un seul en les classant dans l'ordre croissant


// -- 20bis -- améliorer la fonction précédente pour qu'elle ne renvoie pas de doublons


// -- 21 -- écrire une fonction qui prend deux tableaux de nombres et renvoie un tableau avec les nombres du tableau 1 qui ne sont pas dans le tableau 2
let ar1 = [1, 2, 3, 10, 5, 3, 14];
let ar2 = [-1, 4, 5, 6, 14];
// résultat attendu => [1, 2, 3, 10, 3]


// -- 22 -- écrire une fonction qui prend un tableau de nombres et renvoie un tableau avec les nombres qui sont présents 2 fois ou plus dans le tableau
let ar = [1, 2, 3, 10, 5, 3, 14];
// résultat attendu => [3]


// -- 23 -- écrire une fonction qui dit bonjour à une personne dont le prénom est passé en argument à son appel
// le paramètre est optionnel, si aucun prénom n'est fourni, la fonction dit bonjour à "inconnu"
// le paramètre peut être passé sous forme de chaîne de caractères ou sous forme d'array
