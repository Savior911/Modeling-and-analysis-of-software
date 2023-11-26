class List {
    constructor(val, next = null) {
      this.val = val;
      this.next = next;
    }
  }
  
  function removeDuplicates(head) {
    // Якщо список порожній, просто поверніть його
    if (head === null) {
      return head;
    }
  
    // Створюємо змінну, яка буде використовуватися для просування по списку
    let current = head;
  
    // Поки ми не досягнемо кінця списку
    while (current.next !== null) {
      // Якщо значення вузлів збігаються
      if (current.val === current.next.val) {
        // Вилучаємо наступний вузол зі списку
        current.next = current.next.next;
      } else {
        // Переходимо до наступного вузла
        current = current.next;
      }
    }
  
    // Повертаємо заголовок списку
    return head;
  }
  
  // Функція для виведення зв'язаного списку у вигляді масиву для перевірки результату
  function convertListToArray(head) {
    // Створюємо масив для зберігання результату
    const resultArray = [];
  
    // Проходимо по списку, додаючи значення кожного вузла до масиву
    let current = head;
    while (current !== null) {
      resultArray.push(current.val);
      current = current.next;
    }
  
    // Повертаємо масив
    return resultArray;
  }
  
  // Приклади використання
  const list1 = new List(1, new List(1, new List(2)));
  const list2 = new List(1, new List(1, new List(2, new List(3, new List(3)))));
  
  const result1 = removeDuplicates(list1);
  const result2 = removeDuplicates(list2);
  
  // Виведення результату
  console.log(convertListToArray(result1)); // [1, 2]
  console.log(convertListToArray(result2)); // [1, 2, 3]
  