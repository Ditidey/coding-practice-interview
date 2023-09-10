class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function branchSums(root) {
    let sum = [];
    findSum(root, 0, sum)
    return sum
}

function findSum(node, curSum, sum) {
    if (node == null) {
        return;
    }
    let newCurSum = curSum + node.value;
    if (node.left == null && node.right == null) {
        sum.push(newCurSum)
        return;
    }
    findSum(node.left, newCurSum, sum)
    findSum(node.right, newCurSum, sum)
}
const nodes = [
    {"id": "1", "left": null, "right": null, "value": 1}
  ];
const tree = new BinaryTree(nodes)
const result = branchSums(1)
console.log(result)