//请实现一个函数，把字符串 s 中的每个空格替换成"%20"。
//
//
//
// 示例 1：
//
// 输入：s = "We are happy."
//输出："We%20are%20happy."
//
//
//
// 限制：
//
// 0 <= s 的长度 <= 10000
// 👍 96 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function(s) {

};
//leetcode submit region end(Prohibit modification and deletion)

console.log(replaceSpace('We are happy.'))


// var replaceSpace = function(s) {
//     let result = '';
//     for (let i = 0; i < s.length; i++) {
//         if (s.charAt(i) === ' ') {
//             result += '%20';
//         } else {
//             result += s.charAt(i);
//         }
//     }
//
//     return result;
// };
