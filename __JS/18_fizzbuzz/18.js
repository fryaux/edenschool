let a = 1;
while(a < 100){
    if(a % 3 === 0){
        document.write('Fizz<br>')
    }
    else if(a % 5 === 0){
        document.write('buzz<br>')
    }
    else{
        document.write(a  + '<br>')
    }
    a++
    }