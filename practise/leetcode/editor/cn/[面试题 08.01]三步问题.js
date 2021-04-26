//三步问题。有个小孩正在上楼梯，楼梯有n阶台阶，小孩一次可以上1阶、2阶或3阶。实现一种方法，计算小孩有多少种上楼梯的方式。结果可能很大，你需要对结果模100
//0000007。 
//
// 示例1: 
//
// 
// 输入：n = 3 
// 输出：4
// 说明: 有四种走法
// 
//
// 示例2: 
//
// 
// 输入：n = 5
// 输出：13
// 
//
// 提示: 
//
// 
// n范围在[1, 1000000]之间 
// 
// Related Topics 动态规划 
// 👍 52 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} n
 * @return {number}
 */
var waysToStep = function(n) {

};
//leetcode submit region end(Prohibit modification and deletion)

console.log(waysToStep(10))

// 动态规划遍历
//var waysToStep = function(n) {
//     if (n === 1) return 1;
//     if (n === 2) return 2;
//     if (n === 3) return 4;
//
//     let dp = [];
//     dp[1] = 1;
//     dp[2] = 2;
//     dp[3] = 3;
//
//     for (let i = 4; i <= n; i++) {
//         dp[i] = (dp[i - 1] + dp[i - 2] + dp[i - 3]) % 1000000007;
//
//     }
//
//     return dp[n];
// };