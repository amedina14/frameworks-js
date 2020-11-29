class Coche {

    constructor(modelo, velocidad, antiguedad){
        this.modelo = modelo;
        this.velocidad = velocidad;
        this.antiguedad = antiguedad;
    }

    aumentarVelocidad(){
        this.velocidad += 1;
    }
    reducirVelocidad(){
        this.velocidad -= 1;
    }
}

var coche1 = new Coche('Kuga', 200, 2020);
var coche2 = new Coche('Mercedes', 275, 2018);
var coche3 = new Coche('BMW', 300, 2014);
var coche4 = new Coche('Aston Martin', 450, 2000);

document.write("<h3>Velocidad: "+coche1.velocidad+"</h3>");
console.log(coche1);
let i=0;
while (i<10) {    
    coche1.aumentarVelocidad();
    i++;
}
//Muestra nueva velocidad del coche
document.write("<h3>Velocidad: "+coche1.velocidad+"</h3>");
console.log(coche1);
