let resultat = prompt('Ton resultat au bac ?');
if (resultat < 10){
    document.write('Recalé')
}
else if (resultat < 12){
    document.write('recu')
}
else if (resultat >= 12){
    document.write('Recu avec mention')
}