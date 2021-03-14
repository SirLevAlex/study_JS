let money, income, addExpenses, deposit, mission, period;

money = 60000;
income = "frilance";
addExpenses = "Internet, Taxi, Rent, Other";
deposit = true;
mission = 10000;
period = 6;

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);

console.log(addExpenses.length);

console.log(
  "Период равен " +
    period +
    " месяцев." +
    " Цель заработать " +
    mission +
    " долларов"
);
console.log(addExpenses.toLowerCase(), addExpenses.split(","));

let budgetDay = money / 30;

console.log(budgetDay);
