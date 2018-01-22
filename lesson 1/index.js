var x = 10;
var y = 20;

var result = x + y;

result = result + 20;

var a = true;
var b = false;

var nombre = 'Damir';
var ciudad = 'Londres';

result = a + b + b + a;


var ciudades = [1, x, y, 4];
var mixto = ['Alex', 'Midanda', 'Obama', 1, 6, 7];




console.log(ciudades);
console.log(mixto[0], mixto[3]);


function suma(numero1, numero2) {
    numero2 = numero1 * 20 - 6 / 20;
    numero2 = numero2 + numero1;
    return numero1 + numero2 + numero1;
}


function Iam(nombre, ciudad) {
    return 'My name is ' + nombre + '. And I come from ' + ciudad;
}

result = suma(x, y);
console.log(result);


result = suma(x, y) + result;

console.log(Iam('Damir', 'Londres'));
console.log(Iam('Angela', 'Nobsa'));

nombre = prompt('Enter your name');
ciudad = prompt('Enter your city');
console.log(Iam(nombre, ciudad));

console.log(document.getElementsByClassName('a'));

document.getElementsByClassName('a')[0].textContent = Iam(nombre, ciudad);