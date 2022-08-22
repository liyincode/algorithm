//给出由小写字母组成的字符串 S，重复项删除操作会选择两个相邻且相同的字母，并删除它们。
//
// 在 S 上反复执行重复项删除操作，直到无法继续删除。
//
// 在完成所有重复项删除操作后返回最终的字符串。答案保证唯一。
//
//
//
// 示例：
//
// 输入："abbaca"
//输出："ca"
//解释：
//例如，在 "abbaca" 中，我们可以删除 "bb" 由于两字母相邻且相同，这是此时唯一可以执行删除操作的重复项。之后我们得到字符串 "aaca"，其中又
//只有 "aa" 可以执行重复项删除操作，所以最后的字符串为 "ca"。
//
//
//
//
// 提示：
//
//
// 1 <= S.length <= 20000
// S 仅由小写英文字母组成。
//
// Related Topics 栈 字符串 👍 423 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {

};
//leetcode submit region end(Prohibit modification and deletion)


// /**
//  思路：用栈顶元素做比较，如果相同就把栈顶元素出栈
//  */
// var removeDuplicates = function(s) {
//     let result = ''
//     const stack = []
//     for (let char of s) {
//         if (stack.length) {
//             const top = stack[stack.length - 1]
//             if (top === char) {
//                 stack.pop()
//             } else {
//                 stack.push(char)
//             }
//         } else {
//             stack.push(char)
//         }
//
//     }
//
//     return stack.join('')
// };
