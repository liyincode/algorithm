'use strict'
// 栈排序。 编写程序，对栈进行排序使最小元素位于栈顶。最多只能使用一个其他的临时栈存放数据，但不得将元素复制到别的数据结构（如数组）中。该栈支持如下操作：
// push、pop、peek 和 isEmpty。当栈为空时，peek 返回 -1。
//
// 示例1:
//
//  输入：
// ["SortedStack", "push", "push", "peek", "pop", "peek"]
// [[], [1], [2], [], [], []]
// 输出：
// [null,null,null,1,null,2]
//
//
// 示例2:
//
//  输入：
// ["SortedStack", "pop", "pop", "push", "pop", "isEmpty"]
// [[], [], [], [1], [], []]
// 输出：
// [null,null,null,null,null,true]
//
//
// 说明:
//
//
// 栈中的元素数目在[0, 5000]范围内。
//
//
// Related Topics 栈 设计 单调栈 👍 76 👎 0
// leetcode submit region begin(Prohibit modification and deletion)


/**
 * Your SortedStack object will be instantiated and called as such:
 * var obj = new SortedStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.isEmpty()
 */
// leetcode submit region end(Prohibit modification and deletion)
const stack = new SortedStack()
// stack.findMinValue()
// stack.push(1)
// stack.push(2)
// stack.push(3)
// stack.push(4)
// // console.log(stack.display())
// console.log('peek result ', stack.peek());
// console.log('pop result ', stack.pop())
// console.log('pop result ', stack.pop())
// console.log('peek result ', stack.peek());

const handleList = ["SortedStack", "isEmpty", "pop", "push", "push", "pop", "pop", "push", "push", "peek", "push", "push", "peek", "push", "isEmpty", "isEmpty", "isEmpty", "peek", "pop", "pop", "push", "peek"]
const paramList = [[], [], [], [21], [0], [], [], [4], [9], [], [5], [7], [], [4], [], [], [], [], [], [], [16], []]

for (let i = 1; i < handleList.length; i++) {
    const handle = handleList[i]
    console.log(stack.stack)
    switch (handle) {
        case 'push':
            console.log('push ', paramList[i][0], 'null')
            stack.push(paramList[i][0])
            break
        case 'peek':
            console.log('peek ', 'null', stack.peek())
            break
        case 'pop':
            console.log('pop ', 'null', stack.pop())
            break
        case 'isEmpty':
            console.log('isEmpty', stack.isEmpty())
    }
}

/**
 * 思路：
 * 利用一个临时栈，
 * 第一步，将原始栈一个一个出栈到临时栈，把最小值计算出来
 * 第二步，将临时栈一个一个出栈到原始栈里，这里如果是 pop，就不把那个最小值放回去，如果是 peek 放回去就行，还原之前的样子
 * 注意：
 * 1. 每次 peek，都要出栈进栈倒腾，时间复杂度会很高，这里 peek 的时候缓存下最小值，下次 peek 的时候直接 return 最小值就行
 */
// class SortedStack {
//     stack = []
//     minValue = null
//
//     constructor() {
//         this.stack = []
//     }
//
//     push(val) {
//         this.stack.push(val)
//
//         // 只要改变了栈的元素，就把最小值置空
//         this.minValue = null
//     }
//
//     pop() {
//         if (this.isEmpty()) {
//             return null
//         }
//
//         if (this.stack.length === 1) {
//             return this.stack.pop()
//         }
//
//         let minValue = this.findMinValue()
//
//         // 只要改变了栈的元素，就把最小值置空
//         this.minValue = null
//         return minValue
//     }
//
//     findMinValue(peek = false) {
//         let top = this.stack.pop()
//         // 刚开始 minValue 为栈顶元素
//         let minValue = top
//         // 刚开始，临时栈为空，将栈顶元素放到缓存栈中
//         let tempStack = [top]
//
//         // 找出 minValue 并将栈中元素依次放入临时栈中
//         while (this.stack.length) {
//             // 先取出栈顶元素，准备比较
//             const top = this.stack.pop()
//             if (top < minValue) {
//                 minValue = top
//             }
//
//             tempStack.push(top)
//         }
//
//         // 如果是 peek 操作
//         if (peek) {
//             while (tempStack.length) {
//                 this.stack.push(tempStack.pop())
//             }
//         } else {
//             // 如果是 pop 操作
//             // 设置一个标识，避免 [1, 3, 2, 1] pop 时，把其中的两个 1 都删了，[3, 2]，这就不对了，将第一个 1 删了，就不能再删了
//             // 结果应该是 [3, 2, 1]
//             let isFound = false
//             while (tempStack.length) {
//                 const top = tempStack.pop()
//                 if (isFound) {
//                     this.stack.push(top)
//                     continue
//                 }
//
//                 if (top !== minValue) {
//                     this.stack.push(top)
//                 } else {
//                     // 往回倒腾的时候，那个最小值就不往回存了
//                     isFound = true
//                 }
//             }
//         }
//
//         return minValue
//     }
//
//     peek() {
//         if (this.isEmpty()) {
//             return -1
//         }
//
//         // 如果之前已经 peek 过，那就有缓存了最小值，之后就复用这个结果，减少代码执行
//         if (this.minValue) {
//             return this.minValue
//         }
//
//         let minValue = this.findMinValue(true)
//         // 记录下当前最小值
//         this.minValue = minValue
//         return minValue
//     }
//
//     isEmpty() {
//         return this.stack.length === 0
//     }
//
//     display() {
//         console.log('display')
//         this.stack.forEach((item) => {
//             console.log(item)
//         })
//     }
// }

