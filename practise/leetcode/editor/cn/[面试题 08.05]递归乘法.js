//递归乘法。 写一个递归函数，不使用 * 运算符， 实现两个正整数的相乘。可以使用加号、减号、位移，但要吝啬一些。 
//
// 示例1: 
//
// 
// 输入：A = 1, B = 10
// 输出：10
// 
//
// 示例2: 
//
// 
// 输入：A = 3, B = 4
// 输出：12
// 
//
// 提示: 
//
// 
// 保证乘法范围不会溢出 
// 
// Related Topics 递归 
// 👍 42 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} A
 * @param {number} B
 * @return {number}
 */
var multiply = function(A, B) {
    if (A === 0 || B === 0) return 0;
    if (A === 1) return B;
    const half = multiply(Math.floor(A / 2), B);
    if (A % 2 === 1) {
        return half + half + B;
    } else {
        return half + half;
    }
};
//leetcode submit region end(Prohibit modification and deletion)

console.log(multiply(4, 8));

/**
 * 奇数 A/2*B + A/2*B + B
 * 偶数 A/2*B + A/2*B
 */
//var multiply = function(A, B) {
//     if (A === 0 || B === 0) return 0;
//     if (A === 1) return B;
//     const half = multiply(Math.floor(A / 2), B);
//     if (A % 2 === 1) {
//         return half + half + B;
//     } else {
//         return half + half;
//     }
// };