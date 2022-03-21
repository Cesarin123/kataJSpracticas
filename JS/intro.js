// var x = prompt("Cual es tu edad?")
// var num1 = parseInt(x)

// num1 < 4 ? console.log("muy joven") : num1>=4 && num1<=99 ? console.log("Diviertete") : console.log("Lo siento pero para el domino no hay limite")

// if(num1 < 4){
//     console.log("Muy joven")
// }
//     else if(num1>=4 && num1 <=99){
//         console.log("Diviertete")
//     }
//     else{
//         console.log("Lo siento pero para el domino no hay limite")
//     }



// num1 < 4 ? console.log("muy joven") : num1>=4 && num1<=99 ? console.log("Diviertete") : console.log("Lo siento pero para el domino no hay limite")

// let animal = prompt("Ingresa un animal")

// switch(animal){
//     case "caballo":
//         console.log("Te gustan los caballos")
//         break;
//     case "perro":
//         console.log("Te gustan los perros")
//         break;
//     case "gato":
//         console.log("Te gustan los gato ")
//         break;
//     default:
//         console.log("Ingresa algun otro animal")
// }


// // Arnoldo le gustan mucho los números y quiere saber más de ellos, él denomina
// // números cool a los que son divisibles entre  y 5, el quiere crear un programa en el
// // cual el ingrese un número y le diga si es cool o no, ¿puedes ayudarlo?

// var numero = parseInt(prompt("Enter a number"))

// if(numero%5==0){
//     console.log("Tu numero es cool")
// }
// else{
//     console.log("tu numero no es cool")
// }

// // Humberto está repartiendo códigos por toda la ciudad. El quiere crear un programa
// // que cuando un usuario ingrese un código este despliegue un mensaje. Para el
// // código "happy" el quiere desplegar el mensaje "cool bro, the life is short" y para el
// // código "sad" él quiere, desplegar el mensaje "go for tacos bro, tacos = smile"
// // ** Desplegar el mensaje "código inválido" si el código no cumple con las condiciones anteriores

// var codigo = prompt("Enter a code string type")

// switch(codigo){
//     case "happy":
//         console.log("cool bro")
//         break;
//     case "sad":
//         console.log("go for tacos bro")
//         break;
//     default:
//         console.log("codigo invalido")
//         break;
// }

// // Paco está haciendo un videojuego y necesita hacer un programa que determine la
// // jerarquía de usuario de acuerdo a su nivel, las jerarquías son "paladin" : nivel 0 -10,
// // "caballero dorado" : nivel 11 - 30, "dios destructor": 31 - 50.

// var nivel = prompt("Enter you hierarchy type")

// switch(nivel){
//     case "paladin":
//         console.log("Tu nivel es de 0 -10")
//         break;
//     case "caballero dorado":
//         console.log("Tu nivel es de 11-30")
//         break;
//     case "dios destructor":
//         console.log("Tu nivel es de 31-50")
//         break;
// }

// // Crea una aplicación web empleando JavaScript que permita a dos usuarios jugar una partida de piedra, papel o tijeras.

// // Pide al jugador1 y al jugador2 que escriban su elección mediante prompts. Compara los valores ingresados y muestra en pantalla, mediante un alert o console.log, quién fue el jugador ganador. && ||
// let a = prompt("Enter piedra, papel o tijera")
// let b = prompt("Enter piedra, papel o tijera")

// if(a=="piedra" && b=="piedra" || a=="papel" && b=="papel" || a=="tijera" && b=="tijera"){
//     console.log("Tie, try playing again")
// }
// else if(a=="papel" && b=="piedra" || a=="piedra" && b=="tijera" || a=="tijera" && b=="papel"){
//     console.log("jugador 1 gana")
// }
// else if(a=="piedra" && b=="papel" || a=="tijera" && b=="piedra" || a=="papel" && b=="tijera"){
//     console.log("jugador 1 gana")
// }
// else{
//     "Enter a valid choice"
// }

// // Crea una aplicación web con JavaScript que reciba tres números digitados por el usuario, mediante prompts, y muestre en pantalla, mediante un alert, cuál es el mayor de los tres números. 

// let a = prompt("Enter number 1")
// let b = prompt("Enter number 2")
// let c = prompt("Enter number 3")

