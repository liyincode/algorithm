class Node {
    constructor(value) {
        this.next = null
        this.value = value
    }
}

class LinkedListStack {
    #head = null

    push(val) {
        let newNode = new Node(val)
        newNode.next = this.#head;
        this.#head = newNode;
    }

    pop() {
        if (this.#head === null) return -1;

        const value = this.#head.value;
        this.#head = this.#head.next;

        return value;
    }

    peak() {
        return this.#head.value;
    }

    display() {
        let curr = this.#head
        while (curr) {
            console.log(curr.value)
            curr = curr.next;
        }
    }
}


let stack = new LinkedListStack()
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
stack.push(5)

stack.pop()

stack.display()
