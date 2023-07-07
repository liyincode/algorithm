//请你仅使用两个队列实现一个后入先出（LIFO）的栈，并支持普通栈的全部四种操作（push、top、pop 和 empty）。
//
// 实现 MyStack 类：
//
//
// void push(int x) 将元素 x 压入栈顶。
// int pop() 移除并返回栈顶元素。
// int top() 返回栈顶元素。
// boolean empty() 如果栈是空的，返回 true ；否则，返回 false 。
//
//
//
//
// 注意：
//
//
// 你只能使用队列的基本操作 —— 也就是 push to back、peek/pop from front、size 和 is empty 这些操作。
// 你所使用的语言也许不支持队列。 你可以使用 list （列表）或者 deque（双端队列）来模拟一个队列 , 只要是标准的队列操作即可。
//
//
//
//
// 示例：
//
//
//输入：
//["MyStack", "push", "push", "top", "pop", "empty"]
//[[], [1], [2], [], [], []]
//输出：
//[null, null, null, 2, 2, false]
//
//解释：
//MyStack myStack = new MyStack();
//myStack.push(1);
//myStack.push(2);
//myStack.top(); // 返回 2
//myStack.pop(); // 返回 2
//myStack.empty(); // 返回 False
//
//
//
//
// 提示：
//
//
// 1 <= x <= 9
// 最多调用100 次 push、pop、top 和 empty
// 每次调用 pop 和 top 都保证栈不为空
//
//
//
//
// 进阶：你能否仅用一个队列来实现栈。
//
// Related Topics 栈 设计 队列 👍 564 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
class MyStack {


    constructor() {

    }

    push(x: number): void {

    }

    pop(): number {

    }

    top(): number {

    }

    empty(): boolean {

    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
//leetcode submit region end(Prohibit modification and deletion)

/*
双队列解法

这个题的思路就是，栈移除元素要在栈顶移除，队列移除元素要在队首移除
所以，当移除元素时，元素一定要放在队列头部
入栈的时候，先将这个元素放到临时队列里，然后将队列中的元素出队列到临时队列里，然后将临时队列复制到队列中
这样就保证之后入栈的元素都在队列头
 */
//class MyStack {
//     private queue: number[]
//     private tempQueue: number[]
//
//     constructor() {
//         this.queue = []
//         this.tempQueue = []
//     }
//
//     push(x: number): void {
//         this.tempQueue.push(x);
//         while (this.queue.length) {
//             this.tempQueue.push(this.queue.shift() as number)
//         }
//         this.queue = [...this.tempQueue]
//         this.tempQueue = []
//     }
//
//     pop(): number {
//         return this.queue.shift() as number
//     }
//
//     top(): number|null {
//         if (this.queue.length) {
//             return this.queue[0]
//         } else {
//             return null
//         }
//     }
//
//     empty(): boolean {
//         return this.queue.length === 0
//     }
// }

/*
 单队列解法

 如果移除元素，只能放在队列队首
 所以每次 push 的元素都放在队首，把之前的元素出队列之后放在这个元素后面就行
 */
//class MyStack {
//     private queue: number[]
//
//     constructor() {
//         this.queue = []
//     }
//
//     push(x: number): void {
//         const itemCount = this.queue.length
//         this.queue.push(x);
//
//         if (itemCount > 0) {
//             for (let i = 0; i < itemCount; i++) {
//                 this.queue.push(this.queue.shift() as number)
//             }
//         }
//     }
//
//     pop(): number {
//         return this.queue.shift() as number
//     }
//
//     top(): number|null {
//         if (this.queue.length) {
//             return this.queue[0]
//         } else {
//             return null
//         }
//     }
//
//     empty(): boolean {
//         return this.queue.length === 0
//     }
// }
