//字符串的左旋转操作是把字符串前面的若干个字符转移到字符串的尾部。请定义一个函数实现字符串左旋转操作的功能。比如，输入字符串"abcdefg"和数字2，该函数
//将返回左旋转两位得到的结果"cdefgab"。 
//
// 
//
// 示例 1： 
//
// 输入: s = "abcdefg", k = 2
//输出: "cdefgab"
// 
//
// 示例 2： 
//
// 输入: s = "lrloseumgh", k = 6
//输出: "umghlrlose"
// 
//
// 
//
// 限制： 
//
// 
// 1 <= k < s.length <= 10000 
// 
// Related Topics 字符串 
// 👍 105 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var reverseLeftWords = function(s, n) {

};
//leetcode submit region end(Prohibit modification and deletion)

console.log(reverseLeftWords('abcdefg', 2));

// 切片法
// var reverseLeftWords = function(s, n) {
//     return s.substring(n, s.length) + s.substring(0, n);
// };

// 字符串遍历拼接
// var reverseLeftWords = function(s, n) {
//     if (!s) return '';
//     if (n === 0) return s;
//
//     let result = '';
//
//     for (let i = n; i < s.length; i++) {
//         const char = s.charAt(i);
//         result += char;
//     }
//
//     for (let i = 0; i < n; i++) {
//         const char = s.charAt(i);
//         result += char;
//     }
//
//     return result;
// };