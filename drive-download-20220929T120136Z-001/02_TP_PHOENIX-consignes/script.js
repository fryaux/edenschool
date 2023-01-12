let liste = document.getElementsByTagName('li')
for(let i = 0; i < 20; i++){
    liste[i].addEventListener('mouseover', function(){
        this.style.textDecoration = "underline";
        this.style.fontSize = "22px";
        this.style.transition = "0.5s"
    })
    liste[i].addEventListener('mouseleave', function(){
        this.style.fontSize = "16px";
        this.style.textDecoration = "none";
    })

}