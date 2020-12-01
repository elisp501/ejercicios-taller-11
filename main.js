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
            nAverage = Math.round((nAccum / nContGrades) * 10) / 10;
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
    let nSmallestGrade = 1000;
    let accum = 0;
    let average = 0;
    document.getElementById("resultAlg13_1").innerHTML = "Nota más alta = ";
    document.getElementById("resultAlg13_2").innerHTML = "Nota más baja = ";
    document.getElementById("resultAlg13_3").innerHTML = "Promedio total = ";

    for (i = 1; i <= 20; i++) {
        nGrade = Number((prompt("Ingresa la nota." + " Has ingresado: " + i + " Notas")));
        accum += nGrade;
        if (nGrade > nBiggestGrade) {
            nBiggestGrade = nGrade;
        }
        if (nGrade < nSmallestGrade) {
            nSmallestGrade = nGrade;
        }
        console.log("nota menor = " + nSmallestGrade + "/ nota = " + nGrade)
        console.log("Suma: " + accum)
    }

    average = Math.round((accum / (i - 1)) * 10) / 10;

    document.getElementById("resultAlg13_1").innerHTML += nBiggestGrade;
    document.getElementById("resultAlg13_2").innerHTML += nSmallestGrade;
    document.getElementById("resultAlg13_3").innerHTML += average;
}

//--------------------Ejercicio 14--------------------
function alg14() {
    let accum = 0;
    let number = Number(document.getElementById("num-alg14").value)

    document.getElementById("resultAlg14_1").innerHTML = "Números a sumar: ";
    document.getElementById("resultAlg14_2").innerHTML = "Resultado: ";

    for (i = 1; i <= number; i++) {
        accum += i;
        document.getElementById("resultAlg14_1").innerHTML += (i + " + ");
        console.log(accum);
    }
    document.getElementById("resultAlg14_2").innerHTML += (accum);
}

//--------------------Ejercicio 15--------------------
function alg15() {
    let number;
    let accum = 0;
    for (i = 1; i <= 10; i++) {
        number = Number(prompt("Ingresa 10 números. Has escrito: " + i + " números."));
        document.getElementById("resultAlg15").innerHTML = "La suma de los números negativos es = ";

        if (number < 0) {
            accum += number;
            console.log(accum)
        } else {
            number = 0;
        }
        document.getElementById("resultAlg15").innerHTML += accum;

        if (i == 10 && accum == 0) {
            document.getElementById("resultAlg15").innerHTML = "No ingresaste ningún número negativo.";
        }

    }
}

//--------------------Ejercicio 16--------------------

for (i = 100; i > 0; i--) {
    document.getElementById('resultAlg16').innerHTML += (i + " ");
}
//--------------------Ejercicio 17--------------------
function alg17() {
    let accum = 0;
    let number = Number(document.getElementById("num-alg17").value)

    document.getElementById("resultAlg17").innerHTML = "El resultado es: ";

    for (i = 1; i <= number; i++) {
        accum += i;
        console.log(accum)
    }
    document.getElementById("resultAlg17").innerHTML += (accum);
}

//--------------------Ejercicio 18--------------------
//function alg18() {
//Definición de variables
let salary = 1500;

//Impresión de los nuevos salarios

for (i = 1; i <= 6; i++) {
    salary = (salary * 0.10) + salary;
    document.getElementById("resultAlg18_2").innerHTML += `Salario del año ${i} = $ ${salary.toFixed()} </br>`
    //console.log("El salario del año " + i + " es= " + salary.toFixed(0));
}
document.getElementById("resultAlg18_1").innerHTML = `$ ${salary.toFixed()}`
//}

//--------------------Ejercicio 19--------------------
//Pendiente validar que no me entren cantidades menores o iguales a 0 pero antes que opriman el botón.
function alg19(paymentMethod) {
    // Definición de variables
    let numS;
    let numD;
    let numT;
    let total = 0;
    let chargeTC = 0;

    // Cantidades de hamburguesas que me van a comprar
    numS = Number(document.getElementById("num-alg19_1").value);
    numD = Number(document.getElementById("num-alg19_2").value);
    numT = Number(document.getElementById("num-alg19_3").value);

    // Calcular el total a pagar
    total = (numS * 20) + (numD * 25) + (numT * 28);

    // Calcular la comisión por pago con tarjeta de crédito
    if (paymentMethod === 'TC') {
        chargeTC = (total * 0.05);
        total += chargeTC;
    }
    // Imprimo resultados
    document.getElementById("resultAlg19").innerHTML = `$ ${total.toFixed(2)}`;
}

