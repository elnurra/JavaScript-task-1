let balance = 100;
let cash;
function increase(money) {
  return balance + money;
}
function decrease(money) {
  return balance - money;
}
function cal(operator) {
  switch (operator) {
    case "+":
      cash = Number(prompt("Input your number:"));
      console.log("Current balance:", increase(cash));
      break;
    case "-":
      cash = Number(prompt("Input your number:"));
      console.log("Current balance:", decrease(cash));
      break;
    default:
      console.log("Your balance:", balance);
      break;
  }
}
let operator = prompt("Choose what u want: +,- or check balance");
cal(operator);
