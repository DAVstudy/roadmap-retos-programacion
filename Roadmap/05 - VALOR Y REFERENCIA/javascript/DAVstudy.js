/*
 * EJERCICIO:
 * - Muestra ejemplos de asignación de variables "por valor" y "por referencia", según
 *   su tipo de dato.
 * - Muestra ejemplos de funciones con variables que se les pasan "por valor" y
 *   "por referencia", y cómo se comportan en cada caso en el momento de ser modificadas.
 * (Entender estos conceptos es algo esencial en la gran mayoría de lenguajes)
 *
 * DIFICULTAD EXTRA (opcional):
 * Crea dos programas que reciban dos parámetros (cada uno) definidos como variables anteriormente.
 * - Cada programa recibe, en un caso, dos parámetros por valor, y en otro caso, por referencia.
 *   Estos parámetros los intercambia entre ellos en su interior, los retorna, y su retorno
 *   se asigna a dos variables diferentes a las originales. A continuación, imprime el valor de las
 *   variables originales y las nuevas, comprobando que se ha invertido su valor en las segundas.
 *   Comprueba también que se ha conservado el valor original en las primeras.
 */

// Variables por valor
let myVariable = 0;
let myVariable2 = myVariable;

myVariable += 10
console.log(myVariable, myVariable2); 

// La asignacion por valor significa que cuando se asigna un valor a una variable, 
// se almacena una copia de ese valor en la ubicación de memoria de la variable


// Variables por referencia
let myArray1 = [1, 2, 3, 4, 5, 6];
let myArrayRef = myArray1

myArray1.pop()

console.log(myArray1, myArrayRef);

// La asignacion por referencia significa que cuando se asigna un objeto a una variable,
// se le da una referencia a la ubicación de memoria del objeto en lugar de una copia.

// En Javascript los tipos de datos primitivos (number, boolean, strings, etc) se pasan por valor
// Los objetos (arrays, funciones y objetos) se pasan por referencia

function valueVariable(value) {
    let x = value
    x++
    return `x = ${x} y value = ${value}`
}

let y = 12
console.log(valueVariable(y));
