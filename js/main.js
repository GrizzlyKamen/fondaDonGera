total = 0;
/*
1. Sandwich de pollo - 150 Sheintavos
2. Sandwich de carne - 200 Sheintavos
3. Sandwich vegetariano - 100 Sheintavos

a. Pan blanco c/ orégano y parmesano - 50
b. negro c/ avena - 60
c. s/gluten - 75
 */

let eleccion_sdwch = "pollo";

let tipo_pan = "s/gluten";

let queso = false;
let tomato = true;
let lechuga = true;
let cebolla = true;
let mayonesa = false;
let mustard = true;

if (eleccion_sdwch == "pollo") {
    total = 150;
} else if (eleccion_sdwch == "carne") {
    total = 200;
} else if (eleccion_sdwch == "veggie") {
    total = 100;
};

if (tipo_pan == "blanco"){
    console.log(`Su total es de ${total +50}`);
} else if (tipo_pan == "negro") {
    console.log(`Su total es de ${total + 60}.`);
}else if (tipo_pan == "s/gluten"){
    console.log(`Su total es de ${total + 75}.`);
};

if (queso == true){
    total += 20
};
if (tomato == true){
    total += 15
};
if (lechuga == true){
    total += 10
};
if (cebolla == true){
    total += 15
};
if (mayonesa == true){
    total += 5
};
if (mustard == true){
    total += 5
};