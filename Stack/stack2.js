// Визначення вузла бінарного дерева
class Tree {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function inorderTraversal(root) {
    // Масив для зберігання впорядкованого обходу значень
    const result = [];

    // Рекурсивна функція для обходу бінарного дерева
    function traverse(node) {
        // Базовий випадок: якщо вузол не існує, повертаємо порожній масив
        if (!node) {
            return;
        }

        // Рекурсивно обходимо ліве піддерево
        traverse(node.left);
        
        // Додаємо значення поточного вузла до результату
        result.push(node.val);

        // Рекурсивно обходимо праве піддерево
        traverse(node.right);
    }

    // Викликаємо рекурсивну функцію для кореневого вузла
    traverse(root);

    // Повертаємо впорядкований масив
    return result;
}


const tree1 = new Tree(1, null, new Tree(2, new Tree(3)));
const tree2 = null;
const tree3 = new Tree(1);

console.log(inorderTraversal(tree1));  // Виведе: [1, 3, 2]
console.log(inorderTraversal(tree2));  // Виведе: []
console.log(inorderTraversal(tree3));  // Виведе: [1]
