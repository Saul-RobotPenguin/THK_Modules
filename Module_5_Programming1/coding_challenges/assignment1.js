//Step 1
const weeklyIncome = parseInt(prompt("Whats your Weekly Income?"));
const foodCost = parseInt(prompt("Whats your food cost weekly?"));
const housingCost =  parseInt(prompt("Whats your housing cost divided into weeks??"));
const transportationCost = parseInt(prompt("How much do you spend on transportation cost weekly?"));
const otherCosts = parseInt(prompt("What are other weekly costs that you would like to include?"));
const savings = parseInt(prompt("How much do you want to save in a year?"));


//Step 2
let totalOfSavingsInAWeek = savings / 52;

///Step 3
let totalWeeklyCosts =  foodCost + housingCost + transportationCost + otherCosts;

//Step 4
let leftOverMoney =  weeklyIncome - totalWeeklyCosts;

if (leftOverMoney > totalOfSavingsInAWeek) {
  alert("You have enough money to save");
} else if (leftOverMoney < totalOfSavingsInAWeek) {

  let amountNeeded = totalOfSavingsInAWeek - leftOverMoney
  alert("You need " + amountNeeded + " more to reach your savings goal");
}
