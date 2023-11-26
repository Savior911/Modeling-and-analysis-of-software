function climbToTheTop(n) {
    if (n <= 2) {
      return n;
    }
  
    let arr = [0, 1, 2];
  
    for (let i = 3; i <= n; i++) {
      arr[i] = arr[i - 1] + arr[i - 2];
    }
  
    return arr[n];
  }
  
// Виведення результату
console.log(climbToTheTop(2)); // Виведе 2
console.log(climbToTheTop(3)); // Виведе 3
  