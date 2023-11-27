
function isValid(s) {
    // Стек для відстеження відкритих дужок
    const stack = [];
    
    // Обхід кожного символу у рядку
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        
        // Якщо це відкрита дужка, додаємо її до стеку
        if (char === '(' || char === '[' || char === '{') {
            stack.push(char);
        } else {
            // Якщо це закрита дужка, перевіряємо, чи відповідає вона останній відкритій дужці
            const lastOpen = stack.pop();
            if (
                (char === ')' && lastOpen !== '(') ||
                (char === ']' && lastOpen !== '[') ||
                (char === '}' && lastOpen !== '{')
            ) {
                // Якщо не відповідає, повертаємо false
                return false;
            }
        }
    }
    
    // Перевіряємо, чи стек порожній після обходу всього рядка
    return stack.length === 0;
}


console.log(isValid("()"));      // Виведе: true
console.log(isValid("()[]{}"));  // Виведе: true
console.log(isValid("(]"));      // Виведе: false
console.log(isValid("[i]"));     // Виведе: false

