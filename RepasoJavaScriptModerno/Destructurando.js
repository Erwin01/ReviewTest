
let persona = {
    nombre: 'Erwin',
    apellido: 'Parales',
    edad: 999,
    fechaNacimiento: new Date()
};

// const nombre = persona.nombre;
// const apellido = persona.apellido;
// const edad = persona.edad;

// const {nombre, apellido, edad} = persona;

// console.log(nombre);
// console.log(apellido);
// console.log(edad);

//Funciones que retornan objetos!!

obtenerDireccion = () => {
    return{
        calle: 'Mi calle',
        pais: 'Mi pais',
        provincia: 'Mi provincia'
    };
} 

const {pais, provincia} = obtenerDireccion();

// console.log(pais);
// console.log(provincia);

// Destructurar los parametros de una funcion

imprimirNombre = (persona) => {
    console.log(persona.nombre);
}

imprimirNombre2 = ({nombre}) => {
    console.log(nombre);
}

// imprimirNombre(persona);
// imprimirNombre2(persona);

//Destructurar arreglos

const arreglo = [1, 2, 3, 4];

//const primero = arreglo[0];

const [primero, segundo,,cuarto] = arreglo;

// console.log(primero);
// console.log(segundo);
// console.log(cuarto);
const retornaArreglo = () => {
    return ['Erwin', 'Parales']
}

const[nombre, apellido] = retornaArreglo();

console.log(nombre);
console.log(apellido);



