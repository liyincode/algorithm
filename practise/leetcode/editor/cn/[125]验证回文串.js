//给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。
//
// 说明：本题中，我们将空字符串定义为有效的回文串。
//
// 示例 1:
//
// 输入: "A man, a plan, a canal: Panama"
//输出: true
//
//
// 示例 2:
//
// 输入: "race a car"
//输出: false
//
// Related Topics 双指针 字符串
// 👍 362 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {

};
//leetcode submit region end(Prohibit modification and deletion)
console.log(isPalindrome('dA man, a plan, a canal: Panama'))


// for 循环翻转然后再对比是否相等
// var isPalindrome = function(s) {
//   // 过滤其它字符，只留字母数字
//   const data = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
//   let reverseString = '';
//   for (let i = data.length - 1; i >= 0; i--) {
//     console.log(data.charAt(i));
//     reverseString = reverseString.concat(data.charAt(i));
//   }
//
//   return reverseString === data;
// };

// 双指针
// var isPalindrome = function(s) {
//   // 过滤其它字符，只留字母数字
//   const data = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
//
//   let i = 0, j = data.length - 1;
//
//   // 为什么 <= ，< 是判断回文串偶数的边界条件，< 是判断奇数时的边界条件
//   while (i <= j) {
//     const head = data.charAt(i);
//     const tail = data.charAt(j);
//     if (head !== tail) return false;
//     j--;
//     i++;
//   }
//
//   return true;
// };
