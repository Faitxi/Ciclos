console.log("Je suis vivante");

/*

Condiciones: alterar el orden natural del codigo.
Estructura de control: controlar la ejecución del codigo.


Ciclos o bucles (Loops)
También conocidos como bucles, son estructuras que nos van a permitir ejecutar un bloque de codigo de forma repetida, hasta que se cumpla una condicion especifica.

Es importante usar ciclos para automatizar tareas repetitivas.

En JS existen los siguientes ciclos: 
    
    - while
    - do while
    - for


Iterar: proceso de repetir una secuencia de instrucciones.
Estructura de control: herramienta especial para crear algoritmos o programas mas dinamicos y flexibles.

*/


/*While: Ejecuta un bloque de codigo mientras se cumpla una condicion especifica. Este ciclo se repite mientras la condición sea verdadera, y el bloque de codigo se ejecuta siempre y cuando la condicion se mantenga. La condicion se evalua antes de cada interaccion.

while (condicion){
    //codigo que se ejecuta
}
*/


/*while(miCrushMeQuiere){
   console.log("Seré feliz");
}
*/

/* 
Analogía: Seguir una receta para preparar sopa

Lista de ingredientes: 
    - Zanahoria
    - Papas
    - Chayote
    - Agua
    - Espinaca


Vamos a agregar los ingredientes a la olla mientras tengamos ingredientes disponibles.

Paramos cuando ya no tengamos ingredientes.

*/
let capacidadPacientes = 15; 
let pacientesEnConsultorio = 10;


//Mientras 15 sea menor que 50
while(pacientesEnConsultorio < capacidadPacientes){
    //Seguire dando servicio
    console.log("Seguimos dando servicio");
    //aumento en uno mis pacientes
    pacientesEnConsultorio++;
}

//Mientras sea verdadero, se ejecuta la instrucción

/* Do while (hacer mientras)


//Se ejecuta la instrucción, mientras sea verdadero.

El bucle "do while" se diferencia del "while" ya que aquí se ejecuta la instruccion al menos una vez, y luego se pregunta para saber si se sigue ejecutando o no.

do{
    //codigo a ejecutar
}while (condicion);


Analogía: Cuando preparamos un pastel


*/

//Ejemplo de un consutorio dental

/*var contadorPacientes = 0;

do{
    var nombre = prompt ("Ingresa el nombre del paciente");
    if (contadorPacientes < 10) {
        console.log(nombre, " registrado con exito!");
        contadorPacientes ++;
    } else{
        console.log ("Limite excedido");
        break;
    }
}while (confirm("Desea registrar otro paciente?"));

console.log("Numero total de pacientes ", contadorPacientes);
*/

//////////////////////////////////
/*While: Primero pregunta y si es verdadero ejecuta. 
 Do While: Primero ejecuta, despues pregunta y si es verdadero, vuelve a ejecutar
*/


/* 
For
Se utiliza cuando conocemos el numero exacto de iteraciones que vamos a realizar.

consiste de tres partes fundamentales: 
    - Inicializacion: se ejecuta antes de que el bucle comience y se usa para establecer una variable de control (variable de inicio)
    - Condicion: es el detonante que verificamos antes de cada iteracion para saber si se sigue ejecutando o no (siempre y cuando sea verdadera)
    - Expresion de iteracion (contador): tiene la finalidad de modificar la variable de inicio y poder tener un punto de cierre.

    for (inicializacion; condicion; expresion de iteracion){
        //bloque de codigo a ejecutar
    }

*/

//Crea un codigo que imprima los numeros del 0 al 4

for (var valorInicial = 0; valorInicial<5; valorInicial++) {

    console.log(valorInicial);
}

//Version mas "comercial"
//for (var i = 0; i < 5, i+=5){
//   console.log(i);
//}

//Consultorio dental -  registro de citas con un for

let cantidadDeCitasDiarias = 5;

for(let i = 1; i <= cantidadDeCitasDiarias; i++) {
    var nombre = prompt ("Ingrese el nombre del paciente " + i);
    
    console.log("Paciente con cita " + nombre + i);

}
   
