// 输入两个整数序列，第一个序列表示栈的压入顺序，请判断第二个序列是否为该栈的弹出顺序。假设压入栈的所有数字均不相等。例如，序列 {1,2,3,4,5} 是某栈
// 的压栈序列，序列 {4,5,3,2,1} 是该压栈序列对应的一个弹出序列，但 {4,3,5,1,2} 就不可能是该压栈序列的弹出序列。
//
//
//
// 示例 1：
//
// 输入：pushed = [1,2,3,4,5], popped = [4,5,3,2,1]
// 输出：true
// 解释：我们可以按以下顺序执行：
// push(1), push(2), push(3), push(4), pop() -> 4,
// push(5), pop() -> 5, pop() -> 3, pop() -> 2, pop() -> 1
//
//
// 示例 2：
//
// 输入：pushed = [1,2,3,4,5], popped = [4,3,5,1,2]
// 输出：false
// 解释：1 不能在 2 之前弹出。
//
//
//
//
// 提示：
//
//
// 0 <= pushed.length == popped.length <= 1000
// 0 <= pushed[i], popped[i] < 1000
// pushed 是 popped 的排列。
//
//
// 注意：本题与主站 946 题相同：https://leetcode-cn.com/problems/validate-stack-sequences/
//
// Related Topics 栈 数组 模拟 👍 381 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
const validateStackSequences = function (pushed, popped) {
  const stack = []
  let i = 0
  let j = 0

  while (i < pushed.length || j < popped.length) {
    if (stack.length > 0 && j < popped.length && stack[stack.length - 1] === popped[j]) {
      stack.pop()
      j++
      continue
    }

    if (i < pushed.length) {
      stack.push(pushed[i])
      i++
      continue
    }
    break
  }

  return i === pushed.length && j === pushed.length
}
// leetcode submit region end(Prohibit modification and deletion)

console.log(validateStackSequences([2, 1, 0], [1, 2, 0]))

// 这块的逻辑有问题，我一直处理不好 pushed 的指针 j 的，动不动就越届了
// 这块是以 poped 为基准开始遍历，但其实应该按照 pushed 以基准就可以了
// for (let i = 0, j = 0; i < popped.length; i++) {
//     let stackTop = stack[stack.length - 1]
//     const popItem = popped[i]
//
//     if (popItem === stackTop) {
//       stack.pop()
//       j++
//       j < pushed.length && stack.push(pushed[j])
//     } else {
//       while (popItem !== stackTop && j <= pushed.length - 1) {
//         j++
//         stack.push(pushed[j])
//
//         stackTop = stack[stack.length - 1]
//       }
//
//       if (popItem === stackTop) {
//         stack.pop()
//         j++
//         j < pushed.length && stack.push(pushed[j])
//       }
//     }
//   }

// 这个思路的核心就是，模拟真实入栈出栈，然后去对比栈顶元素和将要出栈的元素是否相等符合出栈情况
// const validateStackSequences = function (pushed, popped) {
//   if (pushed.length === 0) {
//     return true
//   }
//
//   if (pushed.length === 1) {
//     return pushed[0] === popped[0]
//   }
//
//   // 模拟一个栈去实际处理出栈入栈的情况
//   const stack = []
//   for (let i = 0, j = 0; i < pushed.length; i++) {
//     stack.push(pushed[i])
//
//     const handle = () => {
//       if (stack.length === 0) {
//         return
//       }
//
//       // 栈顶元素
//       const top = stack[stack.length - 1]
//       // 要出栈的元素
//       const popedItem = popped[j]
//
//       // 如果要出栈的元素 === 栈顶元素 说明现在是可以出栈的
//       // 否则，栈要入栈一个元素，看看和这个要出栈的元素相等嘛
//       if (top === popedItem) {
//         stack.pop()
//         j++
//         // 一波出栈后，栈顶元素变了，下次要出栈的元素变了，或许这次的栈顶元素等于新的出栈元素呢，再来一波这个逻辑。
//         // 比如 pushed: [1, 2, 3] poped: [3, 2, 1] 3 出栈之后，发现栈顶元素 2 === 下次要出栈的元素 2，就再来一波
//         handle()
//       }
//     }
//     handle()
//   }
//
//   // 如果处理完之后，栈里还有元素，说明这个序列不合理
//   return stack.length === 0
// }

/*
 思路：
 入栈和出栈的操作次数肯定是相等的
 每次不是入栈就是出栈，记录下操作次数，最后比较
 */
// const validateStackSequences = function (pushed, popped) {
//   const stack = []
//   let i = 0
//   let j = 0
//
//   while (i < pushed.length || j < popped.length) {
//     if (stack.length > 0 && j < popped.length && stack[stack.length - 1] === popped[j]) {
//       stack.pop()
//       j++
//       continue
//     }
//
//     if (i < pushed.length) {
//       stack.push(pushed[i])
//       i++
//       continue
//     }
//
//     // 如果既不入栈又不出栈，结束循环
//     break
//   }
//
//   return i === pushed.length && j === pushed.length
// }