//--------------------Ejercicio 20--------------------
// Pendiente de validar o mejorar que si no hay error el parrafo de error (id="error") que cuando sea error sea rojo y cuando esté correcto sea verde.
function alg20() {
    // Definición de variables
    let confirmation;
    let lightBulbsTotal = 0;
    let colGreen;
    let colWhite;
    let colRed;
    let totalLot = 0;
    document.getElementById("resultAlg20").innerHTML = '';
    do {
        confirmation = prompt('¿Seguro que los datos están correctos? (s/n)')
    } while (confirmation.toUpperCase() != 'N' && confirmation.toUpperCase() != 'S')

    if (confirmation === 's') {
        totalLot = 0;
        // Cantidad de bombillos en total
        lightBulbsTotal = Number(document.getElementById("num-alg20_1").value);

        // Cantidades de bombillos por colores
        colGreen = Number(document.getElementById("num-alg20_2").value);
        colWhite = Number(document.getElementById("num-alg20_3").value);
        colRed = Number(document.getElementById("num-alg20_4").value);

        // Calcular el total de bombillos
        totalLot = colGreen + colWhite + colRed;

        // Verificar que la cantidad de bombillos por colores coincida con la cantidad total
        if (lightBulbsTotal != totalLot) {
            document.getElementById("num-alg20_2").value = 0;
            document.getElementById("num-alg20_3").value = 0;
            document.getElementById("num-alg20_4").value = 0;

            document.getElementById("error").innerHTML = 'Redigite: Hay un error en la cantidad de lote.'
        } else {
            document.getElementById("error").innerHTML = 'Información digitada correctamente.'
        }

        // Imprimo resultados
        document.getElementById("resultAlg20").innerHTML = totalLot;
        console.log(`La cantidad de bombillos es de ${totalLot}`)
    }
}

//--------------------Ejercicio 21--------------------

let savings = 1;
for (i = 1; i <= 365; i++) {
    savings *= 3;
    document.getElementById("resultAlg21_1").innerHTML += `El ahorro por día es de: ${savings} </br>`
}
document.getElementById("resultAlg21_2").innerHTML += `El ahorro total es de: ${savings}`

//--------------------Ejercicio 22--------------------

function alg22() {
    let age = 0;
    let classAverage = 0;
    let classCounter = 0;
    let classAccum = 0;
    let classConfirmation;
    let classRoomCounter = 0;
    let schoolAverage = 0;
    let schoolCounter = 0;
    let schoolAccum = 0;
    let schoolConfirmation;

    // Ciclo para la escuela
    do {
        // Ciclo para el salón
        age = 0;
        classAverage = 0;
        classCounter = 0;
        classAccum = 0;
        do {
            age = Number(prompt('¿Ingresa la edad del estudiante?'));
            classCounter++;
            classAccum += age;
            classConfirmation = prompt('¿Deseas ingresar otra edad (S/N)?');
        } while (classConfirmation.toUpperCase() === 'S')
        classRoomCounter++;
        classAverage = classAccum / classCounter;
        schoolAccum += classAccum;
        schoolCounter += classCounter;
        document.getElementById("resultAlg22_1").innerHTML += `Promedio del salon # ${classRoomCounter}: ${classAverage.toFixed(2)} `;
        console.log(`Promedio de la clase # ${classRoomCounter}: ${classAverage.toFixed(2)} `);
        schoolConfirmation = prompt('¿Deseas ingresar un nuevo salón (S/N)?');
    } while (schoolConfirmation.toUpperCase() === 'S');
    schoolAverage = schoolAccum / schoolCounter;
    document.getElementById("resultAlg22_2").innerHTML = `Promedio de la escuela: ${schoolAverage.toFixed(2)}`;
    console.log(`Promedio de la escuela: ${schoolAverage.toFixed(2)}`);
}

//--------------------Ejercicio 23--------------------
function alg23() {
    let numSale = 0;
    let confirmation;
    let contLessThanTen = 0;
    let accumLessThanTen = 0; 
    let contLessThanTwenty = 0;
    let accumLessThanTwenty = 0;
    let accumGlobalSales = 0;

    do {
        numSale = Number(prompt('Ingresa la venta. (Agrega solo números sin puntos ni comas.)'));
        accumGlobalSales += numSale;
        
        if (numSale <=10000) {
            accumLessThanTen += numSale;
            contLessThanTen++;
        } else if (numSale > 10000 && numSale <= 20000) {
            accumLessThanTwenty += numSale;
            contLessThanTwenty++;
        } 
        
        confirmation = prompt('¿Desea ingresar otra venta (S/N)?');
    } while (confirmation.toUpperCase() === 'S')
    document.getElementById("resultAlg23_1").innerHTML = contLessThanTen;
    document.getElementById("resultAlg23_2").innerHTML = accumLessThanTen;
    document.getElementById("resultAlg23_3").innerHTML = contLessThanTwenty;
    document.getElementById("resultAlg23_4").innerHTML = accumLessThanTwenty;
    document.getElementById("resultAlg23_5").innerHTML = accumGlobalSales;

    console.log(`Total global: ${accumGlobalSales}`);
    console.log(`Cantidad de ventas <= 10.000: ${contLessThanTen} que suman: ${accumLessThanTen}`)
    console.log(`Cantidad de ventas > 10.000 y <= 20.000: ${contLessThanTwenty} que suman: ${accumLessThanTwenty}`)
}

