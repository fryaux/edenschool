/* EXOS FONCTIONS
* A B C
 */
function letterA() {
    return "A";
}
function letterB() {
    return "B";
}
function letterC() {
    return "C";
}
let index;
let result;
// * Chaîne #1 : A
result = letterA();
console.log(result);
// * Chaîne #2 : AC
result += letterC();
console.log(result);
// * Chaîne #3 : ABBCCC
result = letterA();
for (index = 0; index < 2; index++) {
    result += letterB();
}
for (index = 0; index < 3; index++) {
    result += letterC();
}
console.log(result);
// * Chaîne #4 : CBCBA
result = '';
for (index = 0; index < 2; index++) {
    result += letterC() + letterB();
}
result += letterA();
console.log(result);
// * Chaîne #5 : CB!C CB!B CB!A
function lettersCB() {
    return letterC() + letterB() + '!';
}
result = lettersCB() + letterC() + ' ' + lettersCB() + letterB() + ' ' + lettersCB() + letterA();
console.log(result);