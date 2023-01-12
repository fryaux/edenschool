let square = document.querySelector('.square');
let button = document.getElementById('button');
square.addEventListener('mouseover', function() {
    square.classList.remove("colorGreen")
    square.style.backgroundColor = '#FF1040';
});
square.addEventListener('mouseout', function() {
    square.style.backgroundColor = '#10B0FF';
});
square.addEventListener('dblclick', function() {
    square.style.backgroundColor = '';
    square.classList.toggle('colorGreen');
});
button.addEventListener('click', function() {
    square.classList.toggle('vanish');
});