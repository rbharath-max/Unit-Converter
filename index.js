/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/


const meterToFeet =  3.281
const literToGallon =  3.785

const kiloToPound =  2.204


const convertButton = document.getElementById("btn-el")
let inputVaule =document.getElementById("input-t")

let lengthElement = document.getElementById("length-el")
let lengthElementOne = document.getElementById("length-elo")
let lengthElementTwo = document.getElementById("length-elt")

convertButton.addEventListener("click" , function(){
    let conversionValue = inputVaule.value
    
    lengthElement.textContent = `${conversionValue} meter = ${conversionValue * meterToFeet} feet | 
    ${conversionValue} feet = ${Number(conversionValue / meterToFeet).toFixed(3) } meters` 
    
    
     lengthElementOne.textContent = `${conversionValue} liters = ${Number(conversionValue / literToGallon).toFixed(3)} gallons | 
    ${conversionValue} gallons = ${conversionValue * literToGallon } liters` 
    
    lengthElementTwo.textContent = `${conversionValue} kilos = ${Number(conversionValue * kiloToPound).toFixed(3)} pounds | 
    ${conversionValue} pounds = ${Number(conversionValue / kiloToPound).toFixed(3) } kilos` 
    
    
})