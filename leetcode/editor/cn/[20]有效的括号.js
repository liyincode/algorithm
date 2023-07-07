//给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
//
// 有效字符串需满足：
//
//
// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
//
//
//
//
// 示例 1：
//
//
//输入：s = "()"
//输出：true
//
//
// 示例 2：
//
//
//输入：s = "()[]{}"
//输出：true
//
//
// 示例 3：
//
//
//输入：s = "(]"
//输出：false
//
//
// 示例 4：
//
//
//输入：s = "([)]"
//输出：false
//
//
// 示例 5：
//
//
//输入：s = "{[]}"
//输出：true
//
//
//
// 提示：
//
//
// 1 <= s.length <= 10⁴
// s 仅由括号 '()[]{}' 组成
//
//
// Related Topics 栈 字符串 👍 3462 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {

};
//leetcode submit region end(Prohibit modification and deletion)


/*
遍历元素，消除栈顶元素，最后判断栈是否为空
栈顶元素就是左括号，找到对应的右括号开始消除
 */
//var isValid = function(s) {
//      // 如果总数为奇数，肯定不对称
//     if (s.length % 2 === 1) {
//         return false
//     }
//
//     // 注意这里调换了位置
//     const pairs = new Map([
//         [')', '('],
//         [']', '['],
//         ['}', '{']
//     ])
//
//     const stack = []
//
//     for (let char of s) {
//         if (pairs.has(char)) {
//             if (
//                 !stack.length // 左括号栈里已经为空了，但还能找到右括号，就不对了 例如 ()]]
//             ||
//                 stack[stack.length - 1] !== pairs.get(char) // 栈顶元素并不和 map 中对应的值相等，例如 {[)]
//             ) {
//                 return false
//             }
//             stack.pop()
//         } else {
//             stack.push(char)
//         }
//     }
//
//     return stack.length === 0
// };
