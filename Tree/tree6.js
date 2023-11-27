// Визначення вузла бінарного дерева
class TreeNode {
    constructor(val = 0, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
    }
  }
  
  // Об'єкт для зберігання максимальної суми шляху
  const result = { maxSum: Number.MIN_SAFE_INTEGER };
  
  // Функція для знаходження максимальної суми шляху
  function maxPathSum(root) {
    // Рекурсивна функція для знаходження максимальної суми шляху з даного вузла
    function findMaxPathSum(node) {
      // Базовий випадок: якщо вузол порожній, повертаємо 0
      if (!node) {
        return 0;
      }
  
      // Знаходимо максимальну суму для лівого та правого піддерева
      const leftMax = Math.max(findMaxPathSum(node.left), 0);
      const rightMax = Math.max(findMaxPathSum(node.right), 0);
  
      // Оновлюємо максимальну суму шляху, якщо можливо отримати кращий шлях через поточний вузол
      result.maxSum = Math.max(result.maxSum, node.val + leftMax + rightMax);
  
      // Повертаємо максимальну суму для шляху, що проходить через поточний вузол
      return node.val + Math.max(leftMax, rightMax);
    }
  
    // Виклик рекурсивної функції для кореня дерева
    findMaxPathSum(root);
  
    // Повертаємо максимальну суму шляху
    return result.maxSum;
  }
  
  // Приклад використання:
  const tree1 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
  console.log(maxPathSum(tree1)); // Виведе: 6
  
  const tree2 = new TreeNode(-10, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)));
  console.log(maxPathSum(tree2)); // Виведе: 42
  