// Визначення вузла бінарного дерева
class TreeNode {
    constructor(val = 0, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
    }
  }
  
  // Об'єкт для зберігання кількості встановлених камер
  const result = { cameras: 0 };
  
  // Функція для визначення мінімальної кількості камер
  function minCameraCover(root) {
    // Визначаємо стан вузла: 0 - не покритий, 1 - встановлена камера, 2 - покритий без камери
    function dfs(node) {
      if (!node) {
        return 2; // Порожній вузол вважається покритим без камери
      }
  
      const left = dfs(node.left);
      const right = dfs(node.right);
  
      // Якщо хоча б один з дочірніх вузлів не покритий, встановлюємо камеру на поточний вузол
      if (left === 0 || right === 0) {
        result.cameras++;
        return 1; // Поточний вузол вважається покритим з встановленою камерою
      }
  
      // Якщо обидва дочірні вузли покриті без камери, встановлюємо статус "покритий без камери" для поточного вузла
      if (left === 2 && right === 2) {
        return 0; // Поточний вузол вважається не покритим
      }
  
      // Якщо обидва дочірні вузли або один з них покритий з камерою, встановлюємо статус "покритий без камери" для поточного вузла
      return 2; // Поточний вузол вважається покритим без камери
    }
  
    // Виклик рекурсивної функції для кореня дерева
    const rootStatus = dfs(root);
  
    // Якщо корінь не покритий, встановлюємо камеру на корінь
    if (rootStatus === 0) {
      result.cameras++;
    }
  
    // Повертаємо мінімальну кількість камер, необхідних для оптимального покриття
    return result.cameras;
  }
  
  // Приклад використання:
  const tree1 = new TreeNode(0, new TreeNode(0, null, new TreeNode(0)), null);
  console.log(minCameraCover(tree1)); // Виведе: 1
  
  const tree2 = new TreeNode(0, new TreeNode(0, new TreeNode(0), null), null);
  console.log(minCameraCover(tree2)); // Виведе: 1
  