// 区分前序，中序，后序遍历的关键是，根结点打印的时机
// 前序遍历，根结点 -》左子树 -》右子树
// 中序遍历，左子树 -》根结点 -》右子树
// 后序遍历，左子树 -》右子树 -》根结点

// 前序遍历
function preOrder(root) {
    if (!root) {
        return;
    }
    console.log(root.data)
    preOrder(root.left)
    preOrder(root.right)
}

// 中序遍历
function inOrder(root) {
    if (!root) return;

    preOrder(root.left)
    console.log(root.data)
    preOrder(root.right)
}

// 后序遍历
function postOrder(root) {
    if (!root) return;

    preOrder(root.left)
    preOrder(root.right)
    console.log(root.data)
}

class Node {
     constructor(data, left, right) {
         this.data = data;
         this.left = left;
         this.right = right;
     }
}


let node4 = new Node(4, null, null)


let node5 = new Node(5, null, null)
let node6 = new Node(6, null, null)


let node3 = new Node(3, node6, null)
let node2 = new Node(2, node4, node5)
let node1 = new Node(1, node2, node3)

// preOrder(node1)
// inOrder(node1)
postOrder(node1)
