//给你一个字符串 s，找到 s 中最长的回文子串。 
//
// 
//
// 示例 1： 
//
// 
//输入：s = "babad"
//输出："bab"
//解释："aba" 同样是符合题意的答案。
// 
//
// 示例 2： 
//
// 
//输入：s = "cbbd"
//输出："bb"
// 
//
// 示例 3： 
//
// 
//输入：s = "a"
//输出："a"
// 
//
// 示例 4： 
//
// 
//输入：s = "ac"
//输出："a"
// 
//
// 
//
// 提示： 
//
// 
// 1 <= s.length <= 1000 
// s 仅由数字和英文字母（大写和/或小写）组成 
// 
// Related Topics 字符串 动态规划 👍 4003 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {

};



//leetcode submit region end(Prohibit modification and deletion)

const testData = '';
console.log(longestPalindrome(testData));


// 中心扩展法
//var longestPalindrome = function(s) {
//     let res = '';
//
//     for (let i = 0; i < s.length; i++) {
//         const s1 = palindrome(s, i, i);
//         const s2 = palindrome(s, i, i + 1);
//
//         res = res.length > s1.length ? res : s1;
//         res = res.length > s2.length ? res : s2;
//     }
//
//     return res;
// };
//
// const palindrome = (str, i, j) => {
//     while (i >= 0 && j < str.length && str[i] === str[j]){
//         i--;
//         j++;
//     }
//     return str.substring(i + 1, j);
// }