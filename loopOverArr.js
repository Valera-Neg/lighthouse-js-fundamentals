const amounts = [61.00, 52.25, 112.99, 5.00];

let total = 0;
/*for (let i = 0; i < amount.length; i++) {
  total+=amounts[i];
}
console.log("Order totai is: " + total);*/

for (let amount of amounts) {
  total += amount;
}
console.log('Order total is: ', total);