function movesToStamp(stamp, target) {
    // Довжина штампу
    const stampLength = stamp.length;
    // Довжина цільового рядка
    const targetLength = target.length;

    function canStampAt(index, stamped) {
        let changed = false;

        // Ітерація по штампу та перевірка, чи збігаються відповідні символи в рядку зі штампом
        for (let i = 0; i < stampLength; i++) {
            if (stamped[index + i] === '?' || stamped[index + i] === stamp[i]) {
                stamped[index + i] = '?'; // Позначити символ як проштампований
                changed = true;
            } else {
                return false; // Якщо символ не збігається, штамп не можна розмістити
            }
        }

        return changed; // Повертає true, якщо були внесені будь-які зміни
    }

    // Ініціалізуйте пустий масив результатів для зберігання позицій штампу
    const result = [];

    // Створіть копію цільового рядка для представлення рядка зі штампом
    let stamped = Array(targetLength).fill('?');
    // Ініціалізуйте загальну кількість переміщень як 0
    let totalMoves = 0;

    // Продовжуйте ітерації до досягнення максимальної кількості переміщень
    while (totalMoves < 10 * targetLength) {
        let foundStamp = false; // Прапор, що вказує, чи був знайдений штамп

        // Перебираємо цільовий рядок, перевіряючи, чи можна розмістити штамп на кожній позиції
        for (let i = 0; i <= targetLength - stampLength; i++) {
            if (canStampAt(i, stamped)) {
                result.unshift(i); // Додайте позицію штампу до результату
                foundStamp = true;
                totalMoves += stampLength; // Збільште загальну кількість переміщень

                if (totalMoves === targetLength) { // Перевірте, чи ціль повністю проштампована
                    return result; // Поверніть результат, якщо ціль проштампована
                }
            }
        }

        if (!foundStamp) { // Якщо штамп не знайдено, процес неможливий
            break;
        }
    }

    // Повертає результат, якщо він не порожній, інакше повертає порожній масив
    return result.length > 0 ? result : [];
}

// Приклад використання:
const stamp1 = "abc";
const target1 = "ababc";
console.log(movesToStamp(stamp1, target1)); // Output: [0, 2]

const stamp2 = "abca";
const target2 = "aabcaca";
console.log(movesToStamp(stamp2, target2)); // Output: [3, 0, 1]
