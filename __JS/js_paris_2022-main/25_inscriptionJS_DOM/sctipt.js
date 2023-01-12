let tableau = [{pseudo:"Harry",age:"19",email:"hp@poudlard.fr"},
                {pseudo:"Hermione",age:"20",email:"hg@poudlard.fr"}
                ];
console.log(tableau)
let nom = document.querySelector('input[placeholder = Pseudo]');
let age = document.querySelector('input[placeholder = Age]');
let mail = document.querySelector('input[placeholder = Mail]');
let mdp = document.querySelector('input[placeholder = Mot-de-passe]');
let boutton = document.querySelector('button');
let input = document.querySelector('.name');
console.log(input);
input.addEventListener('keyup', function(){
    for (let i = 0; i < tableau.length; i++){
        if(input.value === tableau[i].pseudo){
            document.write('Pseudo déja pris')
            setTimeout(() => {
                location.reload()
            }, 2000);
        }
    }
})
boutton.addEventListener('click', function (){
    console.log(boutton);
    if(nom == "" || age == "" || mail == "" || mdp == ""){
        document.write("Erreur, Les champs sont vides, veuillez recommencer l'opération")
    }
    else{
        tableau.push({pseudo: input.value, age: age.value, email: mail.value})
        console.log(tableau)
    }
})