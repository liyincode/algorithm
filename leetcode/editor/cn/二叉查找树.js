/*
二叉查找树

比当前节点小的数，放在左子树，大的数放在右子树
 */

class Node {
    constructor(data, left, right) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

function display(node) {
    if (!node) {
        return;
    }
    console.log(node.data)
    display(node.left)
    display(node.right)
}

let node7 = new Node(7, null, null)
let node13 = new Node(13, null, null)
let node26 = new Node(26, null, null)
let node3 = new Node(3, null, null)

let node10 = new Node(10, node7, node13)

let node6 = new Node(6, node3, node10)
let node20 = new Node(20, node26, null)

let node15 = new Node(15, node6, node20)

// 递归查询
function reFind(node, data) {
    if (!node) {
        return null;
    }
    if (node.data === data) {
        return node;
    }

    if (data >= node.data) {
        return find(node.right, data)
    }
    if (data <= node.data) {
        return find(node.left, data)
    }
}

// let targetNode = reFind(node15, 10)
// console.log(targetNode)

// 迭代查询
function find(node, data) {
    while (node) {
        console.log(node.data)
        if (node.data === data) {
            return node;
        }

        if (node.data < data) {
            node = node.right;
        }
        if (node.data > data) {
            node = node.left;
        }
    }
    return null;
}

// let targetNode2 = find(node15, 20)
// console.log(targetNode2)

// 递归插入
function reInsert(node, data) {
    if (data < node.data) {
        if (!node.left) {
            let newNode = new Node(data, null, null)
            node.left = newNode
        } else {
            reInsert(node.left, data)
        }
    } else {
       if (!node.right) {
           let newNode = new Node(data, null, null)
           node.right = newNode;
       } else {
           reInsert(node.right, data)
       }
    }
}

// 迭代插入
function insert(node, data) {
    let newNode = new Node(data, null, null)
    let curr = node
    while (curr) {
        if (data < curr.data) {
            if (!curr.left) {
                curr.left = newNode
                return
            }
            curr = curr.left
        } else {
            if (!curr.right) {
                curr.right = newNode
                return
            }
            curr = curr.right
        }
    }

}

display(node15)
console.log('------------------------------')
// reInsert(node15, 8)

insert(node15, 8)
display(node15)
