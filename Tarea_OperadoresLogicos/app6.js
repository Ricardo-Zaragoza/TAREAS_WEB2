// resultados para la tabla AND
let resultado1 = true && true;
let resultado2 = true && false;
let resultado3 = false && true;
let resultado4 = false && false;
// resultados para la tabla OR
let resultado5 = true || true;
let resultado6 = true || false;
let resultado7 = false || true;
let resultado8 = false || false;
// resultados para la tabla NOT
let resultado9 = !true;
let resultado10 = !false;

console.log("AND");
console.log("A B R");
console.log("1|1|1 -> " + resultado1);
console.log("1|0|0 -> " + resultado2);
console.log("0|1|0 -> " + resultado3);
console.log("0|0|0 -> " + resultado4);

console.log("OR");
console.log("A B R");
console.log("1|1|1 -> " + resultado5);
console.log("1|0|1 -> " + resultado6);
console.log("0|1|1 -> " + resultado7);
console.log("0|0|0 -> " + resultado8);

console.log("NOT");
console.log("A R");
console.log("1|0 -> " + resultado9);
console.log("0|1 -> " + resultado10);