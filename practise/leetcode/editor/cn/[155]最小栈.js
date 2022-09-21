// 设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈。
//
// 实现 MinStack 类:
//
//
// MinStack() 初始化堆栈对象。
// void push(int val) 将元素val推入堆栈。
// void pop() 删除堆栈顶部的元素。
// int top() 获取堆栈顶部的元素。
// int getMin() 获取堆栈中的最小元素。
//
//
//
//
// 示例 1:
//
//
// 输入：
// ["MinStack","push","push","push","getMin","pop","top","getMin"]
// [[],[-2],[0],[-3],[],[],[],[]]
//
// 输出：
// [null,null,null,null,-3,null,0,-2]
//
// 解释：
// MinStack minStack = new MinStack();
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// minStack.getMin();   --> 返回 -3.
// minStack.pop();
// minStack.top();      --> 返回 0.
// minStack.getMin();   --> 返回 -2.
//
//
//
//
// 提示：
//
//
// -2³¹ <= val <= 2³¹ - 1
// pop、top 和 getMin 操作总是在 非空栈 上调用
// push, pop, top, and getMin最多被调用 3 * 10⁴ 次
//
//
// Related Topics 栈 设计 👍 1415 👎 0

// leetcode submit region begin(Prohibit modification and deletion)

const MinStack = function () {

}

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {

}

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {

}

/**
 * @return {number}
 */
MinStack.prototype.top = function () {

}

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {

}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// leetcode submit region end(Prohibit modification and deletion)

const stack = new MinStack()

const handleList = ['MinStack', 'push', 'push', 'push', 'top', 'pop', 'getMin', 'pop', 'getMin', 'pop', 'push', 'top', 'getMin', 'push', 'top', 'getMin', 'pop', 'getMin']
const paramList = [[], [2147483646], [2147483646], [2147483647], [], [], [], [], [], [], [2147483647], [], [], [-2147483648], [], [], [], []]

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
      console.log('isEmpty ', stack.isEmpty())
      break
    case 'pop':
      console.log('pop ', 'null', stack.pop())
      break
    case 'top':
      console.log('top', stack.top())
      break
    case 'getMin':
      console.log('getMin', stack.getMin())
      break
  }
}

/*
解法：
每次 push 的时候就找到最小值
每次 pop 的时候如果 pop 后的值正好是最小值，就重新寻找，否则不处理
 */
// const MinStack = function () {
//   this.stack = []
//   this.minValue = null
// }
//
// /**
//  * @param {number} val
//  * @return {void}
//  */
// MinStack.prototype.push = function (val) {
//   this.stack.push(val)
//
//   // push 的时候就去找最小值
//   if (this.minValue !== null) {
//     if (val < this.minValue) {
//       this.minValue = val
//     }
//   } else {
//     this.minValue = val
//   }
// }
//
// /**
//  * @return {void}
//  */
// MinStack.prototype.pop = function () {
//   if (this.stack.length === 1) {
//     this.stack.pop()
//     // 栈清空后，最小值也得清空
//     this.minValue = null
//     return
//   }
//
//   const stackTop = this.stack.pop()
//
//   // 如果 pop 出的这个元素正好是最小值，就得重新寻找最小值
//   if (stackTop === this.minValue) {
//     let minValue = this.stack.pop()
//     const tempStack = [minValue]
//
//     while (this.stack.length) {
//       const top = this.stack.pop()
//       tempStack.push(top)
//       if (minValue > top) {
//         minValue = top
//       }
//     }
//
//     this.minValue = minValue
//
//     while (tempStack.length) {
//       this.stack.push(tempStack.pop())
//     }
//   }
// }
//
// /**
//  * @return {number}
//  */
// MinStack.prototype.top = function () {
//   return this.stack[this.stack.length - 1]
// }
//
// /**
//  * @return {number}
//  */
// MinStack.prototype.getMin = function () {
//   return this.minValue
// }
