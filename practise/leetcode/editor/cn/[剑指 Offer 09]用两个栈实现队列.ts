//用两个栈实现一个队列。队列的声明如下，请实现它的两个函数 appendTail 和 deleteHead ，分别完成在队列尾部插入整数和在队列头部删除整数的
//功能。(若队列中没有元素，deleteHead 操作返回 -1 )
//
//
//
// 示例 1：
//
// 输入：
//["CQueue","appendTail","deleteHead","deleteHead"]
//[[],[3],[],[]]
//输出：[null,null,3,-1]
//
//
// 示例 2：
//
// 输入：
//["CQueue","deleteHead","appendTail","appendTail","deleteHead","deleteHead"]
//[[],[],[5],[2],[],[]]
//输出：[null,-1,null,null,5,2]
//
//
// 提示：
//
//
// 1 <= values <= 10000
// 最多会对 appendTail、deleteHead 进行 10000 次调用
//
//
// Related Topics 栈 设计 队列 👍 593 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
class CQueue {
    private inStack: number[];
    private outStack: number[];
    constructor() {
        this.inStack = [];
        this.outStack = [];
    }

    appendTail(value: number): void {
        this.inStack.push(value);
    }

    deleteHead(): number {
        if (!this.outStack.length) {
            if (!this.inStack.length) {
                return -1;
            }

            this.inOut();
        }

        return this.outStack.pop() as number;
    }

    inOut(): void {
        while (this.inStack.length) {
            this.outStack.push(this.inStack.pop() as number)
        }
    }
}

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */
//leetcode submit region end(Prohibit modification and deletion)

let queue = new CQueue()
queue.appendTail(1)
queue.appendTail(2)
queue.appendTail(3)
queue.appendTail(4)
queue.deleteHead()
