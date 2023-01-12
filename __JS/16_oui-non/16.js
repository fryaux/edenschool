let text;
do{
    text = prompt("Marque un truc")
    if(!text.includes("oui") && !text.includes("non")){
        alert("On continue ?")
    }
}while(!text.includes("oui") && !text.includes("non"));
document.write("TA PERDU !");