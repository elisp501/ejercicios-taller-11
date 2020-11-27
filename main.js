//--------------------Ejercicio 1--------------------

let n = 0;

// While
while (n < 100) {
    n++;
    document.getElementById('alg1').innerHTML += (n + " ");
}

//For

for (n = 1; n <= 100; n++) {
    document.getElementById('alg1-2').innerHTML += (n + " ");
}

// Do while
n = 1;
do {
    document.getElementById('alg1-3').innerHTML += (n + " ");
    n++;
} while (n <= 100);



// --------------------Ejercicio 2--------------------
let cantidad;
let suma;
document.getElementById('alg2').innerHTML = "";

//While
function calcular1() {
    cantidad = document.getElementById('quantity2').value;
    suma = funcionSuma1(cantidad);
    document.getElementById('alg2').innerHTML = ("Tu suma da como resultado: " + suma.toString());
}

function funcionSuma1(n) {
    let cont = 0;
    let acum = 0;
    let num;

    while (cont < n) {
        num = Number(prompt("¿Cuales números quieres sumar?"));
        cont++;
        acum += num;
    }
    return acum;
}

//For
cantidad = 0;
suma = 0;

function calcular2() {
    cantidad = document.getElementById('quantity2').value;
    suma = funcionSuma2(cantidad);
    document.getElementById('alg2').innerHTML = ("Tu suma da como resultado: " + suma.toString());
}

function funcionSuma2(n) {
    let acum = 0;
    let num;

    for (let cont = 1; cont <= n; cont++) {
        num = Number(prompt("¿Cuales números quieres sumar?"));
        acum += num;
    }
    return acum
}

//Do while
cantidad = 0;
suma = 0;

function calcular3() {
    cantidad = document.getElementById('quantity2').value;
    suma = funcionSuma3(cantidad);
    document.getElementById('alg2').innerHTML = ("Tu suma da como resultado: " + suma.toString());
}

function funcionSuma3(n) {
    let cont = 0;
    let acum = 0;
    let num;

    do {
        num = Number(prompt("¿Cuales números quieres sumar?"));
        cont++;
        acum += num;
        console.log(cont);
    } while (cont < n);
    return acum;
}

//--------------------Ejercicio 3--------------------

//While
function alg3_1() {
    let cont = 1;
    let accum = 0;
    let num;
    let average;
    let rounder;

    while (cont <= 7) {
        num = Number(prompt("Ingresa tu nota " + cont));
        accum += num;
        cont++;
        console.log("Numero= " + num + " y contador= " + accum)
    }

    average = accum / 7;
    rounder = Math.round(average * 10) / 10
    console.log(rounder)
    document.getElementById('resultAlg3').innerHTML = ("Tu promedio es de: " + rounder);
    return rounder;
}

//For
function alg3_2() {
    let accum = 0;
    let num;
    let average;
    let rounder;

    for (i = 1; i <= 7; i++) {
        num = Number(prompt("Ingresa tu nota " + i));
        accum += num;
    }

    average = accum / 7;
    rounder = Math.round(average * 10) / 10
    console.log(rounder)
    document.getElementById('resultAlg3').innerHTML = ("Tu promedio es de: " + rounder);
    return rounder;

}

//While
function alg3_3() {
    let cont = 1;
    let accum = 0;
    let num;
    let average;
    let rounder;

    do {
        num = Number(prompt("Ingresa tu nota " + cont));
        accum += num;
        cont++;
        console.log("Numero= " + num + " y contador= " + accum)
    } while (cont <= 7);


    average = accum / 7;
    rounder = Math.round(average * 10) / 10
    console.log(rounder)
    document.getElementById('resultAlg3').innerHTML = ("Tu promedio es de: " + rounder);
    return rounder;
}

//--------------------Ejercicio 4--------------------

//While
function alg4_1() {
    let num;
    let cont = 1;
    document.getElementById("resultAlg4").innerHTML = "";

    while (cont <= 10) {
        num = Number(prompt("Ingresa el número " + cont))
        cont++;
        console.log(cont)

        if (num > 0) {
            document.getElementById("resultAlg4").innerHTML += (num + ", ")
            console.log("number bigger than 0")
        } else {
            alert("Ingresa solo número positivos")
        }
    }

}

//For
function alg4_2() {
    let num;
    document.getElementById("resultAlg4").innerHTML = "";

    for (let i = 1; i <= 10; i++) {
        num = Number(prompt("Ingresa el número " + i));

        if (num > 0) {
            document.getElementById("resultAlg4").innerHTML += (num + ", ")
            console.log("number bigger than 0")
        } else {
            alert("Ingresa solo número positivos")
        }
    }

}

