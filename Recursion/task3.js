function fibonacciRecursive(n) {
    if (n <= 1) {
      return n;
    }
    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}
  
const n1 = 2;
const n2 = 3;
const n3 = 4;
  
console.log(fibonacciRecursive(n1)); // Вивід: 1
  
console.log(fibonacciRecursive(n2)); // Вивід: 2
  
console.log(fibonacciRecursive(n3)); // Вивід: 3
  