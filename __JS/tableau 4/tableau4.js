/**
 *  EXO - Reçus & Recalés
 *  Afficher dans une liste ul/li les élèves qui sont reçus (note supérieure ou égale à 10) puis dans une seconde liste les élèves qui n'ont pas réussi
 */

 let arr = [
    ['Harry', 'Potter', 16],
    ['Neville', 'Longbottom', 14],
    ['Ron', 'Weasley', 8],
    ['Lavender', 'Brown', 12],
    ['Gregory', 'Goyle', 9],
    ['Seamus', 'Finnigan', 10],
    ['Hermione', 'Granger', 18],
    ['Draco', 'Malfoy', 17],
    ['Hannah', 'Abbot', 7],
    ['Katie', 'Bell', 12],
];
for(i = 0; arr.length > i; i++){
    if(arr[i][2] >= 10){
        document.write("<ul>" + "<li>" +'Bien jouer vous etes pris ' + arr[i][0] + "<br>" + "</ul>" + "</li>")
    }
}

for(i = 0; arr.length > i; i++){
    if(arr[i][2] < 10){
        document.write("<ul>" + "<li>" +'Dommage vous etes nul ' + arr[i][0] + "<br>" + "</ul>" + "</li>")
    }
}