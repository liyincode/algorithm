class treeNode {
    data: any
    left: treeNode | null
    right: treeNode | null

    constructor(data: any, left: treeNode | null = null, right: treeNode | null = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }

    // 前序遍历
    preOrder() {
        console.log(this.data)
        if (this.left) {
            this.left.preOrder();
        }
        if (this.right) {
            this.right.preOrder();
        }

    }

    // 中序遍历
    inOrder() {
        if (this.left) {
            this.left.inOrder()
        }
        console.log(this.data)
        if (this.right) {
            this.right.inOrder()
        }

    }

    // 后序遍历
    postOrder() {
        if (this.left) {
            this.left.postOrder()
        }
        if (this.right) {
            this.right.postOrder()
        }
        console.log(this.data)
    }

    // 广度优先遍历
    bfs() {
        const queue: treeNode[] = [this]

        while (queue.length > 0) {
            const node = queue.shift()!
            console.log(node.data)

            if (node.left) {
                queue.push(node.left)
            }
            if (node.right) {
                queue.push(node.right)
            }
        }

    }
}

let node4 = new treeNode(4)
let node5 = new treeNode(5)
let node6 = new treeNode(6)
let node3 = new treeNode(3, node6)
let node2 = new treeNode(2, node4, node5)
let root = new treeNode(1, node2, node3)

// 调用各种遍历方法
console.log("Pre-order traversal:");
root.preOrder();

console.log("In-order traversal:");
root.inOrder();

console.log("Post-order traversal:");
root.postOrder();

console.log("BFS traversal:");
root.bfs();
