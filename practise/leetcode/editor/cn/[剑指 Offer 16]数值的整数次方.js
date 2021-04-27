//实现 pow(x, n) ，即计算 x 的 n 次幂函数（即，xn）。不得使用库函数，同时不需要考虑大数问题。 
//
// 
//
// 示例 1： 
//
// 
//输入：x = 2.00000, n = 10
//输出：1024.00000
// 
//
// 示例 2： 
//
// 
//输入：x = 2.10000, n = 3
//输出：9.26100 
//
// 示例 3： 
//
// 
//输入：x = 2.00000, n = -2
//输出：0.25000
//解释：2-2 = 1/22 = 1/4 = 0.25 
//
// 
//
// 提示： 
//
// 
// -100.0 < x < 100.0 
// -231 <= n <= 231-1 
// -104 <= xn <= 104 
// 
//
// 
//
// 注意：本题与主站 50 题相同：https://leetcode-cn.com/problems/powx-n/ 
// Related Topics 递归 
// 👍 151 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if (n >= 0) return rPow(x, n);
    else return 1 / (rPow(x, -1 * (n + 1)) * n);
};

const rPow = function (x, n) {
    console.log({ x, n})
    if (n === 0) return 1;
    const halfPow = rPow(x, Math.floor(n/2));
    console.log({x, n, halfPow});
    if (n % 2 === 1) {
        return halfPow * halfPow * x;
    } else {
        return halfPow * halfPow;
    }
}
//leetcode submit region end(Prohibit modification and deletion)

console.log(myPow(2, -8));

/**
 * 偶数 n/2 * n/2
 * 奇数 n/2 * n/2 * x
  */
// var myPow = function(x, n) {
//     if (n >= 0) return rPow(x, n);
//     else return 1 / (rPow(x, -1 * (n + 1)) * n);
// };
//
// const rPow = function (x, n) {
//     console.log({ x, n})
//     if (n === 0) return 1;
//     const halfPow = rPow(x, Math.floor(n/2));
//     console.log({x, n, halfPow});
//     if (n % 2 === 1) {
//         return halfPow * halfPow * x;
//     } else {
//         return halfPow * halfPow;
//     }
// }