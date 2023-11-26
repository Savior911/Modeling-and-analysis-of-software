class List {
    constructor(val, next = null) {
      this.val = val;
      this.next = next;
    }
  }

  const mergeKLists = (lists) => {
    // Перевіримо, чи є списки
    if (lists.length === 0) {
      return null;
    }
  
    // Функція для об'єднання двох списків
    const mergeTwoLists = (l1, l2) => {
      // Створимо заглушку для нового списку
      const temp = new List(0);
      let current = temp;
  
      // Поки обидва списки не закінчаться
      while (l1 !== null && l2 !== null) {
        // Якщо значення першого вузла менше значення другого вузла, додамо перший вузол до нового списку
        if (l1.val < l2.val) {
          current.next = l1;
          l1 = l1.next;
        } else {
          // Якщо значення другого вузла менше або дорівнює значенню першого вузла, додамо другий вузол до нового списку
          current.next = l2;
          l2 = l2.next;
        }
  
        // Перейдемо до наступного вузла в новому списку
        current = current.next;
      }
  
      // Додамо до нового списку останній вузол з того списку, який не закінчився
      current.next = l1 !== null ? l1 : l2;
  
      // Повернемо перший вузол нового списку
      return temp.next;
    };
  
    // Поки кількість списків більше одного
    while (lists.length > 1) {
      // Створимо масив з об'єднаними списками
      const mergedLists = [];
  
      // Переберемо списки по два
      for (let i = 0; i < lists.length; i += 2) {
        // Отримаємо перший і другий список
        const list1 = lists[i];
        const list2 = i + 1 < lists.length ? lists[i + 1] : null;
  
        // Об'єднаємо два списки
        const mergedList = mergeTwoLists(list1, list2);
  
        // Додамо об'єднаний список до масиву
        mergedLists.push(mergedList);
      }
  
      // Замінимо список на об'єднані списки
      lists = mergedLists;
    }
  
    // Повернемо перший список
    return lists[0];
  };
  
  // Приклади використання:
  const example1 = [
    new List(1, new List(4, new List(5))),
    new List(1, new List(3, new List(4))),
    new List(2, new List(6))
  ];
  
  const result1 = mergeKLists(example1);
  console.log(result1); // Виведе: List { val: 1, next: List { val: 1, next: List { val: 2, next: List { val: 3, next: List { val: 4, next: List { val: 4, next: List { val: 5, next: List { val: 6, next: null } } } } } } } }
  
  const example2 = [];
  const result2 = mergeKLists(example2);
  console.log(result2); // Виведе: null
  
  const example3 = [[]];
  const result3 = mergeKLists(example3);
  console.log(result3); // Виведе: null
  