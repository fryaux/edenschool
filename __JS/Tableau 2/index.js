/**
 * EXO - Array - FavFoods
 */
 // 1- Créer un tableau (array) de vos plats préférés (favFoods). Il doit avoir au moins 3 éléments.
 let favFoods = ["fraises", "abricots", "épinards"];
 // 2- Afficher le 2nd élément de favFoods.
document.write(favFoods[1]);
 // 2bis- Changer le dernier élément de favFoods pour un autre de vos mets favoris.
favFoods.pop();
favFoods.push('Chocolat');
console.log(favFoods);
//  3- Retirer le 1er élément de favFoods et stocker le dans une variable ancienFavFoods.
 //Afficher le tableau favFoods et la variable ancienFavFoods.
let oldFav = favFoods.shift();
console.log(favFoods);
console.log(oldFav);
// 4- Ajouter un autre élément à favFoods en fin de tableau. Afficher le tableau.
favFoods.push('couscous');
console.log(favFoods);
 //5- Ajouter un autre élément à favFoods en début de tableau. Afficher le tableau.
favFoods.unshift('frites');
console.log(favFoods);
 //6- Créer un tableau vide et utiliser dessus la méthode pop(). Que se passe-t-il ?
let test = [];
let test2 = test.pop();
console.log(test2); 
 //7- Dans les exemples ci-dessous utiliser splice() pour convertir le 1er tableau et obtenir le 2nd tableau fournit :
 //[2, 3, 4, 5] -> [2, 4, 5]
 let tab2 = [2, 3, 4, 5];
 console.log(tab2);
 tab2.splice(1, 1);
 console.log(tab2);
  //["alpha", "gamma", "delta"] -> ["alpha", "beta", "gamma", "delta"]
 let tab3= ["alpha", "gamma", "delta"];
 tab3.splice(1, 0, 'beta');
 console.log(tab3);
 //[10,-10,-5,-3,2,1] -> [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
 let tab4 = [10,-10,-5,-3,2,1];
 tab4.splice(1, 3, 9, 8, 7, 6, 5, 4, 3);
 console.log(tab4);
/* ---------------------------------
            EXERCICE - Cats' names
---------------------------------- */
// -- Supposons le tableau suivant :
let cats = ['Pixel', 'Saxo', 'Cody', 'Choupette', 'Scar', 'Galy', 'Merlin', 'Yuzu'];
/**
 * CONSIGNE : Grâce à une boucle FOR, puis avec une boucle WHILE
 * affichez la liste des prénoms
 * du tableau ci-dessus dans la console,
 * ou sur votre page.
 */
for(let i = 0; i < cats.length; i++){
    console.log(cats[i]);
}
let i = 0;
while (i < cats.length){
    console.log(cats[i]);
    i++;
}