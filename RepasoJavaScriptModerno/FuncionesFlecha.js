let miFuncion = function duplicar(valor){
    return valor * 2;
};

let duplicar = (valor) => {
    return valor * 2;
}

let duplicar2 = valor => valor * 2;

let sumar = (sumando1, sumando2) => sumando1 + sumando2;

let imprimirAlgo = () => console.log('algo');

let funcioncompleja = () => {
    //linea 1
    //linea 2
    //...
}

// this

//En la funcion normal: EL valor del this depende de como es llamada la funcion, el objeto que hizo el llamado de la funcion
//En la funcion flecha: Depende del ambiente original, donde fue definida, en ambiente window.

const obj = {
    funcionNormal: function(){
        console.log('funcion normal', this);
    },
    funcionFlecha:() => {
        console.log('funcion flecha', this);
    }
}

console.log('this del ambiente', this);
obj.funcionNormal();
obj.funcionFlecha();