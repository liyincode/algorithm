//假设你正在爬楼梯。需要 n 阶你才能到达楼顶。 
//
// 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？ 
//
// 注意：给定 n 是一个正整数。 
//
// 示例 1： 
//
// 输入： 2
//输出： 2
//解释： 有两种方法可以爬到楼顶。
//1.  1 阶 + 1 阶
//2.  2 阶 
//
// 示例 2： 
//
// 输入： 3
//输出： 3
//解释： 有三种方法可以爬到楼顶。
//1.  1 阶 + 1 阶 + 1 阶
//2.  1 阶 + 2 阶
//3.  2 阶 + 1 阶
// 
// Related Topics 动态规划 
// 👍 1282 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n <= 2) return n;

    let mem = [1, 2];

    for (let i = 2; i < n; i++) {
        mem[i] = mem[i - 1] + mem[i - 2];
    }

    return mem[n - 1];
};
//leetcode submit region end(Prohibit modification and deletion)

console.log(climbStairs(5));

/**
 * 1
 * f(n) = f(n-1) + f(n-2)
 */
// var climbStairs = function(n) {
//     if (n <= 2) return n;
//
//     let mem = [];
//     mem[0] = 1;
//     mem[1] = 2;
//
//     for (let i = 2; i < n; i++) {
//         mem[i] = mem[i - 1] + mem[i - 2];
//     }
//
//     return mem[n - 1];
// };

/**
 * 2 优化版
 */
// var climbStairs = function(n) {
//     if (n <= 2) return n;
//
//     let f1 = 1, f2 = 2, f3 = 3;
//     for (let i = 3; i <= n; i++) {
//         f3 = f1 + f2;
//         f1 = f2;
//         f2 = f3;
//     }
//
//     return f3;
// }