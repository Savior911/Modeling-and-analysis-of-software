 // Визначення вузла бінарного дерева.
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
 
function isSameTree(p, q) {
    if (!p && !q) return true;
    if (!p || !q || p.val !== q.val) return false;
    
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}

const example1_p = {val: 1, left: {val: 2, left: null, right: null}, right: {val: 3, left: null, right: null}};
const example1_q = {val: 1, left: {val: 2, left: null, right: null}, right: {val: 3, left: null, right: null}};
console.log(isSameTree(example1_p, example1_q));  // результат: true

const example2_p = {val: 1, left: {val: 2, left: null, right: null}, right: null};
const example2_q = {val: 1, left: null, right: {val: 2, left: null, right: null}};
console.log(isSameTree(example2_p, example2_q));  // результат: false

const example3_p = {val: 1, left: {val: 2, left: null, right: null}, right: {val: 1, left: null, right: null}};
const example3_q = {val: 1, left: {val: 1, left: null, right: null}, right: {val: 2, left: null, right: null}};
console.log(isSameTree(example3_p, example3_q));  // результат: false
