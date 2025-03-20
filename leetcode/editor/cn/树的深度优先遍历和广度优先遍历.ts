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

    // 非递归前序遍历
    preOrderIterative() {
        const stack : treeNode[] = [this]

        while (stack.length) {
            const node = stack.pop()
            console.log(node.data)

            // 先压右子节点，再压左子节点，到时候先打印左子节点，后右子节点
            if (node.right) {
                stack.push(node.right)
            }

            if (node.left) {
                stack.push(node.left)
            }
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

    // 非递归中序遍历
    inOrderIterative() {
        const stack: treeNode[] = []
        let curr: treeNode = this

        while (curr || stack.length) {
            // 遍历找到左叶子节点
            while (curr) {
                stack.push(curr)
                curr = curr.left
            }

            // 出栈打印
            curr = stack.pop()
            console.log(curr.data)

            // 转向右子节点
            curr = curr.right
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

    postOrderIterative() {
        const stack1: treeNode[] = [this]
        const stack2: treeNode[] = []

        while (stack1.length) {
            const node = stack1.pop()
            stack2.push(node)

            if (node.left) {
                stack1.push(node.left)
            }
            if (node.right) {
                stack1.push(node.right)
            }
        }

        while (stack2.length) {
            const node = stack2.pop()
            console.log(node.data)
        }
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
console.log("Pre-order-iterative traversal :")
root.preOrderIterative()

console.log("In-order traversal:");
root.inOrder();
console.log("In-order-iterative traversal :")
root.inOrderIterative();

console.log("Post-order traversal:");
root.postOrder();
console.log("Post-order-iterative traversal:");
root.postOrderIterative();

console.log("BFS traversal:");
root.bfs();
