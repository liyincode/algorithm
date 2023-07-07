//给你一个整数 x ，如果 x 是一个回文整数，返回 true ；否则，返回 false 。
//
// 回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。例如，121 是回文，而 123 不是。
//
//
//
// 示例 1：
//
//
//输入：x = 121
//输出：true
//
//
// 示例 2：
//
//
//输入：x = -121
//输出：false
//解释：从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
//
//
// 示例 3：
//
//
//输入：x = 10
//输出：false
//解释：从右向左读, 为 01 。因此它不是一个回文数。
//
//
// 示例 4：
//
//
//输入：x = -101
//输出：false
//
//
//
//
// 提示：
//
//
// -231 <= x <= 231 - 1
//
//
//
//
// 进阶：你能不将整数转为字符串来解决这个问题吗？
// Related Topics 数学
// 👍 1456 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {

};
//leetcode submit region end(Prohibit modification and deletion)

console.log(isPalindrome(12223))

// var isPalindrome = function(x) {
//     // 负数或最后一位为 0 的数 都不是回文数，直接排除
//     if (x < 0 || (x % 10 === 0 && x > 0)) {
//         return false;
//     }
//
//     const str = x.toString();
//
//     for (let i = 0, j = str.length - 1; i < j; i++, j--) {
//         if (str.charAt(i) !== str.charAt(j)) return false;
//     }
//
//     return true;
// };


// var isPalindrome = function(x) {
//     // 负数或最后一位为 0 的数 都不是回文数，直接排除
//     if (x < 0 || (x % 10 === 0 && x > 0)) {
//         return false;
//     }
//
//     let reverseNum = 0;
//     while (x > reverseNum) {
//         // 每次分离最后一位，然后组成回文数
//         reverseNum = reverseNum * 10 + x % 10;
//         // 原数每次都删掉最后一位，Math.floor 取整过滤掉小数位
//         x = Math.floor(x / 10);
//     }
//
//     return x === reverseNum // 数字个数为偶数时
//       ||
//       x === Math.floor(reverseNum / 10); // 数字个数为奇数时
//
// };
