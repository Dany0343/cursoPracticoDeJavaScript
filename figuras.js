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
function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}
// console.log("El perimetro del triangulo es: " + perimetroTriangulo+ "cm");
function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}
// console.log("El área del triangulo es: " + areaTriangulo + "cm^2");

console.groupEnd();

//Código del circulo
console.group("Circulos");
//Radio
// const radioCirculo = 4;
// console.log("El radio del circulos es: " + radioCirculo + "cm");

//Diametro
function diametroCirculo(radio){
    return radio * 2;
}
// const diametroCirculo = radioCirculo * 2;
// console.log("El diametro del circulos es: " + diametroCirculo + "cm");

//PI
const PI = Math.PI;
// console.log("PI es: " + PI);

//Circunferencia
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}
// const perimetroCirculo = diametroCirculo * PI;
// console.log("El área del circulos es: " + perimetroCirculo + "cm");


//Area
function areaCirculo(radio) {
    return PI * (radio ** 2);
}
// const areaCirculo = PI * (radioCirculo * radioCirculo);
// console.log("El área del circulos es: " + areaCirculo + "cm");

console.groupEnd();


//Aquí interactuamos con el HTML 
//Cuadrado
function calcularPerimetroCuadrado() {
    const input = document.getElementById('InputCuadrado');
    const value = input.value;
    
    const perimetro = perimetroCuadrado(value)
    alert(perimetro);
}
function calcularAreaCuadrado() {
    const input = document.getElementById('InputCuadrado');
    const value = input.value;
    
    const area = areaCuadrado(value)
    alert(area);
}

//Triangulo 
function calcularPerimetroTriangulo() {
    const input = document.getElementById('InputTriangulo1');
    const input2 = document.getElementById('InputTriangulo2');
    const input3 = document.getElementById('InputTriangulo3');
    const value = parseFloat(input.value);
    const value2 = parseFloat(input2.value);
    const value3 = parseFloat(input3.value);

    
    const perimetro = perimetroTriangulo(value, value2, value3)
    alert(perimetro);
}
function calcularAreaTriangulo() {
    const input = document.getElementById('InputTriangulo1');
    const input2 = document.getElementById('InputTriangulo2');
    const input3 = document.getElementById('InputTriangulo3');

    const value = parseFloat(input.value);
    const value2 = parseFloat(input2.value);
    const value3 = parseFloat(input3.value);

    const altura = Math.sqrt((value2 ** 2) - ((value3 / 2) ** 2)); //Por pitagoras con la formula a = raiz(c^2 - b^2)
    const area = areaTriangulo(value3, altura)
    alert(area);
}

//Circulo

function calcularPerimetroCirculo() {
    const input = document.getElementById('InputCirculo');
    const value = parseFloat(input.value);
    
    const perimetro = perimetroCirculo(value)
    alert(perimetro);
}
function calcularAreaCirculo() {
    const input = document.getElementById('InputCirculo');
    const value = parseFloat(input.value);
    
    const perimetro = areaCirculo(value)
    alert(perimetro);
}