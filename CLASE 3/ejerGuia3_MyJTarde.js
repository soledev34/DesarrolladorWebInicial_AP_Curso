/**
4- Generar una función que le ingrese por parámetro el valor del lado de un cuadrado calcular su perímetro, su superficie, e informar los mismos en consola
*/

function calcularPerSup(param) {
  var perimetro = param * 4;
  var superficie = param * param;

  console.log("El perimetro es: " + perimetro);
  console.log("La superficie es: " + superficie);
}

calcularPerSup(5);


/* Otra forma Ej 4 */
function calCuadra (longiCuadra) {
    let perimetro = longiCuadra * 4;
    console.log (`el perimetro del cuadrado es ${perimetro}`);
    let superficie = longiCuadra * longiCuadra;
    console.log (`la superficie del cuadrado es ${superficie}`);
}

var lado = prompt("Ingrese el valor del lado");
calCuadra(lado);


/**
5- Generar una función que dada una temperatura en grados fahrenheit los convierta a grados celsius.
*/

function fahrAcel (temp) {
    let celsius = ((temp - 32) / 1.8);
    console.log (`${temp} grados farenheit es igual a ${celsius.toFixed(2)} grados celsius`);
}

fahrAcel(52);


/**
6- Realizar una función que calcule el factorial de un número ingresado por el usuario (el número no puede ser mayor de 10, realizar la validación). Mostrar el resultado por la consola.
*/

function factorial (num) {
    if (num <= 10 && num >= 0) {
        let inicio = 1;
        for (let i = 1; i <= num; i++) {
            inicio = inicio * i;
        }
    console.log (`el factorial de ${num} es ${inicio}`);
    } else {
        console.log (`el valor ingresado es menor a 0 o mayor a 10 y no puede ser procesado`);
    }
}

var ingreso = parseInt (prompt (`ingrese el valor a factorizar`));
factorial(ingreso);
*/

/**
7- ado una cadena de caracteres ingresada por el usuario, se pide realizar un script que indique si ese texto es un palíndromo. Ejemplo de palíndromo: “Somos o no somos”.
*/

function palindromo (frase) {
    let fras1 = frase.replace(/ /g, "").toLowerCase();
    //console.log (fras1);
    let longitud = fras1.length;
    //console.log (longitud);
    for (let i = 0; i < longitud/2; i++) {
        if(fras1[i] != fras1[fras1.length-i-1]) {
			return "la frase no es un palindromo";
		}
	}
	return "la frase es un palindromo";
}

var frasePal = prompt (`ingrese la frase a comprobar`);
console.log(palindromo (frasePal));


/**
8- Dado una cadena de caracteres ingresada por el usuario, se pide realizar un script que lo muestre en mayúsculas y luego en minúsculas. Investigue el manejo de string en Javascript.
*/

function pasarMinMay(texto) {
  let min = texto.toLowerCase();
  let may = texto.toUpperCase();
  console.log("La palabra en minusculas es: " + min);
  console.log("La palabra en mayusculas es: " + may);
}

var palabra = prompt("Ingrese un texto");
pasarMinMay(palabra);


/**
9- Se pide que un usuario ingrese una nota numérica de un alumno. Muestra la
calificación resultante según la nota ingresada:
0-3: Muy deficiente
3-5: Insuficiente
5-6: Suficiente
6-7: Bien
7-9: Notable
9-10: Sobresaliente
*/

function notas (nota){
    if (nota >= 0 && nota < 3) {
        return `la nota es Muy Deficiente`;
    } else if (nota >= 3 && nota < 5) {
        return `la nota es Insuficiente`;
    } else if (nota >= 5 && nota < 6) {
        return `la nota es Suficiente`;
    } else if (nota >= 6 && nota < 7) {
        return `la nota es Buena`;
    } else if (nota >= 7 && nota < 9) {
        return `la nota es Notable`;
    } else if (nota >= 9 && nota <= 10) {
        return `la nota es Sobresaliente`;
    } else {
        return `la nota no es valida`;
    }
}


/**
Otra forma Ej 9
*/

function notas(nota) {
  switch(nota) {
      case "0":
      case "1":
      case "2":
        console.log("la nota es Muy Deficiente");
        break;
      case "3":
      case "4":
        console.log("la nota es Insuficiente");
        break;
      case "5":
        console.log("la nota es Suficiente");
        break;
      case "6":
        console.log("la nota es Buena");
        break;
      case "7":
      case "8":
        console.log("la nota es Notable");
        break;
      case "9":
      case "10":
        console.log("la nota es Sobresaliente");
        break;
  }
}

notas("10");