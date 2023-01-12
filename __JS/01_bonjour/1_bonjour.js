let b = prompt('écrivez votre nom')
let a = prompt('écrivez votre prénom')
let c ='bonjour ' + a + ' ' + b;
if (a != "" && b != ""){
    document.body.style.backgroundColor = "red";
}
document.write(c)