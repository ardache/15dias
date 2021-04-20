var porcSegTrim = 0
var porcTerTrim = 0
var porcTotalEmbarazo = 0
var dt2 = new Date('4/29/2021');
var dt1 = new Date(Date.now())
console.log(dt1)
console.log(dt2)
var diffDays = Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate()) ) /(1000 * 60 * 60 * 24)); 
console.log(diffDays + " Dias")
console.log(diffDays/7 + " Semanas")
porcSegTrim = Math.floor((((diffDays/7)-13.5)/13.5)*100)
porcTotalEmbarazo = (1-(diffDays/15))*100
console.log(porcTotalEmbarazo + "% Total")

document.getElementById("porcNivel").innerHTML = porcTotalEmbarazo + "%"
document.getElementById("totalSemanas").innerHTML =  Math.floor((diffDays)) + " dias restantes"
document.getElementById("totalBar").style.width = porcTotalEmbarazo + "%"



// Display the result in the element with id="segTrim" for 2nd Trimestre
console.log(porcSegTrim + "% Segundo Trim")

// if (porcSegTrim <= 99.99){
//     document.getElementById("segTrimLabel").innerHTML = porcSegTrim + "%"
//     document.getElementById("segTrimBar").style.width = porcSegTrim + "%"
//     document.getElementById("terTrimLabel").innerHTML = "0%"
//     document.getElementById("terTrimBar").style.width = "0%"
// } else {
//     document.getElementById("segTrimLabel").innerHTML = "Completado!"
//     document.getElementById("segTrimBar").style.width = "100%"
//     console.log("ter trim " + diffDays + " Dias")
//     console.log(diffDays/7 + " Semanas")
//     porcTerTrim = Math.floor((((diffDays/7)-27)/13.5)*100)
//     console.log(porcTerTrim + "% Tercer Trim")
//     document.getElementById("terTrimLabel").innerHTML = porcTerTrim + "%"
//     document.getElementById("terTrimBar").style.width = porcTerTrim + "%"
// } if (porcTerTrim > 100) {
//     document.getElementById("terTrimLabel").innerHTML = "Welcome Baby!"
//     document.getElementById("terTrimBar").style.width = "100%"
// }


