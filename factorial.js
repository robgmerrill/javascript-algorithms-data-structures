// 4! = 4 * 3 * 2 * 1 = 24

// Iterative Example
// function factorial(num) {
//     var total = 1;
//     for (i = 2; i <= 4; i++) {
//         total = total * i;
//     }
//     return total;
// }

// factorial(4)

// Recursive
function factorial(num) {
  if (num === 1) {
    console.log("all done");
    return 1;
  }
  return num * factorial(num - 1);
}

factorial(4);
