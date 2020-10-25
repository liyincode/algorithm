class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = new Node('head');
    }

    reverseList() {
        /**
         *
         * head -> aaa -> bbb -> ccc -> ddd
         * root: head                             currentNode: aaa -> bbb -> ccc -> ddd
         * root: head -> aaa                      currentNode: bbb -> ccc -> ddd
         * root: head -> bbb -> aaa               currentNode: ccc -> ddd
         * root: head -> ccc -> bbb -> aaa        currentNode: ddd
         * root: head -> ddd -> ccc -> bbb -> aaa currentNode:
         */
        const root = new Node('head');
        let currentNode = this.head.next;
        while (currentNode) {
            const temp = currentNode.next;
            currentNode.next = root.next;
            // 反转后的结果给 root
            root.next = currentNode;
            currentNode = temp;
        }
        this.head = root;
    }

    insert(newElement, element) {
        const currentNode = this.findByValue(element);
        if (currentNode === -1) {
            console.log('未找到插入位置');
            return;
        }
        const newNode = new Node(newElement);
        newNode.next = currentNode.next;
        currentNode.next = newNode;
    }

    findByValue(data) {
        let currentNode = this.head;
        while (currentNode !== null && currentNode.element !== data) {
            currentNode = currentNode.next;
        }
        return currentNode === null ? -1 : currentNode;
    }

    display() {
        let currentNode = this.head;
        while (currentNode !== null) {
            console.log(currentNode.element);
            currentNode = currentNode.next;
        }
    }
}

let list = new LinkedList();
list.insert('aaa', 'head');
list.insert('bbb', 'aaa');
list.insert('ccc', 'bbb');
list.insert('ddd', 'ccc');
list.reverseList();
list.display();