// if(a>b && b>c){
//     alert("Number " + a + " is greater")
// }
// else if(b>a && b>c){
//     alert("Number " + b + " is greater")
// }
// else if(c>a && c>b){
//     alert("Number " + c + " is greater")
// }


// function * largest(arreglo){
//     for (const iterator of arreglo) {
//         yield iterator;
//     }
// }

// let generador =  largest([1,23,413,45]);

// for (const valor of generador) {
//     console.log(valor);
// }

// function largest(arreglo){
//     var largo = 0;
//     for(i=0; i<=largo;i++){
//         if(arreglo[i]>largo){
//             var largo = arreglo[i];
//         }
//     }
//     return largo;
// }

// function letter(letra){
//     if(letra.length == 1){
//         if(letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
//             console.log('Vocal')}
//             else{
//                 console.log("Consonante")
//             }
//         }
// }


// function game(input1, input2){
// if(input1 && input2 == 'Piedra', 'Papel', 'Tijera'){
//     if(input1=="Piedra" && input2=="Piedra" || input1 =="Papel" && input2=="Papel" || input1=="Tijera" && input2=="Tijera"){
//         console.log("Empate")
//     }
//     else if(input1=="Papel" && input2=="Piedra" || input1=="Piedra" && input2=='Tijera' || input1=="Tijera" && input2=="Papel"){
//         console.log("J1")
//     }
//     else if(input1=="Piedra" && input2=="Papel" || input1=="Tijera" && input2=="Piedra" || input1=="Papel" && input2=="Tijera"){
//         console.log("J2")
//     }
// }
// }

// function isEqual(para1, para2){
//     let equal = false
//     if(para1 == para2){
//         equal = true
//     }
//     else{
//         equal = false
//     }
//     return equal;
// }


// function isEqual(para1, para2){
//     let equal = false
//     if(para1 == para2){
//         equal = true
//     }
//     else if(typeof(para1) != typeof(para2)){
//         equal = false
//     }
//     else{
//         equal = false
//     }
//     return equal;
// }

// function isEqual(para1, para2){
//     let equal = false
//     if(typeof(para1) == typeof(para2)){
//         if(para1 == para2){
//             equal = true
//         }
//     }
//     else{
//         equal = false
//     }
//     return equal
// }



// const alumnos = []
// var nuevoAlumno = prompt("Quieres agregar un nuevo alumno?")
// while(nuevoAlumno == 'si'){
//     alumnos.push({
//     nombre: prompt('Nombre del alumno'),
//     apellido: prompt("Apellido del alumno")
//     });

//     nuevoAlumno = prompt("Quieres agregar un nuevo alumno?")

// }



// var grades = [10, 9, 4, 4.4, 8, 3.8]
// var count = grades.length
// for(i = 0 ;i < count; i++){
//     let sum =+ grades[i]
//     let average = sum / count;
// }

// //funcion para regresar el promedio de un array

// function average(grades){
//     let suma = 0;
//     var size =  grades.length
//     for(i=0; i < size; i++){
//         suma = suma + grades[i];
//     }
//     return suma / size;
// }

// //funcion para obtener el numero mayor de un array 

// function getMax(grades){
//     m = 0;
//     n = grades.length;
//     for(let i = 0; i < n; i++){
//         if(grades[i] > m){
//             m = grades[i];
//         }
//     }
//     return m;
// }

// //otra opcion 
// function getMax(grades){
//     var sorted = grades.sort(function(a, b){return a - b})
//     console.log(sorted)
//     let max =  sorted[sorted.length -1]

//     return max;
// }


// //funcion para obtener el numero menor de un array

// function getMin(grades){
//     m = Infinity;
//     n = grades.length;
//     for(let i = 0; i < n; i++){
//         if(grades[i] < m && grades[i] != 0) {
//             m = grades[i];
//         }
//     }
//     return m;
// }

// //otra opcion
// function getMin(grades){
//     var sorted = grades.sort(function(a, b){return a - b})
//     console.log(sorted)
//     let min =  sorted[0]

//     return min;
// }

// //funcion para la serie de fibonacci

// function fibonacci(limit){
//     var serie = [0, 1];

//     for(var i = 2; i < limit; i++){
//         serie[2] + serie[1]
//         serie.push(serie[i-1] + serie[i-2])
//     }
//     return serie;
// }

