//给你一个有效的 IPv4 地址 address，返回这个 IP 地址的无效化版本。
//
// 所谓无效化 IP 地址，其实就是用 "[.]" 代替了每个 "."。
//
//
//
// 示例 1：
//
// 输入：address = "1.1.1.1"
//输出："1[.]1[.]1[.]1"
//
//
// 示例 2：
//
// 输入：address = "255.100.50.0"
//输出："255[.]100[.]50[.]0"
//
//
//
//
// 提示：
//
//
// 给出的 address 是一个有效的 IPv4 地址
//
// Related Topics 字符串
// 👍 66 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {

};

console.log(defangIPaddr('1.1.1.1'))
//leetcode submit region end(Prohibit modification and deletion)


/*
var defangIPaddr = function(address) {
  return address.split('.').join('[.]');
};*/

/*var defangIPaddr = function(address) {
  return address.replace(/\./g, '[.]');
};*/

// for 循环暴力法
// var defangIPaddr = function(address) {
//     if (!address) return '';
//     let result = '';
//     for (let i = 0; i < address.length; i++) {
//         const char = address.charAt(i);
//         if (char === '.') {
//             result += '[.]';
//         } else {
//             result += char;
//         }
//     }
//
//     return result;
// };

// 数组法
// var defangIPaddr = function(address) {
//   if (!address) return '';
//
//   let result = [];
//   // 这里得用数组自己的索引，如果用 i 的话，赋值时会出现覆盖的问题
//   let k = 0;
//   for (let i = 0; i < address.length; i++) {
//     const target = address[i];
//     if (target === '.') {
//       result[k++] = '[';
//       result[k++] = '.';
//       result[k++] = ']';
//     } else {
//       result[k] = target;
//       k++;
//     }
//   }
//
//   // join() 默认用 , 分隔，join('') 默认会过滤元素之间的字符
//   return result.join('');
// };
