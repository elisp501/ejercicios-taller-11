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
            nAverage = nAccum / nContGrades;
            fImprima("Nota: " + nGrade + "  Promedio actual: " + nAverage, false);
            console.log(nAverage)
        }
    } while (strQuestion === "s" || strQuestion === "S");
}







// function alg11() {
//     let grade;
//     let question;
//     let accum;
//     let average;
//     let n = 0;

//     question = prompt("¿Desea ingresar una nota? Responde s/n");


//     if (question == "s") {
//         for (i=0; i<=n; i++)
//         grade = prompt("Ingresa tu nota");
//         console.log("Grade " + grade);
//         accum += grade;
//         console.log("accum " + accum);
//         average = (accum / n);
//         console.log("average " + average);
//         alert("Tu promedio es de: " + average);
//         prompt("¿Desea ingresar una nota? Responde s/n");
//         n++;
//     }

// }