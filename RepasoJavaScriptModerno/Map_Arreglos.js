//Ej 1:

const numeros = [1, 2, 3, 4, 5];
const cuadrados = numeros.map((valor) => valor * valor);

// console.log('Numeros', numeros);
// console.log('Cuadrados', cuadrados);


//Ej 2:
const personas = [
    {id: 1, nombre: "Erwin", pais: "COL"},
    {id: 2, nombre: "Claudia", pais: "Mexico"},
    {id: 3, nombre: "roberto", pais: "Chile"},
];

const ids = personas.map(persona => persona.id);
const nombres = personas.map(persona => persona.nombre);
// console.log('id',ids);
// console.log('nombres', nombres);

const nombresYpaises = personas.map(persona => {
    return {nombre: persona.nombre, pais: persona.pais}
});

// console.log(nombresYpaises);

//Ej 3: HTML

const divs = personas.map(persona =>  `
    <div>
    <span>${persona.nombre}</span> (país: ${persona.pais})
    </div> 
`);

console.log(divs);
