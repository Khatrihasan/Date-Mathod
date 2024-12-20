// Ask the user for input
var customerName = prompt("Enter your name:");
var currentMonth = prompt("Enter current month (e.g. January):");
var unitsConsumed = parseInt(prompt("Enter number of units consumed:"));

// Calculate charges and amounts
var chargesPerUnit = 16;
var netAmount = unitsConsumed * chargesPerUnit;
var latePaymentSurcharge = netAmount * 0.1;
var grossAmount = netAmount + latePaymentSurcharge;

// Display the bill in the browser
document.write("<h1>K-Electric Bill</h1>");
document.write("<p><strong>Customer Name: </strong>" + customerName + "</p>");
document.write("<p><strong>Current Month: </strong>" + currentMonth + "</p>");
document.write("<p><strong>Units Consumed: </strong>" + unitsConsumed + "</p>");
document.write("<p><strong>Charges per unit: </strong>" + chargesPerUnit.toFixed(2) + "</p>");
document.write("<br>");
document.write("<p><strong>Net Amount Payable (within Due Date): </strong>" + netAmount.toFixed(2) + "</p>");
document.write("<p><strong>Late Payment Surcharge: </strong>" + latePaymentSurcharge.toFixed(2) + "</p>");
document.write("<p><strong>Gross Amount Payable (after Due Date): </strong>" + grossAmount.toFixed(2) + "</p>");