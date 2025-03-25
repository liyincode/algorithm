//假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
//
// 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
//
//
//
// 示例 1：
//
//
//输入：n = 2
//输出：2
//解释：有两种方法可以爬到楼顶。
//1. 1 阶 + 1 阶
//2. 2 阶
//
// 示例 2：
//
//
//输入：n = 3
//输出：3
//解释：有三种方法可以爬到楼顶。
//1. 1 阶 + 1 阶 + 1 阶
//2. 1 阶 + 2 阶
//3. 2 阶 + 1 阶
//
//
//
//
// 提示：
//
//
// 1 <= n <= 45
//
//
// Related Topics 记忆化搜索 数学 动态规划 👍 3773 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
function climbStairs(n: number): number {

};
//leetcode submit region end(Prohibit modification and deletion)
/**
 * 在任何一步时，只有一次一步或者一次两步这两种选择
 * 到达第 n 阶楼梯时，只能从第 n-1 阶楼梯爬上来或者从第 n-2 阶楼梯爬上来
 * 到达第 n 阶的方法数 = 到达第 n-1 阶的方法数 + 到达第 n-2 阶的方法数
 */
// function climbStairs(n: number): number {
//    if (n <= 2) return n;
//
//    let mem = [1, 2];
//
//    for (let i = 2; i < n; i++) {
//       mem[i] = mem[i - 1] + mem[i - 2];
//    }
//    // 因为数组索引从 0 开始，你 n 阶就是 n-1
//    return mem[n - 1];
// };
