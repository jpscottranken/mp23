//  Constant declarations
const MINMILESDRIVEN = 1
const MAXMILESDRIVEN = 1000
const MINGALLONSUSED = 1
const MAXGALLONSUSED = 100

//  Variable declarations
let milesDriven = 0.0
let gallonsUsed = 0.0
let mpg = 0.0

//  Input value for miles driven
milesDriven = parseFloat(prompt("Enter Miles Driven (1 - 1000)", "100"))

//  Full validation of miles driven field using constants
while (
  isNaN(milesDriven) ||
  milesDriven < MINMILESDRIVEN ||
  milesDriven > MAXMILESDRIVEN
) {
  //  Input value for miles driven
  milesDriven = parseFloat(prompt("Enter Miles Driven (1 - 1000)", "100"))
}

//  Input value for gallons used
gallonsUsed = parseFloat(prompt("Enter gallons used (1 - 100)", "10"))

//  Full validation of gallons used field using constants
while (
  isNaN(gallonsUsed) ||
  gallonsUsed < MINGALLONSUSED ||
  gallonsUsed > MAXGALLONSUSED
) {
  //  Input value for gallons used
  gallonsUsed = parseFloat(prompt("Enter Miles Driven (1 - 100)", "100"))
}

//  Calculate miles per gallon
mpg = milesDriven / gallonsUsed

//  Print out all variables
document.write("<br>The miles driven was: " + milesDriven.toFixed(2))
document.write("<br>The gallons used was: " + gallonsUsed.toFixed(2))
document.write("<br>The miles per gallon was: " + mpg.toFixed(2))
alert(
  "Miles Driven: " +
    milesDriven.toFixed(2) +
    "\nGallons Used: " +
    gallonsUsed.toFixed(2) +
    "\nMiles Per Gallon: " +
    mpg.toFixed(2)
)
