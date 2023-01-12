// variable declaration
let jan = [2, 4, 3, 6, 17, 2, 1, 8, 19, 4, 7, 3, 18.7, 1.3, 5, 4.1, 9.1, 8.7, 4, 6, 1.9, 8, 3.7, 16, 7.8, 8.2, 7.6, 8.7, 9.7, 11.5, 13.7];
let html = "";
let jour = 1; //variable pour afficher les jour dans le tableau
let positionJan =0; //variable pour gérer les indices de jan



// table creation
html += "<table>";
//utilisation d'une double boucle imbriquée pour créer les 6 premières lignes ayant 8 colonnes
for(let i = 1; i <= 6; i++){
    html += "<tr>";
    for(let j = 1; j <= 8; j++){
        // Si i est impair on fait une ligne de jour si i est pair on fait une ligne de température
        if(i%2 === 1){
            html += ("<td style='background-color: darkblue; color: white; border: 2px solid black; width: 3vw; height: 6vh; text-align: center'> J"+ jour +"</td>");
            jour += 1;
        }else{
            // Selon la température la couleur change
            if (jan[positionJan]<6){                    // en dessous de 6° la case est affichée en bleu
                html += "<td style='background-color: lightblue; color: black; border: 2px solid black; width: 3vw; height: 6vh; text-align: center'>"+jan[positionJan]+"</td>";
            }else if(jan[positionJan] > 15) {           // en dessus de 15° la case apparait en rouge
                html += "<td style='background-color: lightcoral; color: black; border: 2px solid black; width: 3vw; height: 6vh; text-align: center'>" + jan[positionJan] + "</td>";
            }else {                                     // sinon elle reste blanche
                html += "<td style='background-color: antiquewhite; color: black; border: 2px solid black; width: 3vw; height: 6vh; text-align: center'>" + jan[positionJan] + "</td>";
            }
            positionJan++;
        }
    }
    html += "</tr>";
}



// utilisation d'une boucle imbriquée pour créer les 2 dernières lignes n'ayant que 7 colonnes
for(let i = 1; i<=2; i++){
    html += "<tr>";
    for(let j = 1; j <= 7; j++){
        // Si i est impair on fait une ligne de jour si i est pair on fait une ligne de température
        if(i%2 === 1){
            html += ("<td style='background-color: darkblue; color: white; border: 2px solid black; width: 3vw; height: 6vh; text-align: center'> J"+ jour +"</td>");
            jour += 1;
        }else{
            // Selon la température la couleur change
            if (jan[positionJan]<6){                    // en dessous de 6° la case est affichée en bleu
                html += "<td style='background-color: lightblue; color: black; border: 2px solid black; width: 3vw; height: 6vh; text-align: center'>"+jan[positionJan]+"</td>";
            }else if(jan[positionJan] > 15) {           // en dessus de 15° la case apparait en rouge
                html += "<td style='background-color: lightcoral; color: black; border: 2px solid black; width: 3vw; height: 6vh; text-align: center'>" + jan[positionJan] + "</td>";
            }else {                                     // sinon elle reste blanche
                html += "<td style='background-color: antiquewhite; color: black; border: 2px solid black; width: 3vw; height: 6vh; text-align: center'>" + jan[positionJan] + "</td>";
            }
            positionJan++;
        }
    }
    html += "</tr>";
}



html += "</table>";   //fermeture du tableau html

document.write(html) //injection du html construit dans la variable html