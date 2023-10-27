// Funciones en JavaScript

// Función sin parámetros y sin retorno
function saluda() {
    console.log('¡Holaaaa!');
}
saluda();

// Función con parámetros y sin retorno
function addOne(num) {
    console.log(`El ${num} + 1 = ${num + 1}`);
}
addOne(15);

// Función con parámetros y con retorno
function suma(num1, num2) {
    return num1 + num2;
}
const result = suma(12, 34);
console.log(result);

// funciones como constantes
//funciones anonimas 
const resta = function (num1,num2){
    return num1= num2;
}
const resultado = resta(12,2);
console.log(resultado);

//Funciones de Flecha Arrow Functions 
(param1,param2)=>{
    //code
    //return 
}

const duplica =(num)=>{
    return num * 2;
}

const multiplica=(num1,num2)=>{
    console.log('Multiplicacion de Numeros');
    return num1 * num2;
}

const doble  = duplica (16);
console.log (doble);

const resultM= multiplica(13,26);
console.log(resultM);

//Simpñificando Arrow Funtions
let cambiaMinusculas =(word) => {
    return word.toLowerCase();
}

//si solo es un unico parametro se puede omitir parentesis
// si la unica linea es el return se puede omitir llaves
cambiaMinusculas = word => word.toLowerCase();