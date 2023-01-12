/*
 * EXERCICE
 * Array - Best Friends
 *



    1- Avec une boucle, parcourir le tableau pour afficher tous les prénoms dans la console
    2- Supprimer "Greg" du tableau > afficher.
    3- Supprimer "James" du tableau > afficher.
    4- Ajouter "Matt" en début de tableau > afficher.
    5- Ajouter votre prénom en fin de tableau > afficher.
    6- Avec une boucle, parcourir le tableau pour afficher tous les prénoms dans la console jusqu'à "Mary" puis sortir de la boucle (petite recherche à faire).
    7- Faire une copie du tableau avec slice : cette copie ne doit PAS inclure ni "Mary" ni "Matt".
    8- Trouver l'indice de "Mary".
    9- Trouver l'indice de "Foo" (le résultat devrait être -1).
    10- Redéfinir la variable avec le tableau de départ : let people = ["Greg", "Mary", "Devon", "James"];.
    Avec la propriété splice, supprimer "Devon" et ajouter "Elizabeth" et "Artie". Le résultat attendu est le suivant >> ["Greg", "Mary", "Elizabeth", "Artie", "James"].
    11- Créer une nouvelle variable appelée withBob contenant le tableau people concaténé avec la string "Bob".
 */

    let people = ["Greg", "Mary", "Devon", "James"];
    people.shift();
    people.pop();
    people.unshift('Matt');
    people.push('Gustave');
    console.log(people);
    for(i = 0; i < people.length; i++){
        document.write(people[i]);
}
    

let b = 0;
    while(b < people.length){
    console.log(people[b])
    if(people[b] == "Mary"){
        break;
    }
    b++;
}

let peopleCopy = people.slice(2, 4);
console.log(peopleCopy);
console.log(people.indexOf('Mary'))
console.log(people.indexOf('Foo'))
people = ["Greg", "Mary", "Devon", "James"];
people.splice(2, 1, "Elizabeth", "Artie");
console.log(people);
let withBob = people + "Bob";
console.log(withBob);