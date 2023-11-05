//Ejercitación:
/*1. Realizar un programa que dado 2 números imprima por consola si el primer numero es 
mayor que el segundo.*/

/* let num1 = 1
let num2 = 2

if (num1 > num2) {
    console.log(num1 + " es mayor que " + num2)
} else {
    console.log(num2 + " es mayor que " + num1)
} */

/*2. Realizar un programa que dado 2 números imprima por consola si los numeros son 
iguales o si son diferentes.*/
/* let num3 = 1
if (num1 != num2) {
    console.log(num1 + " es diferente de " + num2)
}
if (num1 == num3) {
    console.log(num1 + " es igual a " + num3)
} */
/*3. Realizar un programa que dado 2 números imprima por consola cual de los 2 numeros 
es el mas grande o si son iguales.*/
/* let num4 = 4
let num5 = 5

if (num4 > num5) {
    console.log(num4 + " es mayor que " + num5)
} else if (num4 < num5) {
    console.log(num5 + " es mayor que " + num4)
} else {
    console.log("los numeros son iguales")
} */

/*4. Realizar un programa que dado 3 números imprima por pantalla cual de los 3 es el mas 
chico.*/
/* let num6 = 8
if (num1 > num2 && num1 > num8) {
    console.log(num1 + " es mayor que " + num2 + " y " + num6)
} else if (num2 > num1 && num2 > num6) {
    console.log(num2 + " es mayor que " + num1 + " y " + num6)
} else if (num6 > num1 && num6 > num2) {
    console.log(num6 + " es mayor que " + num1 + " y " + num2)
} */
/*5. Realizar un programa que dado 2 objetos representando personas con las propiedades 
nombre, edad y altura imprima por pantalla cual de las 2 personas es la mas alta y cual 
es la de mayor edad.*/
/* let persona1 = {
    nombre: "Richard",
    edad: 24,
    altura: 182
}
let persona2 = {
    nombre: "Joaquin",
    edad: 22,
    altura: 170
}

if (persona1.altura > persona2.altura) {
    console.log(persona1.nombre + " es mas alto que " + persona2.nombre)
} else if (persona1.altura < persona2.altura) {
    console.log(persona2.nombre + " es mas alto que " + persona1.nombre)
}else{console.log("Las Personas miden igual")}

if (persona1.edad > persona2.edad) {
    console.log(persona1.nombre + " es mayor que " + persona2.nombre)
} else if (persona1.edad < persona2.edad) {
    console.log(persona2.nombre + " es mayor que " + persona1.nombre)
} */
/*6. Realizar un programa que permita ingresar por pantalla tu nombre, edad, altura, visión 
y permita determinar si estas capacitado para conducir. La persona deberá cumplir con 
una edad mínima de 18 años, medir mas de 150cm y tener una visión de 8 de 10 como 
mínimo.*/
/*
let nombre = prompt("Nombre: ")
let edad = prompt("Edad: ")
let altura = prompt("Altura: ")
let vision = prompt("Vision: ")

if (edad >= 18) {
    if (altura > 150) {
        if (vision >= 8) {
            console.log("El Sr "+nombre+" se encuentra capacitado para conducir")
        }
    }
}*/
/*7. Realizar un programa que permita el ingreso de los siguientes datos: Nombre, pase 
(vip o normal), si posee entrada (si o no, s o n, true o false). Las personas que posean 
tu mismo nombre tienen ingreso libre así como también los que posean un pase vip, 
mostrar un mensaje de bienvenida. Si posee entrada preguntar si desea utilizarla, en 
caso afirmativo mostrar mismo mensaje de bienvenida. Y por ultimo de no tener el 
mismo nombre o poseer un pase vip o entrada, preguntar si desea comprar, caso 
afirmativo solicitar dinero disponible, si posee $1000 o mas, mostrar mensaje de venta 
de entrada y bienvenida, caso contrario mostrar mensaje de rechazo de venta, y en 
caso contrario a no querer comprar, mostrar mensaje de despedida.*/
/*
let nombre = prompt("Ingrese nombre: ")
let entrada = prompt("Posee entrada?: ")
let pasevip = prompt("Vip o normal?: ")

if (nombre === "Richard" || pasevip === "vip") {
    console.log("Bienvenido, tienes ingreso libre")
    console.log("awwww te llamas " + nombre)
} else if (nombre !== "Richard") {
    let comprarEntrada = prompt("¿Desea comprar una entrada? (si/no):").toLowerCase()

    if (comprarEntrada === "si") {
        let dineroDisponible = parseFloat(prompt("Ingrese la cantidad de dinero disponible:"))

        if (dineroDisponible >= 1000) {
            console.log("¡Venta de entrada realizada! ¡Bienvenido!")
        } else {
            console.log("Lo siento, no tienes suficiente dinero para comprar una entrada.")
        }
    } else {
        console.log("Gracias por tu visita. ¡Hasta luego!")
    }
} * /

/*8. Realizar un juego de adivinanza estableciendo un valor entre 1 y 10 en una variable 
llamada numeroIncognita y que permita en 3 intentos adivinar el numero. El usuario 
deberá ingresar un numero del 1 al 10 por pantalla en 3 intentos el cual se deberá 
guardar en una variable llamada numeroIngresado, y en cada intento deberás
mostrarle un mensaje al usuario diciendo: “el numero ingresado es mayor, vuelve a 
intentarlo” o “el numero ingresado es menor, vuelve a intentarlo” o en caso de 
adivinar, un mensaje que diga: “Ganaste, haz adivinado el numero.” No te preocupes si 
usas mucho código repetido, mas adelante veraz como realizar este juego de manera 
mas eficiente.*/

