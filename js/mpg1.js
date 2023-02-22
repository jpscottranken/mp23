//  Variable declarations
let milesDriven = 0.0
let gallonsUsed = 0.0
let mpg = 0.0

//  Input value for miles driven
milesDriven = parseFloat(prompt("Enter Miles Driven", "100"))

//  Input value for gallons used
gallonsUsed = parseFloat(prompt("Enter gallons used", "10"))

//  Calculate miles per gallon
mpg = milesDriven / gallonsUsed

//  Print out all variables
document.write("<br>The miles driven was: " + milesDriven.toFixed(2))
document.write("<br>The gallons used was: " + gallonsUsed.toFixed(2))
document.write("<br>The miles per gallon was: " + mpg.toFixed(2))
