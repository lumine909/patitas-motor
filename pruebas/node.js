const Nodo = require("../src/Node.js");

const atencion = new Nodo({

fecha: "02/02",
motivo: "vacunación",
veterinario: "Dra. Ríos",
costo: "85000",

});

const atencion2 = new Nodo({

fecha: "15/03",
motivo: "control de peso",
veterinario: "Dr. Gómez",
costo: "40000",

});

const atencion3 = new Nodo({

fecha: "20/05",
motivo: "limpieza dental",
veterinario: "Dra. Ríos",
costo: "150000",
});

atencion.siguiente = atencion2;
atencion2.siguiente = atencion3;
atencion3.siguiente = null;

let actual = atencion;
while (actual !== null) {
    console.log(actual.data);
    actual = actual.siguiente;
}

let acumulador = 0;
actual = atencion;
while (actual !== null) {
    acumulador += Number(actual.data.costo);
    actual = actual.siguiente;
}
console.log("Total acumulado:", acumulador);