/*Ejercitación:
En cada ejercicio utilizar console.log() o alert() para visualizar el resultado en pantalla o
en consola.
 */

//1. Crear una variable llamada miNombre y guardar en ella su primer nombre.

let miNombre = "Richard"


//2. Crear una variable llamada miApellido y guardar en ella su apellido.

let miApellido = "Roa"

//3. Crear una variable llamada miEdad y guardar en ella su edad.

let miEdad = 24

//4. Crear una variable llamada miMascota y guardar en ella el nombre de su mascota.

let miMascota = "Mia"

//5. Crear una variable llamada edadMascota y guardar en ella la edad de la mascota.

let edadMascota = 3

/*6. Visualizar todas las variables dentro de la consola del navegador escribiendo el
nombre de cada una de ellas.*/
console.log("Ejercicio 6")
console.log(miNombre)
console.log(miApellido)
console.log(miEdad)
console.log(miMascota)
console.log(edadMascota)

/*7. Crear una variable llamada nombreCompleto y guardar en ella la concatenación de
miNombre y miApellido.*/
console.log("Ejercicio 7")
let nombreCompleto = miNombre+miApellido
console.log(nombreCompleto)
/*8. Crear una variable llamada textoPresentacion y guardar en ella un texto
comprendido con todas las variables creadas hasta el momento.*/
console.log("Ejercicio 8")
let textoPresentacion=("Hola "+miNombre+" "+miApellido+" con edad de "+miEdad+" años y su mascota "+miMascota+" con edad de "+edadMascota+" años")
console.log(textoPresentacion)
/*9. Crear una variable sumaEdades, restaEdades, productoEdades, divisionEdades y
calcular sus respectivas operaciones con las variables miEdad y edadMascota.*/
console.log("Ejercicio 9")
let sumaEdades = miEdad+edadMascota
let restaEdades= miEdad-edadMascota
let productoEdades = miEdad*edadMascota
let divisionEdades = miEdad/edadMascota

console.log(sumaEdades)
console.log(restaEdades)
console.log(productoEdades)
console.log(divisionEdades)
/*10. Realizar la carga de las variables del punto 1 al 5 utilizando prompt() y luego
ejecutar el código correspondiente para realizar los puntos del 6 al 9 con los datos
cargados.*/

// 10.11. Pedir al usuario que ingrese su primer nombre
miNombre = prompt("Ingrese su primer nombre:")

// 10.2. Pedir al usuario que ingrese su apellido
miApellido = prompt("Ingrese su apellido:")

// 10.3. Pedir al usuario que ingrese su edad
miEdad = parseInt(prompt("Ingrese su edad:"))

// 10.4. Pedir al usuario que ingrese el nombre de su mascota
miMascota = prompt("Ingrese el nombre de su mascota:")

// 10.5. Pedir al usuario que ingrese la edad de su mascota
edadMascota = parseInt(prompt("Ingrese la edad de su mascota:"))


/*11. Crear un objeto llamado alumno con un mínimo de 5 propiedades, mostrar dicho
objeto utilizando console.table() y también mostrar cada una de las propiedades
del objeto por separado*/
// Crear objeto alumno
let alumno = {
    nombre: "Richard",
    edad: 24,
    curso: "Programación",
    promedio: 4.5,
    asistencias: 90,
}  
  // Mostrar objeto utilizando console.table()
  console.table(alumno)
  
  // Mostrar cada propiedad por separado
  console.log("Datos del Alumno")
  console.log("Nombre: ", alumno.nombre)
  console.log("Edad: ", alumno.edad)
  console.log("Curso: ", alumno.curso)
  console.log("Promedio: ", alumno.promedio)
  console.log("Asistencias: ", alumno.asistencias)
  