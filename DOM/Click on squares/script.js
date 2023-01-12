/**
 * Exercice DOM manipulation - Click on squares
 * Créer une grille HTML de 8 x 8 carrés (64 carrés)
 * 1- Au survol des carrés la couleur de fond doit changer
 * 2- Au clic sur un carré, différentes actions doivent se produire :
 * 2.1- Si le carré est le dernier, la page change de couleur et un autre texte apparaît à la place de la grille
 * - BONUS : la page se recharge automatiquement au bout de 5 secondes et on peut faire une nouvelle partie
 * 2.2- Si le carré est le premier, le carré change de couleur et contient un texte 'QUOI ?'
 * 2.3- Si le carré est un multiple de 5, le carré change de couleur et contient le texte 'NO'
 * - BONUS 1 : Au bout de 3 'NO' la page change de couleur et un autre texte apparaît à la place de la grille
 * - BONUS 2 : la page se recharge automatiquement au bout de 5 secondes et on peut faire une nouvelle partie
 * 2.4- Si le carré est un multiple de 7, le carré change de couleur et contient le texte 'LOL'
 * 2.5- Si le carré est un multiple de 3, le carré contient un chiffre aléatoire entre 1 et 100
 * Si le chiffre est 42, la page change de couleur et un autre texte apparaît à la place de la grille "42, bravo ! La réponse à la vie, l'univers et le reste..."
 * - BONUS : la page se recharge automatiquement au bout de 5 secondes et on peut faire une nouvelle partie
 * 2.6- Pour les autres carrés, le carré disparaît (il prend la couleur de fond de la page)
 *
 * Pour les plus créatifs, on peut aller encore plus loin : par exemple, au clic sur un carré, on peut faire apparaître un autre carré à la place, ou encore faire apparaître un carré avec un autre texte, etc.
 * Ou bien compter le nombre de carrés cliqués au total, et au bout de 10 afficher 'BINGO, vous avez gagné !'
 */
let section = document.querySelector("section");
let carre = document.getElementsByTagName('p');
for (let i = 0; i < carre.length; i++) {
    carre[i].addEventListener('mouseover', function() {
        this.style.backgroundColor = '#157A6E';
      });
      carre[i].addEventListener('click', function() {
        let random = Math.floor(Math.random() * 100);
        if(i == 0){
            this.style.backgroundColor = "#13e600";
            this.innerHTML = "WHAT ?";
            this.style.fontFamily = "arial";
            this.style.color = "#FF00FF";
        }

        else if(i == 63){
            section.innerHTML = "Vous etes pieger";
            section.style.color = "white";
            section.style.width = "200px";
            section.style.height = "200px";
            section.style.backgroundColor = "red";
            setTimeout(function(){
                location.reload();

            }, 2500);
        }

        else if(i % 5 == 0){
            this.style.backgroundColor = "red";
            this.innerHTML = "NO !";
        }

        else if(i % 7 == 0){
            this.style.backgroundColor = "yellow";
            this.style.fontFamily = "arial";
            this.innerHTML = "LOL";
            this.style.color = "white";
        }

        else if(i % 3 == 0){
            this.style.backgroundColor = "white";
            this.style.color = "black";
            this.style.fontFamily = "arial";
                carre[i].innerHTML = random;
                if(random === 42){
                    section.innerHTML = "42, bravo ! La réponse à la vie, l'univers et le reste...";
                    section.style.width = "1000px";
                    section.style.height = "1000px";
                    section.style.backgroundColor = "red";
                    section.style.fontSize = "40px";
                    section.style.textAlign = "center";
                    section.style.marginTop = "100px";
                    section.style.color = "white";
                    setTimeout(function(){
                        location.reload();
        
                    }, 5000);

                }
            
            }


            else{
                this.style.boxShadow = "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset";
                this.style.backgroundColor = "white";
            }

      })
      
}