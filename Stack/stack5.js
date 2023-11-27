function decodeString(s) {
    // Стек для зберігання символів рядка та їх кількостей
    const stack = [];
    
    // Змінна для зберігання поточного числа
    let currentNum = 0;
    
    // Змінна для зберігання поточного декодованого рядка
    let currentStr = '';

    // Обхід рядка
    for (const char of s) {
        if (char >= '0' && char <= '9') {
            // Якщо символ - цифра, оновлюємо поточне число
            currentNum = currentNum * 10 + parseInt(char, 10);
        } else if (char === '[') {
            // Якщо символ - відкриваюча дужка, зберігаємо поточний декодований рядок та поточне число в стек
            stack.push(currentStr);
            stack.push(currentNum);
            
            // Скидаємо поточні значення
            currentStr = '';
            currentNum = 0;
        } else if (char === ']') {
            // Якщо символ - закриваюча дужка, отримуємо попереднє число та рядок зі стеку
            const prevNum = stack.pop();
            const prevStr = stack.pop();
            
            // Додаємо поточний декодований рядок k разів до попереднього рядка
            currentStr = prevStr + currentStr.repeat(prevNum);
        } else {
            // Якщо символ - літера, додаємо його до поточного декодованого рядка
            currentStr += char;
        }
    }

    // Повертаємо кінцевий результат
    return currentStr;
}

console.log(decodeString("3[a]2[bc]"));    // Виведе: "aaabcbc"
console.log(decodeString("3[a2[c]]"));     // Виведе: "accaccacc"
console.log(decodeString("2[abc]3[cd]ef")); // Виведе: "abcabccdcdcdef"
