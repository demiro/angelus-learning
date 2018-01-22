var x; // declaracion
x = 10; // definicion
var x = 10;

function masadentro(){
    var x = 40;
}

function test(){
    x = 20;

    window.masadentro = function() {
        x = 80;
    }
}

x = x + 900;

window.test();
masadentro();

console.log(window.x);


function f1(){
    // slkjdl;df
}

var f1 = function() {
    // slkjdl;df
}

window.f1 = function() {
    // slkjdl;df
}

f1();

window.f1();

function f2 (){
    function f3() {
        function f4 () {
            function f5 () {
                function f6 () {
                    window.x = 200;
                }
            }
        }
    }
}

f2();
console.log(x);

if (x = 20) {
    x = 900;
} else {
    x = 200000;
}

x === 20; // comparacion

// for (var i=0; i <= 20; i=i+1) {
//     console.log(i);
//     if (i === 15) {
//         console.log('I am happy!');
//     }
// }

var names = ['angela', 'damir', 'istok', 'consuelo', 'uros'];
var appelidos = ['test', 'hernandez', 'secki', 'secki', 'hernandez', 'kete'];

console.log(names[1]);
console.log(names[3]);

for (var i=0; i < 6; i++) {
    console.log( names[i], appelidos[i] );
}

// var condition;
// var f = 'test';
// condition = (f === 'test');
// f = 'test1';
// condition = (f === 'test');

// f = 10;

// condition = (f < '11');

// console.log(condition);
