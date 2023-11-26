class List {
    // Конструктор вузла списку
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

// Функція для об'єднання двох відсортованих списків
function mergeTwoSortedLists(list1, list2) {
    // Створюємо новий список, який буде містити об'єднані вузли
    let mergedList = new List(-1);
    let current = mergedList;

    // Поки обидва списки не закінчаться
    while (list1 !== null && list2 !== null) {
        // Порівнюємо значення перших вузлів двох списків
        if (list1.val < list2.val) {
            // Додаємо перший вузол першого списку до нового списку
            current.next = list1;
            list1 = list1.next;
        } else {
            // Додаємо перший вузол другого списку до нового списку
            current.next = list2;
            list2 = list2.next;
        }

        // Переходимо до наступного вузла нового списку
        current = current.next;
    }

    // Додаємо залишки, якщо є
    if (list1 !== null) {
        current.next = list1;
    } else {
        current.next = list2;
    }

    // Повертаємо заголовок об'єднаного списку
    return mergedList.next;
}

// Приклади використання
const list1 = new List(1, new List(2, new List(4)));
const list2 = new List(1, new List(3, new List(4)));

// Виклик функції об'єднання
const mergedList = mergeTwoSortedLists(list1, list2);

// Виведення результату
let resultArray = [];
let current = mergedList;
while (current !== null) {
    resultArray.push(current.val);
    current = current.next;
}

console.log(resultArray);  // [1, 1, 2, 3, 4, 4]