//Do While
function alg4_3() {
    let num;
    let cont = 1;
    document.getElementById("resultAlg4").innerHTML = "";

    do {
        num = Number(prompt("Ingresa el número " + cont))
        cont++;

        if (num > 0) {
            document.getElementById("resultAlg4").innerHTML += (num + ", ")
            console.log("number bigger than 0")
        } else {
            alert("Ingresa solo número positivos")
        }
    } while (cont <= 10);
}

//--------------------Ejercicio 5--------------------
//While
function alg5_1() {
    let cont = 0;

    while (cont <= 10) {
        num = Number(prompt("Escribe un número, hasta el momento has escrito: " + cont + " numeros."));
        cont++;

        if (num > 0) {
            document.getElementById("resultAlg5").innerHTML += (num + ", ");
            console.log("Es positivo y es el número: " + num)
        } else if (num < 0) {
            document.getElementById("resultAlg5-1").innerHTML += (num + ", ");
            console.log("Es negativo y es el número: " + num)
        } else {
            document.getElementById("resultAlg5-2").innerHTML += (num + ", ");
            console.log("Es igual a 0 y es el número: " + num)
        }
    }
}

//For
function alg5_2() {
    let num;

    for (i = 1; i <= 10; i++) {
        num = Number(prompt("Escribe un número, hasta el momento has escrito: " + i + " numeros."));

        if (num > 0) {
            document.getElementById("resultAlg5").innerHTML += (num + ", ");
            console.log("Es positivo y es el número: " + num)
        } else if (num < 0) {
            document.getElementById("resultAlg5-1").innerHTML += (num + ", ");
            console.log("Es negativo y es el número: " + num)
        } else {
            document.getElementById("resultAlg5-2").innerHTML += (num + ", ");
            console.log("Es igual a 0 y es el número: " + num)
        }
    }
}

//Do While
function alg5_3() {
    let cont = 1;

    do {
        num = Number(prompt("Escribe un número, hasta el momento has escrito: " + cont + " numeros."));
        cont++;

        if (num > 0) {
            document.getElementById("resultAlg5").innerHTML += (num + ", ");
            console.log("Es positivo y es el número: " + num)
        } else if (num < 0) {
            document.getElementById("resultAlg5-1").innerHTML += (num + ", ");
            console.log("Es negativo y es el número: " + num)
        } else {
            document.getElementById("resultAlg5-2").innerHTML += (num + ", ");
            console.log("Es igual a 0 y es el número: " + num)
        }
    } while (cont <= 10);
}
//--------------------Ejercicio 6--------------------
//While
function alg6_1() {
    let num;
    let multiplication;

    num = Number(document.getElementById("alg6").value);

    multiplication = timesTable_1(num);
}

function timesTable_1(n) {
    let cont = 0;
    let acum = 0;

    document.getElementById("resultAlg6").innerHTML = "";

    while (cont <= 10) {
        acum = n * cont;
        cont++;
        console.log(acum)
        document.getElementById("resultAlg6").innerHTML += (n + " X " + cont + " = " + acum + "<br></br>")
    }

    return acum;
}

//For
function alg6_2() {
    let num;
    let multiplication;

    num = Number(document.getElementById("alg6").value);

    multiplication = timesTable_2(num);
}

function timesTable_2(n) {
    let acum = 0;
    document.getElementById("resultAlg6").innerHTML = "";

    for (i = 1; i <= 10; i++) {
        acum = n * i;
        document.getElementById("resultAlg6").innerHTML += (n + " X " + i + " = " + acum + "<br></br>")
    }
    return acum;
}

//Do While
function alg6_3() {
    let num;
    let multiplication;

    num = Number(document.getElementById("alg6").value);

    multiplication = timesTable_3(num);
}

function timesTable_3(n) {
    let cont = 0;
    let acum = 0;

    document.getElementById("resultAlg6").innerHTML = "";

    do {
        acum = n * cont;
        cont++;
        document.getElementById("resultAlg6").innerHTML += (n + " X " + cont + " = " + acum + "<br></br>")
    } while (cont <= 10);

    return acum;
}

//--------------------Ejercicio 7--------------------
//While
function alg7_1() {
    let cont = 0;
    let name;
    let age;

    while (cont < 3) {
        name = prompt("Escribe un nombre");
        age = prompt("Escribe la edad de esa persona");
        console.log("nombre: " + name + " Edad: " + age);

        if (age < 18) {
            alert("Se encontró un menor de edad: " + name)
            break;
        }
        cont++;
    }

    if (cont === 3) {
        alert("No hay ningún menor de edad.")
    }
}

//For
function alg7_2() {
    let name;
    let age;

    for (i = 0; i < 3; i++) {
        name = prompt("Escribe un nombre");
        age = prompt("Escribe la edad de esa persona");

        if (age < 18) {
            alert("Se encontró un menor de edad: " + name)
            break;
        }
    }
    if (i === 3) {
        alert("No hay ningún menor de edad.")
    }
}

