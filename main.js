/*alert("Hola Mundo");*/

var name = "arandom";
var height = 189;
var concat = " ";

/*
var dataComplete = name + concat + height;

var data = document.getElementById("dataComplete");
data.innerHTML = dataComplete;

var dataDos = document.getElementById("data");
dataDos.innerHTML = `
    <h1> Soy la caja de datos</h1>
        <h2>Mi nombre es: ${name}</h2>
        <h3>Mido: ${height} cm</h3>
`;

if (height >= 190) {
    dataDos.innerHTML += '<h1>Eres una persona ALTA</h1>';
} else {
    dataDos.innerHTML += '<h1>Eres una persona BAJITA</h1>';
}

for (var i = 2000; i <= 2020; i++) {
    //bloque instrucciones
    dataDos.innerHTML += "<h2>Estamos en el año: " + i + "</h2>";
}
*/

function MuestraMiNombre(name, height) {
    var misDatos = `
    <h1> Soy la caja de datos</h1>
        <h2>Mi nombre es: ${name}</h2>
        <h3>Height: ${height} cm</h3>
    `;

    return misDatos;
}

function imprimir() {
    var dataDos = document.getElementById("data");
    dataDos.innerHTML = MuestraMiNombre("Arandom xiv", 190);
}

imprimir();

var nombres = ['Adrian','Montero','Darker'];

document.write('<h1>List of names</h1>');

/*
for(var i=0; i<nombres.length; i++){
    document.write(nombres[i] + '<br/>');
    alert(nombres[i]);
}
*/

/*
nombres.forEach(function(nombre){
    document.write(nombre + '<br/>');
    alert(nombre);
});
*/
nombres.forEach(nombre => {
    document.write(nombre + '<br/>');
    alert(nombre);
});

var coche={
    marca: "Mecedes",
    modelo: "Classe A",
    antiguedad: 2020,

    mostrarDatos(){
        console.log(this.marca,this.modelo,this.antiguedad)
    }
    
}

document.write("<h1>"+coche.marca+"</h1>")
coche.mostrarDatos();
console.log(coche);

const saludar = new Promise((resolve, reject) => {
    
    setTimeout(() => {
        let saludo = "Hola muy buenas a todos chavales!!!";
        //saludo = false;
        if(saludo){
            resolve(saludo);
        }else{
            reject('No hay saludo disponible');
        }

    }, 2000);

});

saludar.then(resultado => {
    alert(resultado);
})
.catch(err => alert(err));