// function fibonacci(limit){
//     var a, b, res;
//     a = 0;
//     b = 1;
//     var arr = []

//     for(var i = 2; i<=limit; i++){
//         res = a +b;
//         a = b;
//         b =  res;
//         arr.push(a);
//     }
//     return arr;
// }



// function days(){
//     let weekDays = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes",
// "sabado", "domingo"]
//     for(let i = 0; i < weekDays.length; i++){
//         console.log(weekDays[i])
//     }
// }

// function sum(a, b){
//     console.log("Tus numeros son:" + a + ", " + b)
//     let suma = a + b
//     return suma;
// }

// function longitud(arr){
//     let long = arr.length
//     return long;
// }
// function pyramidPrint(iterations){
//     let str = ' ';
//     for(let i = 1; i <= iterations; i++){

//     }
// }

// let str = '';
// for(let i = 1; i <= 5; i++){
//     for(let j = 1; j <=5 -i; j++){
//         str+=' ';
//     }
//     for(let k = 0; k < 2 * i-1; k++){
//         str += "*"
//     }
//     str += "\n"
// }
// console.log(str)

// function mayorMenor(a){
//     if(a > 0){
//         console.log("Tu numero es positivo")
//     }
//     else if(a > 0){
//         console.log("Tu numero es negativo")
//     }
//     else{
//         console.log("Tu numero es cero")
//     }
// }

// function ahorros(cliente, ahorro){
//     console.log("Cliente: " + cliente)
//     let abono = parseInt(ahorro)
//     console.log("Fonodos en ahorros: " + abono);
// }

// function perimetro(base, altura){
//     let resultado = (parseInt(base)*2) + parseInt(altura)
//     console.log(resultado)
// }

// function area(base, altura){
//     let resultado = (parseInt(base) * parseInt(altura))/2
//     console.log(resultado)
// }

// function mayor(a, b){
//     if(a > b){
//         return a
//     }
//     else if(b > a){
//         return b
//     }
//     else{
//         console.log("Your numbers are equal")
 
//    }
// }

// function menor(a, b){
//     if(a > b){
//         return b
//     }
//     else if(b > a){
//         return a
//     }
//     else{
//         console.log("Your numbers are equal")
 
//    }
// }

// function parImpar(number){
//     if(number%2 == 0){
//         console.log("numero par")
//     }
//     else if(number%2 != 0){
//         console.log("numero impar")
//     }
// }

// function moreChars(string1, string2, string3){
//     let resultado =  null;
//     if(string1.length > string2.length && string1.length > string3.length){
//         resultado = string1;
//     }
//     else if(string2.length > string1.length && string2.length >  string3.length){
//         resultado = string2;
//     }
//     else if(string3.length > string2.length && string3.length > string1.length){
//         resultado = string3;
//     }
//     else{
//         return "string iguales"
//     }
//     return resultado
// }

// function power3(numero){
//     let resultado = Math.pow(3, parseInt(numero))
//     return resultado;
// }


// function countAs(string){
//     var res = 0
//     for(let i = 0; i < string.length; i++){
//         console.log(string[i])
//         if(string[i] == 'a'){
//             res += string[i+1]
//         }
//         console.log(res)
//     }
//     return res
// }


// function numberDetect(arr){
//     const arreglo = [];
//     let largo = arr.length
//     for(let i = 0; i < largo; i++){
//         console.log(arr[i])
//         if(typeof(arr[i]) == 'number '){
//             arreglo.push(arr[i])
//         }
//     }
//     return arreglo
// }

// function primesTo(numero){
//     const resultado = [];
//     for(let i=0; i<=numero; i++){
//         if(i % 2 == 0){
//             resultado.push(i)
//         }
//     }
//     return resultado
// }

// function randomNum(){
//     var resultado = Math.round(Math.random() * 100)
//     if(resultado > 100){
//         resultado =  resultado / 10
//     }
//     return resultado
// }

    // function codificarMensaje(palabra) {

    //     let palabraArray = palabra.split('');
    //     for(let i = 0; i < palabraArray.length; i++) {
    //         if(palabraArray[i] === 'a') {
    //             palabraArray[i] = 4;
    //         } else if(palabraArray[i] === 'e') {
    //             palabraArray[i] = 3
    //         } else if(palabraArray[i] === 'i') {
    //             palabraArray[i] = 7
    //         } else if(palabraArray[i] === 'o') {
    //             palabraArray[i] = 6
    //         } else if(palabraArray[i] === 'u') {
    //             palabraArray[i] = 2
    //         }
    //     }
    //     return palabraArray.join('');
    // }

    // let a = 'hola'
    // console.log(codificarMensaje(a))


