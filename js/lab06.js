// GLOBAL VARIABLES
let futureValue;
let investment;
let rate;
let years;

// COLLECT VALUES FROM THE USER
do{
investment = parseFloat(prompt('Enter investment amount as xxxx.xx'));
if(isNaN(investment)){
    alert('Error. Please enter a number');
}
}while(isNaN(investment));

do{
rate = parseFloat(prompt('Enter interest rate as xx.x'));
if(isNaN(rate) || rate > 6 || rate < 0){
    alert('Error. Please enter a number between 0 and 6');
}
}while(isNaN(rate) || rate > 6 || rate < 0);

do{
years = parseInt(prompt('Enter the number of years you want to invest for'));
if(isNaN(years)|| years > 30 || years < 1){
    alert('Error. Please enter a number between 1 and 30');
}
}while(isNaN(years)|| years > 30 || years < 1);

// CALCULATE FUTURE VALUE
futureValue = investment;
for (let i = 0; i < years; i++) {
    futureValue = futureValue + (futureValue * rate / 100);
}

// DISPLAY RESULT
document.write(`Investment amount: $${investment.toFixed(2)}<br>`);
document.write(`Interest rate: ${rate.toFixed(2)}%<br>`);
document.write(`Years: ${years}<br>`);
document.write(`Future value: $${futureValue.toFixed(2)}`);