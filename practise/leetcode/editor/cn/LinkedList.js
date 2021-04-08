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

    checkCircle() {
        let fast = this.head.next;
        let slow = this.head;
        while (fast !== null && fast.next !== null) {
            fast = fast.next.next;
            slow = slow.next;
            if (slow === fast) return true;
        }

        return false;
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

    /**
     * 在链表头部插入节点
     * @param value
     */
    insertAtHead(value) {
        const newNode = new Node(value);
        newNode.next = this.head.next;
        this.head.next = newNode;
    }

    /**
     * 链表尾部插入节点
     * @param value
     */
    insertAtTail(value) {
      const newNode = new Node(value);
      let currentNode = this.head;
      while (currentNode.next !== null ) {
          currentNode = currentNode.next;
      }
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

    // 获取第 K 个节点
    getByIndex(k) {
        // 用 p 来遍历链表
        let p = this.head;
        let i = 0;
        while (p !== null) {
            if (i === k) return p;
            p = p.next;
            i++;
        }

        return null;
    }
}

let list = new LinkedList();
list.insert('aaa', 'head');
list.insert('bbb', 'aaa');
list.insert('ccc', 'bbb');
list.insert('ddd', 'ccc');
list.insertAtHead(11)
list.insertAtTail(12);
list.display();

