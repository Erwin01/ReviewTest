let apellido = "Parales";
let edad = 999;
let fecha = new Date();


const paisProp = 'pais';
const paisValor = 'COL';

let persona = {
    nombre: 'Erwin',
    apellido, // => apellido: apellido
    edad: edad,
    fechaActual: new Date(),
    funcionNormal(){
        //...
    },
    funcionFlecha: () => {},
    [paisProp]: paisValor //nombre propiedad de objeto dinamica
};

const retornarValoresPersona = (prop) => persona[prop];

// console.log(persona);
console.log(retornarValoresPersona('apellido'));
console.log(persona['pais']);

