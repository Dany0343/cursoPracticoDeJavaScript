//Este es el codigo del cuadrado

//Para mandar multiples mensajes en la consola
console.group("Cuadrado")

// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado);

function perimetroCuadrado(lado) {
    return lado * 4;
}
// console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado) {
    return lado * lado;
}
// console.log("El área del cuadrado es: " + areaCuadrado + "cm^2");

console.groupEnd();


//Código del triangulo
console.group("Triangulo");
// const ladoTriangulo = 5;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;


// console.log(
//     "Los lados del triangulo miden: " 
//     + ladoTriangulo 
//     + "cm, " 
//     + ladoTriangulo2 
//     + "cm, " 
//     + baseTriangulo 
//     + "cm"
// );

// const alturaTriangulo = 5.5;
// console.log("La altura del triangulo es: " + alturaTriangulo + "cm");

const perimetroTriangulo = ladoTriangulo + ladoTriangulo2 + baseTriangulo;
console.log("El perimetro del triangulo es: " + perimetroTriangulo+ "cm");

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("El área del triangulo es: " + areaTriangulo + "cm^2");

console.groupEnd();

//Código del circulo
console.group("Circulos");
//Radio
const radioCirculo = 4;
console.log("El radio del circulos es: " + radioCirculo + "cm");

//Diametro
const diametroCirculo = radioCirculo * 2;
console.log("El diametro del circulos es: " + diametroCirculo + "cm");

//PI
const PI = Math.PI;
console.log("PI es: " + PI);

//Circunferencia
const perimetroCirculo = diametroCirculo * PI;
console.log("El área del circulos es: " + perimetroCirculo + "cm");


//Area
const areaCirculo = PI * (radioCirculo * radioCirculo);
console.log("El área del circulos es: " + areaCirculo + "cm");

console.groupEnd();