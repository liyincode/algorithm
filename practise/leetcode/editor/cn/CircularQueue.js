class CircularQueue {
    #items
    #length = 0 // 队列的大小
    #count = 0 // 队列的长度
    #head = 0 // 指向队首元素的指针（数组下标）
    #tail = 0 // 指向队尾元素之后一个元素的指针（数组下标）

    constructor(length) {
        this.#items = Array(length)
        this.#length = length
    }

    enqueue(value) {
        if (this.#length === this.#count) {
            console.log('队列已满，无法放入', value)
            return false
        }

        this.#items[this.#tail] = value
        if (this.#tail === this.#length - 1) {
            this.#tail = (this.#tail + 1) % this.#length
        } else {
            this.#tail++
        }

        this.#count++
    }

    dequeue() {
        if (this.#count === 0) {
            console.log('队列为空')
            return false
        }

        const value = this.#items[this.#head]
        this.#count--;

        if (this.#head === this.#length - 1) {
            this.#head = (this.#head + 1) % this.#length
        } else {
            this.#head++
        }

        return value
    }

    display() {
        console.log('head ', this.#head)
        console.log('tail ', this.#tail)
        console.log('count ', this.#count)
        if (this.#count === 0) {
            console.log('display 队列为空')
            return false;
        }

        if (this.#head < this.#tail) {
            for (let i = this.#head; i < this.#tail; i++) {
                console.log(this.#items[i])
            }
        } else {
            for (let i = this.#head; i < this.#length; i++) {
                console.log(this.#items[i])
            }

            for (let i = 0; i < this.#tail; i++) {
                console.log(this.#items[i])
            }
        }
    }
}

let queue = new CircularQueue(7)
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)
queue.enqueue(5)
queue.enqueue(6)
queue.enqueue(7)
queue.enqueue(8)
// queue.enqueue(8)

// queue.dequeue()

queue.display()