/*
let numeroIncognita = Math.floor(Math.random() * 10) + 1 // Número aleatorio entre 1 y 10
let numeroIngresado = parseInt(prompt("Intento 1: Ingresa un número del 1 al 10"))
if (numeroIngresado === numeroIncognita) {
    console.log("¡Ganaste, has adivinado el número!")
} else {
    if (numeroIngresado < numeroIncognita) {
        console.log("El número ingresado es menor. Vuelve a intentarlo.")
    } else {
        console.log("El número ingresado es mayor. Vuelve a intentarlo.")
    }

    numeroIngresado = parseInt(prompt("Intento 2: Ingresa un número del 1 al 10"))
    if (numeroIngresado === numeroIncognita) {
        console.log("¡Ganaste, has adivinado el número!")
    } else {
        if (numeroIngresado < numeroIncognita) {
            console.log("El número ingresado es menor. Vuelve a intentarlo.")
        } else {
            console.log("El número ingresado es mayor. Vuelve a intentarlo.")
        }

        numeroIngresado = parseInt(prompt("Intento 3: Ingresa un número del 1 al 10"))
        if (numeroIngresado === numeroIncognita) {
            console.log("¡Ganaste, has adivinado el número!")
        } else {
            console.log("¡Agotaste tus intentos! El número era " + numeroIncognita)
        }
    }
} * /

/*9. Crear un programa que permita ingresar tu edad y decir si eres un infante (0 a 12 
años), adolescente(13 a 18 años), un mayor joven (19 a 45 años) o un anciano (mas de 
45 años), y en caso de ingresar una edad mayor a 100 mostrar un mensaje 
preguntando si en realidad tiene esa edad.*/
/*let edad = parseInt(prompt("Ingrese su edad:"))

if (edad >= 0 && edad <= 12) {
    console.log("Eres un infante.")
} else if (edad >= 13 && edad <= 18) {
    console.log("Eres un adolescente.")
} else if (edad >= 19 && edad <= 45) {
    console.log("Eres un mayor joven.")
} else if (edad > 45 && edad <= 100) {
    console.log("Eres un anciano.")
} else {
    let confirmacion = confirm("¿Realmente tienes " + edad + " años?")
    if (confirmacion) {
        console.log("Wow, eres una persona ")
    } else {
        console.log("¡Entendido! Ingresa una edad válida la próxima vez.")
    }
}*/

/*10. Crear un programa que permita el ingreso de “PIEDRA”, “PAPEL” o “TIJERAS” a 2 
jugadores y muestre en pantalla cual de los 2 ha ganado o si han empatado. En caso de 
algún ingreso incorrecto mostrar por pantalla que uno de los jugadores ha hecho 
trampa.*/
/*
let jugador1 = prompt("Jugador 1, ingresa PIEDRA, PAPEL o TIJERAS:").toUpperCase();
let jugador2 = prompt("Jugador 2, ingresa PIEDRA, PAPEL o TIJERAS:").toUpperCase();

if (jugador1 === "PIEDRA" || jugador1 === "PAPEL" || jugador1 === "TIJERAS") {
    if (jugador2 === "PIEDRA" || jugador2 === "PAPEL" || jugador2 === "TIJERAS") {
        if (jugador1 === jugador2) {
            console.log("¡Empate!");
        } else if (
            (jugador1 === "PIEDRA" && jugador2 === "TIJERAS") ||
            (jugador1 === "PAPEL" && jugador2 === "PIEDRA") ||
            (jugador1 === "TIJERAS" && jugador2 === "PAPEL")
        ) {
            console.log("¡Jugador 1 ha ganado!")
        } else {
            console.log("¡Jugador 2 ha ganado!")
        }
    } else {
        console.log("Jugador 2 ha hecho trampa. Ingresa PIEDRA, PAPEL o TIJERAS.")
    }
} else {
    console.log("Jugador 1 ha hecho trampa. Ingresa PIEDRA, PAPEL o TIJERAS.")
} */

