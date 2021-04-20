//一只青蛙一次可以跳上1级台阶，也可以跳上2级台阶。求该青蛙跳上一个 n 级的台阶总共有多少种跳法。
//
// 答案需要取模 1e9+7（1000000007），如计算初始结果为：1000000008，请返回 1。
//
// 示例 1：
//
// 输入：n = 2
//输出：2
//
//
// 示例 2：
//
// 输入：n = 7
//输出：21
//
//
// 示例 3：
//
// 输入：n = 0
//输出：1
//
// 提示：
//
//
// 0 <= n <= 100
//
//
// 注意：本题与主站 70 题相同：https://leetcode-cn.com/problems/climbing-stairs/
//
//
// Related Topics 递归
// 👍 153 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} n
 * @return {number}
 */
var numWays = function(n) {
  let temps = new Map();

  const calc = (n, temps) => {
    console.log(n, temps);
    if (n <= 1) return 1;
    if (n === 2) return 2;
    if (temps.has(n)) return temps.get(n);

    temps.set(n, (calc(n - 1, temps) + calc(n - 2, temps)) % 1000000007);
    return temps.get(n);
  }

  return calc(n, temps)
};
//leetcode submit region end(Prohibit modification and deletion)

console.log(numWays(78));
