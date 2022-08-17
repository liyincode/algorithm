class ArrayStack {
    #items // 数组
    #count // 栈中元素个数
    #n // 栈的大小

    constructor(n) {
        this.#items = Array(n)
        this.#count = 0
        this.#n = n
    }

    push(item) {
        if (this.#count === this.#n) return false;

        this.#items[this.#count] = item
        this.#count++

        return true;
    }

    pop() {
        if (this.#count === 0) return -1

        const value = this.#items[this.#count - 1]
        this.#count--

        return value
    }

    peek() {
        if (this.#count === 0) return -1

        return this.#items[this.#count - 1]
    }
}

let arrayStack = new ArrayStack(6)
arrayStack.push(1)
arrayStack.push(2)
arrayStack.push(3)
arrayStack.push(4)
arrayStack.push(5)
arrayStack.push(6)
arrayStack.push(7)

console.log(arrayStack.pop())
console.log(arrayStack.pop())
