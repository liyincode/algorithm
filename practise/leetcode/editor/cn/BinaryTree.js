class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value)

        if (!this.root) {
            this.root = newNode
        } else {
            this.insertNode(this.root, newNode)
        }

    }

    insertNode(node, newNode) {
       if (newNode.value < node.value) {
           if (!node.left) {
               node.left = newNode
           } else {
               this.insertNode(node.left, newNode)
           }
       } else {
           if (!node.right) {
               node.right = newNode
           } else {
               this.insertNode(node.right, newNode)
           }
       }
    }

    remove(value) {
       this.root = this.removeNode(this.root, value)
    }

    removeNode(node, value) {
        if (!node) {
            return null
        }

        if (value < node.value) {
            node.left = this.removeNode(node.left, value)
            return node
        } else if (value > node.value) {
            node.right = this.removeNode(node.right, value)
            return node
        } else {
           // 1. 如果是叶子节点
            if (node.left === null && node.right === null) {
                node = null
                return node
            }

            // 2. 节点具有一个子节点
            if (node.left === null) {
                node = node.right
                return node
            } else if (node.right === null) {
                node = node.left
                return node
            }

            // 3. 节点有两个子节点
            // 找到右子树大于该节点的最小的节点
            const minNode = this.findMinNode(node.right)
            // 将该节点的值替换为右子树最小节点的值
            node.value = minNode.value
            // 再将右子树中的那个最小节点删除
            this.removeNode(node.right, minNode.value)
            return node
        }
    }

    findMinNode(node) {
        if (node.left === null) {
            return node
        } else {
            return this.findMinNode(node.left)
        }
    }

    inOrderTraversal(node) {
        if (node !== null) {
            console.log(node.value);
            this.inOrderTraversal(node.left);
            this.inOrderTraversal(node.right);
        }
    }
}

const binaryTree = new BinaryTree();
binaryTree.insert(15);
binaryTree.insert(6);
binaryTree.insert(3);
binaryTree.insert(10);
binaryTree.insert(7);
binaryTree.insert(13);
binaryTree.insert(20);
binaryTree.insert(5);
binaryTree.insert(8);

// binaryTree.inOrderTraversal(binaryTree.root)

binaryTree.remove(20)
binaryTree.inOrderTraversal(binaryTree.root)
