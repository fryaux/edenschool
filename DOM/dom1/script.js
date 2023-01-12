// séléction par l'id

let monId1 = document.getElementById('section1');
console.log(monId1);
monId1.onclick = function(){
    
}

// séléctions par les balises

let maBalise = document.getElementsByTagName('span');
console.log(maBalise);

maBalise[0].onclick = function (){
alert(maBalise[0].innerHTML);
}

//

let maClasse = document.getElementsByClassName('lesdiv');
console.log(maClasse);

for(let i = 0; i < maClasse.length; i++){
    maClasse[i].onclick = function(){
    alert(maClasse[i].innerHTML);
    }
}