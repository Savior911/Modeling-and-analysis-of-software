function findFirstUniqueCharIndex(s) {
    // Створюємо об'єкт для відстеження кількості входжень кожного символу
    const charCount = {};
  
    // Проходимося по рядку та рахуємо кількість входжень кожного символу
    for (let i = 0; i < s.length; i++) {
      const char = s[i];
      charCount[char] = (charCount[char] || 0) + 1;
    }
  
    // Проходимося по рядку ще раз, щоб знайти перший унікальний символ
    for (let i = 0; i < s.length; i++) {
      const char = s[i];
      if (charCount[char] === 1) {
        // Знайшли перший унікальний символ, повертаємо його індекс
        return i;
      }
    }
  
    // Якщо не знайшли унікальний символ, повертаємо -1
    return -1;
  }
  
  console.log(findFirstUniqueCharIndex("leopard"));      // Вивід: 0
  console.log(findFirstUniqueCharIndex("loveleopard"));  // Вивід: 2
  console.log(findFirstUniqueCharIndex("aabb"));         // Вивід: -1
  