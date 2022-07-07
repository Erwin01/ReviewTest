// ej 1:

const sumar = (a,b) => a+b;

const numeros = [2, 3];

const suma = sumar(...numeros);

// console.log(suma);

//ej 2:

const masNumeros = [1, ...numeros, 4, 5];

// console.log(masNumeros);

//ej 3:

const otrosNumeros = [4,5];

const concatenar = [...numeros, ...otrosNumeros];

// console.log(concatenar);

//ej 4: destructuracion con spread

const [primero,...resto] = masNumeros;

// console.log('masNumeros',masNumeros);
// console.log('primero', primero);
// console.log('resto', resto);


//ej 5: clonar

const masNumerosClonados = [...masNumeros];

// console.log('masNumeros',masNumeros);
// console.log('masNumerosClonados',masNumerosClonados);

//Ej 6:

const persona = {
    nombre: 'Erwin',
    apellido: 'Parales' 
};

const persona2 = {
    ...persona,
    edad: 999
};

// console.log('persona2',persona2);

//Ej 7:

const persona3 = {...persona2};
persona3.nombre = 'Roberto';

// console.log(persona3);

//Ej 8:

const {edad,...persona4} = persona3;

console.log('edad', edad);
console.log('prsona4', persona4);
