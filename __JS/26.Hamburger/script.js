let menuburger = document.getElementById( 'burgermenu');
let menu = document.getElementById('menu')
menuburger.addEventListener('click', function (){
   menu.classList.toggle('open');
   menuburger.classList.toggle('open');

})