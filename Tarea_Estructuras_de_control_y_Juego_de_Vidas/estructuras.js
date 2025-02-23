/** 
if (condicion){
    ejecuta algo si la condicion es true
}
fin del programa
*/

/** 
if (condicion){
    ejecuta si la condicion true
}else{
    ejecuta si la condicion es false
}
*/
let palabra = prompt("Ingresa el nombre de tu escuela");
if(palabra == "UNAM"){
    console.log("Palabra  correcta");
    
}else {
    console.log("Error");
}


let numero = prompt("Ingresa un numero");
if(numero == 10){
    console.log("Bien :3");
    console.log(typeof numero)
}

let dato =  prompt("Ingresa un dato");
if(dato === 10){
    console.log("Bien :3");
}else {
    console.log("No se puede bb por que es:"+typeof dato);
}

let opcionUser = prompt(`
        Elija una opcion:
        1.-  Libro
        2.- Pelicula
        3.- Juego
    `);
switch (opcionUser){
    case "1":
        console.log("Principito");
        break;
    case "2":
        console.log("Matrix");
        break;
    case "3":
        console.log("AOE");
        break;
    default:
        console.log("Opcion no valida");
        break;
}

let numero1 = 0;
while(numero1 <=10){
   console.log("Numero = "+numero1);
   numero1++;
}