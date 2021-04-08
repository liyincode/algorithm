class Node {
    constructor(value) {
        this.next = null;
        this.value = value;
    }
}

class LinkedList {
    constructor() {
        this.head = new Node('head');
    }

    insert(preValue, newValue) {
        const newNode = new Node(newValue);
        const preNode = this.findNodeByValue(preValue);
        if (!preNode) {
            console.log('没有指定前置节点');
        }
        newNode.next = preNode.next;
        preNode.next = newNode;
    }

    insertAtHead(newValue) {
        let newNode = new Node(newValue);
        newNode.next = this.head.next;
        this.head.next = newNode;
    }

    insertAtTail(newValue) {
        let newNode = new Node(newValue);
        let currentNode = this.head;
        while (currentNode.next !== null) {
            currentNode = currentNode.next;
        }
        currentNode.next = newNode;

    }

    /**
     * 给指定节点之后插入
     * @param targetNode
     * @param value
     */
    insertAfter(targetNode, value) {
     if (!targetNode) {
         return;
     }

     const newNode = new Node(value);
     newNode.next = targetNode.next;
     targetNode.next = newNode;
    }

    /**
     * 删除给定节点之后的节点
     * @param targetNode
     */
    deleteNextNode(targetNode) {
        if (targetNode === null || targetNode.next === null) {
            return;
        }

        targetNode.next = targetNode.next.next;
    }

    /**
     * 删除指定节点
     * @param targetNode
     */
    deleteThisNode(targetNode) {
        if (targetNode === null | targetNode.next === null) {
            return;
        }

        if (targetNode === this.head) {
            this.head = this.head.next;
            return;
        }

        let prevNode = new Node();
        while (prevNode.next !== null && prevNode.next !== targetNode) {
            prevNode = prevNode.next;
        }

        if (prevNode.next === null) {
            return;
        }

        prevNode.next = prevNode.next.next;
    }

    deleteThisNode2(targetNode) {
        if (targetNode === null | this.head === null) {
            return;
        }

        const newHead = new Node();
        newHead.next = this.head;
        let prevNode = newHead;

        while (prevNode.next !== null && prevNode.next !== targetNode) {
            prevNode = prevNode.next;
        }

        if (prevNode.next === null) {
            return;
        }

        prevNode.next = prevNode.next.next;
        this.head = newHead.next;
    }

    findNodeByValue(value) {
        let targetNode = this.head;
        while (targetNode !== null && targetNode.value !== value) {
            targetNode = targetNode.next;
        }

        return targetNode;
    }

    display() {
        let currentNode = this.head;
        while ( currentNode !== null) {
            console.log(currentNode.value)
            currentNode = currentNode.next;
        }
    }

    getByIndex(targetIndex) {
        let index = 0;
        let currentNode = this.head;
        while (currentNode !== null) {
            if (index === targetIndex) return currentNode
            currentNode = currentNode.next;
            index++;
        }

        return null;
    }
}

let list = new LinkedList();
// list.insert('head', 11);
// list.insert(11, 22);
// list.insert(22, 33);
// list.insertAtHead(55)
list.insertAtTail('tail')
list.display();
console.log(list.getByIndex(2));