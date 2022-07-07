class Rectangulo {
    constructor(alto, ancho){
        this.alto = alto;
        this.ancho = ancho;
    }

    area(){
        console.log(`El área del rectángulo es: ${this.alto * this.ancho}`);
    }
}

//Herencia
class Cuadrado extends Rectangulo{
    constructor(lado){
        super(lado, lado)
        this.lado = lado;
    }

    area(){
        console.log(`El área del cuadrado es: ${this.lado * this.lado}`);
    }

    static miFuncionEstatica(){
        console.log('Funcion estatica');
    }
}


const rectangulo1 = new Rectangulo(2, 3);
rectangulo1.area();

const rectangulo2 = new Rectangulo(3, 7);
rectangulo2.area();

const figura1 = new Cuadrado(6);
figura1.area = function(){
    console.log(`El área de la figura es ${this.lado}`);
}

figura1.area();

const cuadrado1 = new Cuadrado(5);
cuadrado1.area();

Cuadrado.miFuncionEstatica();
