// Arrays en JS

const arregloLiteral  = new Array(100);
const arreglo  = [1,2,3,4];
// arreglo.push(1)
// arreglo.push(5)
// arreglo.push(10)
// arreglo.push(15)
// arreglo.push(20)

let arreglo2 = [...arreglo, 5];
// arreglo2.push(5);

const arreglo3 = arreglo2.map((num)=>num*2);

console.log(`arreglo`, arreglo)
console.log(`arreglo3`, arreglo3)
console.log(`arreglo2`, arreglo2)