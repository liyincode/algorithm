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
        const root = new Node('head');
        let currentNode = this.head.next;
        while (currentNode !== null) {
            const next = currentNode.next;
            currentNode.next = root.next;
            root.next = currentNode;
            currentNode = next;
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
list.insert('chen', 'head');
list.insert('curry', 'chen');
list.insert('sang', 'head');
list.insert('zhao', 'head');
list.reverseList();
list.display();