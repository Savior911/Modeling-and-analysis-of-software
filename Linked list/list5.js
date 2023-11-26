class List {
    constructor(val, next = null) {
      this.val = val;
      this.next = next;
    }
  }
  
  function deleteNode(node) {
    // Якщо вузол не існує або він є останнім вузлом, просто поверніть
    if (!node || !node.next) {
      return;
    }
  
    // Присвоїмо значення наступного вузла поточному вузлу
    node.val = node.next.val;
  
    // Присвоїмо наступним вузлом наступного наступного вузла
    node.next = node.next.next;
  }
  
  // Функція для виведення зв'язаного списку у вигляді масиву для перевірки результату
  function convertListToArray(head) {
    // Створимо масив для зберігання результату
    const resultArray = [];
  
    // Переберемо всі вузли списку
    let current = head;
    while (current !== null) {
      // Додамо значення поточного вузла в масив
      resultArray.push(current.val);
  
      // Перейдемо до наступного вузла
      current = current.next;
    }
  
    // Повернемо масив
    return resultArray;
  }
  
  // Приклади використання
  const list1 = new List(4, new List(5, new List(1, new List(9))));
  const node1 = list1.next; // вибираємо вузол зі значенням 5
  
  const list2 = new List(4, new List(5, new List(1, new List(9))));
  const node2 = list2.next.next; // вибираємо вузол зі значенням 1
  
  // Видалимо вузол
  deleteNode(node1);
  deleteNode(node2);
  
  // Виведемо результат
  console.log(convertListToArray(list1)); // [4, 1, 9]
  console.log(convertListToArray(list2)); // [4, 5, 9]
  