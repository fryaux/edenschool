const counterDom = document.getElementById('counter');
let counter = 1000000;
const textarea = document.querySelector('textarea');
textarea.addEventListener('keyup', function (e){
    counter = 1000000 - e.target.value.length;
    counterDom.textContent = counter;
})