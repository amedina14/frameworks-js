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

class Autobus extends Coche{
    constructor(modelo, velocidad, antiguedad){
        super(modelo, velocidad, antiguedad);
        this.altura = 5;
        this.largueza = 15;
        this.capienza = 100;
        this.sillas = 30;
    }

    mostrarAltura(){
        return "La altura del bus es: "+this.altura;
    }
    setAltura(altura){
        this.altura = altura;
    }
    mostrarLargueza(){
        return this.largueza;
    }
    setLargueza(largueza){
        this.largueza = largueza;
    }
    mostrarCapienza(){
        return this.capienza;
    }
    setCapienza(capienza){
        this.capienza = capienza;
    }
    mostrarSillas(){
        return this.sillas;
    }
    setSillas(sillas){
        this.sillas = sillas;
    }
}

//-----------------------------------Buses
var autobus1 = new Autobus('PEGASUS', 2500, 2030);
console.log(autobus1);
console.log(autobus1.mostrarAltura());
console.log("La nueva altura del bus es: "+prompt("Introduce nueva altura:",autobus1.setAltura()));


//-----------------------------------Coches
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
