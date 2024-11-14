// Array manipulations:

let arra = ["Siddhant", "Vaibhav", "Al", "Athrava", "Shrinivas", "Sneha"];

// 1. Retrieve any value from the array:
console.log(arra[2]); // Output: Al

// 2. Update a value in the array:
arra[2] = "Amol";
console.log(arra);

// 3. Add values to the array:
arra.push("Qwerty");
console.log(arra); // ['Siddhant', 'Vaibhav', 'Amol', 'Athrava', 'Shrinivas', 'Sneha', 'Qwerty']

// 4. Add value at the start:
arra.unshift("KJHGFD");
console.log(arra); // ['KJHGFD', 'Siddhant', 'Vaibhav', 'Amol', 'Athrava', 'Shrinivas', 'Sneha', 'Qwerty']

// 5. Add value in the middle of the array:
arra.splice(2, 0, "ZXCVB");
console.log(arra); // ['KJHGFD', 'Siddhant', 'ZXCVB', 'Vaibhav', 'Amol', 'Athrava', 'Shrinivas', 'Sneha', 'Qwerty']

// 6. Delete the last element of the array:
arra.pop();
console.log(arra); // ['KJHGFD', 'Siddhant', 'ZXCVB', 'Vaibhav', 'Amol', 'Athrava', 'Shrinivas', 'Sneha']

// 7. Delete the first element:
arra.shift();
console.log(arra); // ['Siddhant', 'ZXCVB', 'Vaibhav', 'Amol', 'Athrava', 'Shrinivas', 'Sneha']

// 8. Extract values using slice():
let newarr = arra.slice(2, 5);
console.log(newarr); // ['Vaibhav', 'Amol', 'Athrava']

// 9. Delete value using splice():
arra.splice(1, 1);
console.log(arra); // ['Siddhant', 'Vaibhav', 'Amol', 'Athrava', 'Shrinivas', 'Sneha']

// 10. Sort array alphabetically:
arra.sort();
console.log(arra); // ['Amol', 'Athrava', 'Shrinivas', 'Siddhant', 'Sneha', 'Vaibhav']

// Sorting a number array:
let numarra = [97854726, 1, 5, 50, 60, 700, 800, 900, 5024, 65445, 28522, 138561, 7891];
numarra.sort((a, b) => { return a - b });
console.log(numarra); // Sorted numerically

// 11. Reverse an array:
arra.reverse();
console.log(arra); // ['Vaibhav']

// 13. Find the index of a value:
console.log(arra.indexOf("Shrinivas")); // 3
console.log(arra[3]); // Shrinivas
