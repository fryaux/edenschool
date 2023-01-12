let a = prompt('Quelle couleur voulez vous mettre ?')
if (a == 'red'){
    document.write('vous avez dis rouge')
    document.body.style.backgroundColor = "red";

}
else if (a == 'jaune'){
    document.write('vous avez choisi jaune')
    document.body.style.backgroundColor = ('yellow')
    document.body.style.color = ('red')
}