//--------------------Ejercicio 8--------------------

function alg8() {
    let user = document.getElementById("alg7-user").value;
    let password = document.getElementById("alg7-password").value;

    if (user === "1" && password === "1234") {
        alert("¡Usuario y contraseña validas!");
    } else if (user != "1") {
        alert("Usuario no valido, intente de nuevo")
    } else if (password != "1234") {
        alert("Contraseña no valida, intente de nuevo")
    }
}

//--------------------Ejercicio 9--------------------

function alg9() {
    let num = document.getElementById("num-alg9").value;
    document.getElementById("resultAlg9").innerHTML = ("El factorial de " + num + " es = ");
    let accum = 1;

    for (i = 1; i <= num; i++) {
        accum *= i;
        document.getElementById("resultAlg9").innerHTML += (i + " *");
    }
    document.getElementById("resultAlg9_1").innerHTML = ("El factorial de " + num + " es = " + accum);

    if (num < 0) {
        alert("Ingresa un valor correcto");
        document.getElementById("resultAlg9").innerHTML = "";
        document.getElementById("resultAlg9_1").innerHTML = "";
    }
    return accum
}

//--------------------Ejercicio 10--------------------

// function alg10() {
//     let value;

//     value = prompt("¿Desea continuar S/N?");

//     while (value != "N" || value != "n") {
//         value = prompt("¿Desea continuar S/N?");
//     }
//     if (value = "N") {
//         return value;
//     }
// }

//--------------------Ejercicio 11--------------------

function fImprima(id, lBorreAntesDeImprimir) {
    var sContenidoAnterior = "";
    if (!lBorreAntesDeImprimir) {
        sContenidoAnterior = document.getElementById("idPfoSalida01").innerHTML; // + "<HR>";
    }
    document.getElementById("idPfoSalida01").innerHTML =
        sContenidoAnterior +
        id + "<br>";
}

function alg11() {
    let nGrade;
    let strQuestion = "";
    let nAccum = 0;
    let nContGrades = 0;
    let nAverage = 0;

    fImprima("Las notas leidas fueron: ", true);
    do {
        strQuestion = prompt("¿Desea digitar una nota (s/n)?");
        if (strQuestion === "s" || strQuestion === "S") {
            nGrade = Number(prompt("Ingresa una nota"));
            nAccum += nGrade;
            nContGrades++;
            nAverage = Math.round((nAccum / nContGrades) * 10) / 10 ;
            fImprima("Nota: " + nGrade + "  Promedio actual: " + nAverage, false);
            console.log(nAverage)
        }
    } while (strQuestion === "s" || strQuestion === "S");
}

//--------------------Ejercicio 12--------------------

function alg12() {
    let num;
    let accum = 0;
    let cont = 0;
    let average = 0;
    document.getElementById("resultAlg12_1").innerHTML = "Numeros ingresados = ";
    document.getElementById("resultAlg12_2").innerHTML = "Suma total de los valores = ";
    document.getElementById("resultAlg12_3").innerHTML = "Promedio = ";

    num = Number(prompt("Ingresa una susesión de números naturales"))

    while (num != -1) {
        num = Number(prompt("Ingresa una susesión de números naturales"))
        console.log("num " + num)
        if (num != -1) {
            accum += num;
            console.log("accum " + accum)
            cont++;
            console.log("cont " + cont)
            average = Math.round((accum / cont) * 10) / 10
            console.log(average)
        }
    } 

    document.getElementById("resultAlg12_1").innerHTML += cont;
    document.getElementById("resultAlg12_2").innerHTML += accum;
    document.getElementById("resultAlg12_3").innerHTML += average;
}

//--------------------Ejercicio 13--------------------

function alg13() {
    let nGrade = 0;
    let nBiggestGrade = 0;
    let nSmallestGrade = 0;
    document.getElementById("resultAlg13_1").innerHTML = "Nota más alta = ";
    document.getElementById("resultAlg13_2").innerHTML = "Nota más baja = ";

    for (i=1; i<=3; i++) {
        nGrade = Number((prompt("Ingresa la nota." + " Has ingresado: " + i + " Notas")));

        if (nGrade > nBiggestGrade) {
            nBiggestGrade = nGrade;
        }
        console.log("nota mayor " + nBiggestGrade + "nota " + nGrade)

        if (nGrade < nSmallestGrade) {
            nSmallestGrade = nGrade;
        }
        console.log("nota menor " + nSmallestGrade + "nota " + nGrade)
    }
    document.getElementById("resultAlg13_1").innerHTML += nBiggestGrade;
    document.getElementById("resultAlg13_2").innerHTML += nSmallestGrade;

}

    
    // document.getElementById("resultAlg13_3").innerHTML += average;
//--------------------Ejercicio 14--------------------
function alg14() {
    
}