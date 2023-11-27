function evalRPN(tokens) {
    // Стек для зберігання чисел
    const stack = [];

    // Обхід кожного токена в масиві
    for (const token of tokens) {
        if (!isNaN(parseInt(token, 10))) {
            // Якщо токен - число, додаємо його до стеку
            stack.push(parseInt(token, 10));
        } else {
            // Якщо токен - оператор, виконуємо відповідну операцію
            const operand2 = stack.pop();
            const operand1 = stack.pop();

            switch (token) {
                case '+':
                    stack.push(operand1 + operand2);
                    break;
                case '-':
                    stack.push(operand1 - operand2);
                    break;
                case '*':
                    stack.push(operand1 * operand2);
                    break;
                case '/':
                    // Обробка ділення, де ділення на нуль не відбувається
                    stack.push(Math.trunc(operand1 / operand2));
                    break;
            }
        }
    }

    // Повертаємо результат оцінки виразу
    return stack[0];
}

console.log(evalRPN(["2", "1", "+", "3", "*"]));  // Виведе: 9
console.log(evalRPN(["4", "13", "5", "/", "+"])); // Виведе: 6
console.log(evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"])); // Виведе: 22