////////////////////////////////////////////////////////////////    

const colores = ['amarillo', 'verde', 'rojo']

for(let i=0; i<colores.length; i++){
    console.log(colores[i]);
}


 ////////////////////////////////// code for the challenge ////////////
function semaforo(color){
    for(let i=0; i<colres.length; i++){
        if(color == 'rojo') setTimeout(semaforo(colores[i],5000)); 
        if(color == 'verde') return 'amarillo';
        if(color == 'amarillo') return 'rojo';
}}

function semaforoMain(colorActual){
        if(colorActual == 'rojo') document.write("<img src= 'https://img2.freepng.es/20180322/yre/kisspng-traffic-light-green-light-clip-art-light-5ab46e1724d6b0.9948514815217741031509.jpg' >")
        if(colorActual == 'verde') document.write("<img src= 'https://e7.pngegg.com/pngimages/248/656/png-clipart-traffic-light-computer-icons-amber-photography-desktop-wallpaper.png' >");
        if(colorActual == 'amarillo') document.write("<img src= 'https://e7.pngegg.com/pngimages/356/790/png-clipart-round-red-logog-traffic-light-computer-icons-red-red-light-color-light.png' >")
}

function main(){
    semaforoMain('rojo');
    setTimeout(()=>{
        semaforoMain('verde');
        setTimeout(()=>{
            semaforoMain('amarillo');
            setTimeout(main, 2000);

        }, 2000)
    }) 
}

// main();

////////////////////////////////////////////////// until here

// clearInterval(main())

// function semaforo(colorActual){
//     for(let i=0; i<colores.length; i++){
//         if(colorActual == 'rojo') setTimeout(semaforo(colores[i], 5000)); document.write("<img src= 'https://img2.freepng.es/20180322/yre/kisspng-traffic-light-green-light-clip-art-light-5ab46e1724d6b0.9948514815217741031509.jpg' >")
//         if(colorActual == 'verde') setTimeout(semaforo(colores[i], 5000)); document.write("<img src= 'https://e7.pngegg.com/pngimages/248/656/png-clipart-traffic-light-computer-icons-amber-photography-desktop-wallpaper.png' >");
//         if(colorActual == 'amarillo') setTimeout(semaforo(colores[i], 5000)); document.write("<img src= 'https://e7.pngegg.com/pngimages/356/790/png-clipart-round-red-logog-traffic-light-computer-icons-red-red-light-color-light.png' >")
// }}

// function cambio(starting){
//     colores.forEach(color => {
//        setInterval(semaforo(color),2000);
//     });
// }

//semaforo('verde'); 

function timinImages(){
    for(let i=0; i<colores.length; i++){
        setTimeout(semaforo(colores[i]), 5000)

        // console.log("hola, repitiendo")
}}

// timinImages();


// clearInterval(cambio(), 1000)





/////////////////////////////////////////////


function imprimeHola() {
    	document.write("Hola, estoy probando algo")
}
    
function detente(intervalo) {
    	clearInterval(intervalo)
    	console.log("Listo!")
}

// setInterval(imprimeHola,1000)
    
// setTimeout(detente(intervalo),5000)

let identificadorTiempoDeEspera;

function temporizadorDeRetraso() {
  identificadorTiempoDeEspera = setTimeout(funcionConRetraso, 3000);
}

function funcionConRetraso() {
  alert("Han pasado 3 segundos.");
}

// funcionConRetraso()

let identificadorIntervaloDeTiempo;

function repetirCadaSegundo() {
  identificadorIntervaloDeTiempo = setInterval(mandarMensaje, 1000);
}

function mandarMensaje() {
  console.log("Ha pasado 1 segundo.");
}

// repetirCadaSegundo(); 

let repetidor;
function repeat(){
    repetidor = setInterval(randomNumber,2000)
}

function randomNumber(){
    let numero = Math.randomNumber
    console.log('hola que tal');
}

// repeat();




