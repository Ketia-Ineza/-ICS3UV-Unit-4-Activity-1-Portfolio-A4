// Ask user how many integers to add
const count = parseInt(prompt("How many integers will be added: ") || "0");
let sum = 0;

// Loop for each integer
for (let i = 0; i < count; i++) {
  const num = parseInt(prompt("Enter an integer: ") || "0");
  sum += num;
}

// Print the total sum
console.log("The sum is " + sum);