//--------------------Ejercicio 24--------------------
function alg24() {
    let confirmation;
    let name = '';
    let hoursWorked = 0;
    let salaryPerHour = 0;
    let salaryTimesHoursWorked = 0;
    let salaryDiscount = 0;
    let salaryAccum = 0;
    let workerCounter = 0;

    do {
        name = prompt('Ingresa tu nombre');
        hoursWorked = Number(prompt('Ingresa las horas que trabajaste esta semana'));
        salaryPerHour = Number(prompt('Ingresa el salario que ganaste por hora'));
        
        if (salaryPerHour >= 0 && salaryPerHour <= 150) {
            salaryTimesHoursWorked = salaryPerHour * hoursWorked;
            salaryDiscount = salaryTimesHoursWorked - (salaryTimesHoursWorked * 0.05);
            salaryAccum += salaryDiscount;
            console.log(`${name} trabajó ${hoursWorked} horas y recibe un salario de ${salaryDiscount}`);
        } else if (salaryPerHour > 150 && salaryPerHour <= 300) {
            salaryTimesHoursWorked = salaryPerHour * hoursWorked;
            salaryDiscount = salaryTimesHoursWorked - (salaryTimesHoursWorked * 0.07);
            salaryAccum += salaryDiscount;
            console.log(`${name} trabajó ${hoursWorked} horas y recibe un salario de ${salaryDiscount}`);
        } else if (salaryPerHour > 350 && salaryPerHour < 450) {
            salaryTimesHoursWorked = salaryPerHour * hoursWorked;
            salaryDiscount = salaryTimesHoursWorked - (salaryTimesHoursWorked * 0.09);
            salaryAccum += salaryDiscount;
            console.log(`${name} trabajó ${hoursWorked} horas y recibe un salario de ${salaryDiscount}`);
        } else {
            alert('No puedes ingresar un salario mayor a 500')
        }
        confirmation = prompt('¿Desea ingresar otro salario (S/N)?');
        workerCounter++
        
    } while (confirmation.toUpperCase() === 'S')
    
    document.getElementById("resultAlg24").innerHTML = `La suma de los ${workerCounter} trabajadores que ingresó, es de: ${salaryAccum.toFixed(2)}`;
}

//--------------------Ejercicio 25--------------------
function alg25() {
    let confirmation;
    let price = 0;
    let clave;
    let tax = 0;
    let carCounter = 1;
    let totalAccum = 0;
    let accumClave1 = 0;
    let accumClave2 = 0;
    let accumClave3 = 0;

    do {
        price = Number(prompt('Ingresa es el valor del automovil. (Agrega solo números sin puntos ni comas.)'))
        clave = prompt('¿Cuál es la clave del vehículo?')
        if (clave === '1') {
            tax = price * 0.10;
            accumClave1 += price + tax;
        } else if (clave === '2') {
            tax = price * 0.07;
            accumClave2 += price + tax;
        } else if (clave === '3') {
            tax = price * 0.05;
            accumClave3 += price + tax;
        } else {
            alert('Las únicas claves válidas son 1, 2, o 3.')
        }
        totalAccum = accumClave1 + accumClave2 + accumClave3;

        document.getElementById("resultAlg25_1").innerHTML += `El impuesto del automovil número ${carCounter} es de $ ${tax.toFixed(2)} </br>`;
        document.getElementById("resultAlg25_2").innerHTML = `El valor total de la categoría de clave 1 es de $ ${accumClave1.toFixed(2)} </br>`;
        document.getElementById("resultAlg25_2").innerHTML += `El valor total de la categoría de clave 2 es de $ ${accumClave2.toFixed(2)} </br>`;
        document.getElementById("resultAlg25_2").innerHTML += `El valor total de la categoría de clave 3 es de $ ${accumClave3.toFixed(2)} </br>`;
        document.getElementById("resultAlg25_3").innerHTML = `El valor total de los ${carCounter} vehículos ingresados es de $ ${totalAccum.toFixed(2)} </br>`;

        confirmation = prompt('¿Desea ingresar otro salario (S/N)?');
        carCounter++;

    } while (confirmation.toUpperCase() === 'S')
}