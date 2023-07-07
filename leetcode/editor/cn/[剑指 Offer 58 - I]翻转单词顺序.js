//输入一个英文句子，翻转句子中单词的顺序，但单词内字符的顺序不变。为简单起见，标点符号和普通字母一样处理。例如输入字符串"I am a student. "，
//则输出"student. a am I"。
//
//
//
// 示例 1：
//
// 输入: "the sky is blue"
//输出: "blue is sky the"
//
//
// 示例 2：
//
// 输入: "  hello world!  "
//输出: "world! hello"
//解释: 输入字符串可以在前面或者后面包含多余的空格，但是反转后的字符不能包括。
//
//
// 示例 3：
//
// 输入: "a good   example"
//输出: "example good a"
//解释: 如果两个单词间有多余的空格，将反转后单词间的空格减少到只含一个。
//
//
//
//
// 说明：
//
//
// 无空格字符构成一个单词。
// 输入字符串可以在前面或者后面包含多余的空格，但是反转后的字符不能包括。
// 如果两个单词间有多余的空格，将反转后单词间的空格减少到只含一个。
//
//
// 注意：本题与主站 151 题相同：https://leetcode-cn.com/problems/reverse-words-in-a-string/
//
//
// 注意：此题对比原题有改动
// Related Topics 字符串
// 👍 83 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {

};
//leetcode submit region end(Prohibit modification and deletion)

console.log(reverseWords(" b  a good   example "));

/*var reverseWords = function(s) {
  let arr = s.trim().split(' ');
  let result = '';
  for (let i = arr.length - 1; i >= 0; i-- ) {
    if (arr[i] !== '') {
      result = result + ' ' + arr[i];
    } else if (arr[i] === '' && arr[i - 1] !== '') {
      result = result + arr[i];
    }

  }

  return result.trim();
};*/

// 双指针法
// var reverseWords = function(s) {
//     const data = s.trim();
//     // 从后往前循环
//     let i = data.length - 1, j = i;
//
//     let result = '';
//     while (i >= 0) {
//         // 筛选出单词
//         while (i >= 0 && data.charAt(i) !== ' ') i--;
//         // 单词拼接到结果字符串里
//         result += data.substring(i + 1, j + 1) + ' ';
//         // 过滤掉这个单词前的空格
//         while (i >= 0 && data.charAt(i) === ' ') i--;
//         j = i;
//     }
//
//     // 删除最后的空格
//     return result.trim();
// };

// 分离单词之后翻转
// var reverseWords = function(s) {
//     const arr = [];
//
//     // 分离出其中的单词，然后组建成数组
//     let word = '';
//     for (let i = 0; i < s.length; i++) {
//         const target = s.charAt(i);
//         if (target !== ' ') {
//             word += target;
//         } else if (word !== '' && target === ' ') {
//             arr.push(word);
//             word = ''
//         }
//     }
//     if (word !== '') arr.push(word);
//
//     // 翻转
//     for (let i = 0, j = arr.length - 1; i < j; i++, j--) {
//         const temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp
//     }
//
//     return arr.join(' ');
// };

// 先翻转整体，再翻转其中的单词
// var reverseWords = function(s) {
//   let result = '';
//   // 先翻转全部
//   let i = s.length - 1;
//   while(i >= 0) {
//     // 过滤空格
//     while(i >= 0 && s.charAt(i) === ' ') i--;
//     // 碰到单词，将单词拼接
//     while (i >= 0 && s.charAt(i) !== ' ') {
//       result += s.charAt(i);
//       i--;
//     }
//     // 每一次 for 循环就是一个单词
//     result += ' ';
//   }
//
//   result = result.trim();
//
//   // 再翻转单词
//   let finalResult = '';
//   let j = 0;
//   for (let i = 0; i < result.length; i++) {
//     if (result.charAt(i) === ' ') {
//       // 截取单词
//       const word = result.substring(j, i);
//       // 翻转单个单词
//       const reverseWord = handleReverseWord(word);
//       finalResult += reverseWord + ' ';
//       // 方便 substring 方法不截取到单词前的空格
//       j = i + 1;
//     }
//
//     // 当碰到末尾时，特殊处理
//     if (i === result.length - 1) {
//       const word = result.substring(j, i + 1);
//       const reverseWord = handleReverseWord(word);
//       finalResult += reverseWord;
//     }
//   }
//
//   return finalResult;
// };
//
// const handleReverseWord = (word) => {
//   let result = '';
//   for (let i = word.length - 1; i >= 0; i--) {
//     result += word.charAt(i);
//   }
//
//   return result;
// }
