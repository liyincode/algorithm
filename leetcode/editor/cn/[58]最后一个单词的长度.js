//给你一个字符串 s，由若干单词组成，单词之间用空格隔开。返回字符串中最后一个单词的长度。如果不存在最后一个单词，请返回 0 。
//
// 单词 是指仅由字母组成、不包含任何空格字符的最大子字符串。
//
//
//
// 示例 1：
//
//
//输入：s = "Hello World"
//输出：5
//
//
// 示例 2：
//
//
//输入：s = " "
//输出：0
//
//
//
//
// 提示：
//
//
// 1 <= s.length <= 104
// s 仅有英文字母和空格 ' ' 组成
//
// Related Topics 字符串
// 👍 303 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {

};

//leetcode submit region end(Prohibit modification and deletion)

console.log(lengthOfLastWord('hello world '));




// var lengthOfLastWord = function(s) {
//   let end = s.length - 1;
//   // 过滤掉尾部空格
//   while (end >= 0 && s.charAt(end) === ' ') end--;
//   if (end < 0) return 0;
//   let start = end;
//   // 寻找最后一个单词
//   while (start >= 0 && s.charAt(start) !== ' ') start--;
//   return end - start;
// };

// 单指针法
// var lengthOfLastWord = function(s) {
//     if (s === ' ') return 0;
//     let lastWord = '';
//     s = s.trim();
//
//     for (let i = s.length - 1; i >= 0; i--) {
//         // 多个单词，当指针发现有空格时
//         if (s[i] === ' ') {
//             lastWord = s.substring(i + 1, s.length);
//             return lastWord.length;
//         }
//
//         // 只有一个单词时
//         if (i === 0) {
//             return s.length;
//         }
//     }
// };
