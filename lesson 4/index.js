var a = 5;
window.a = 10;

a = 5;




// var persona = {
//     nombre: 'Damir',
//     edad: 40,
//     ojos: 'verdes',
//     dieta: {
//         lunes: {
//             desayuno: 'cafe',
//             almuerzo: 'arroz',
//             cena: 'nada'
//         },
//         martes: {
//             desayuno: 'leche',
//             almuerzo: 'pechuga',
//             cena: 'aire'
//         }
//     }
// }

// console.log(persona);


function test(){
    var a = 10;
    // var persona = {
    //     dieta: {
    //         lunes: {
    //             almuerzo: 'frijoles'
    //         }
    //     }
    // };
    window.a = 2;
    a = 6;
    
    // persona.dieta.lunes.almuerzo = 'papas';

    console.log('ESETE A ES', a);
    console.log('WINDOW A ES', window.a);
    // console.log('ESETE ES PERSONA', persona);
}

a = 99;
test();
// console.log(persona);

console.log(a);