/*11. Realizar un programa que permita el ingreso de un color y utilizando “switch” mostrar 
por pantalla los siguientes mensajes según las opciones: Blanco o Negro: Falta de 
color, Verde: El color de la naturaleza, Azul: El color del agua, Amarillo: El color del sol, 
Rojo: El color del fuego, Marrón: el color de la tierra, y para cualquier otro valor: 
Excelente elección, no lo teníamos pensado.*/

let color = prompt("Ingrese un color:").toLowerCase();

switch (color) {
    case "blanco":
    case "negro":
        console.log("Falta de color")
        break;
    case "verde":
        console.log("El color de la naturaleza")
        break;
    case "azul":
        console.log("El color del agua")
        break;
    case "amarillo":
        console.log("El color del sol")
        break;
    case "rojo":
        console.log("El color del fuego")
        break;
    case "marron":
        console.log("El color de la tierra")
        break;
    default:
        console.log("Excelente elección, no lo teníamos pensado.")
}

/*12. Realizar un programa que permita el ingreso de 2 valores numéricos y una operación. 
Según sea la operación ingresada (suma, resta, multiplicación, división) el programa 
deberá mostrar en pantalla un mensaje junto con el resultado. En caso de haber 
elegido división realizar la operación siempre que sea posible o mostrar un mensaje de 
ERROR si el divisor ingresado fue 0.*/
/*
let valor1 = parseFloat(prompt("Ingrese el primer valor numérico:"))
let valor2 = parseFloat(prompt("Ingrese el segundo valor numérico:"))
let operacion = prompt("Ingrese la operación (suma, resta, multiplicacion, division):").toLowerCase()

let resultado

switch (operacion) {
    case "suma":
        resultado = valor1 + valor2
        console.log("La suma de " + valor1 + " y " + valor2 + " es: " + resultado)
        break;
    case "resta":
        resultado = valor1 - valor2
        console.log("La resta de " + valor1 + " y " + valor2 + " es: " + resultado)
        break;
    case "multiplicacion":
        resultado = valor1 * valor2
        console.log("La multiplicación de " + valor1 + " y " + valor2 + " es: " + resultado)
        break;
    case "division":
        if (valor2 !== 0) {
            resultado = valor1 / valor2
            console.log("La división de " + valor1 + " entre " + valor2 + " es: " + resultado)
        } else {
            console.log("ERROR: No es posible dividir entre 0.")
        }
        break;
    default:
        console.log("Operación no válida. Por favor, ingrese suma, resta, multiplicacion o division.")
}*/


/*13. Crear un programa que permita ingresar todos los datos de tu documento nacional de 
identidad, mostrar por pantalla un mensaje que imprima todos los datos ingresados y 
pregunte si están correctos los mismos. En caso afirmativo, crear un objeto llamado 
dni con todos los datos ingresados y mostrarlos por consola con console.table() mas un 
mensaje de registro exitoso, en caso de que la persona rechace confirmar los datos, 
mostrar un mensaje que diga: vuelva a intentarlo en 1 mes*/
/*
let nombre = prompt("Ingrese su nombre:")
let apellido = prompt("Ingrese su apellido:")
let fechaNacimiento = prompt("Ingrese su fecha de nacimiento (DD/MM/AAAA):")
let numeroDocumento = prompt("Ingrese su número de documento:")
let genero = prompt("Ingrese su género:")
let nacionalidad = prompt("Ingrese su nacionalidad:")

// Mostrar todos los datos ingresados
console.log("Datos ingresados:")
console.log("Nombre: " + nombre)
console.log("Apellido: " + apellido)
console.log("Fecha de nacimiento: " + fechaNacimiento)
console.log("Número de documento: " + numeroDocumento)
console.log("Género: " + genero)
console.log("Nacionalidad: " + nacionalidad);

// Preguntar si los datos son correctos
let confirmarDatos = confirm("¿Los datos ingresados son correctos?")

if (confirmarDatos) {
    // Crear un objeto llamado dni con los datos ingresados
    let dni = {
        Nombre: nombre,
        Apellido: apellido,
        FechaNacimiento: fechaNacimiento,
        NumeroDocumento: numeroDocumento,
        Genero: genero,
        Nacionalidad: nacionalidad
    }

    // Mostrar el objeto dni con console.table() y mensaje de registro exitoso
    console.table(dni)
    console.log("¡Registro exitoso!")
} else {
    console.log("Vuelva a intentarlo en 1 mes.")
} */