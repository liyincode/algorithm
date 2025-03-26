//给你一个整数数组 prices ，其中 prices[i] 表示某支股票第 i 天的价格。
//
// 在每一天，你可以决定是否购买和/或出售股票。你在任何时候 最多 只能持有 一股 股票。你也可以先购买，然后在 同一天 出售。
//
// 返回 你能获得的 最大 利润 。
//
//
//
// 示例 1：
//
//
//输入：prices = [7,1,5,3,6,4]
//输出：7
//解释：在第 2 天（股票价格 = 1）的时候买入，在第 3 天（股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5 - 1 = 4。
//随后，在第 4 天（股票价格 = 3）的时候买入，在第 5 天（股票价格 = 6）的时候卖出, 这笔交易所能获得利润 = 6 - 3 = 3。
//最大总利润为 4 + 3 = 7 。
//
// 示例 2：
//
//
//输入：prices = [1,2,3,4,5]
//输出：4
//解释：在第 1 天（股票价格 = 1）的时候买入，在第 5 天 （股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5 - 1 = 4。
//最大总利润为 4 。
//
// 示例 3：
//
//
//输入：prices = [7,6,4,3,1]
//输出：0
//解释：在这种情况下, 交易无法获得正利润，所以不参与交易可以获得最大利润，最大利润为 0。
//
//
//
// 提示：
//
//
// 1 <= prices.length <= 3 * 10⁴
// 0 <= prices[i] <= 10⁴
//
//
// Related Topics 贪心 数组 动态规划 👍 2691 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
function maxProfit(prices: number[]): number {

};
//leetcode submit region end(Prohibit modification and deletion)

/*
贪心
 */
// function maxProfit(prices: number[]): number {
//     if (prices.length <= 1) {
//         return 0
//     }
//
//     let total = 0
//
//     for (let i = 0; i < prices.length; i++) {
//         if (prices[i] > prices[i - 1]) {
//             // 如果第 i 天比第 i-1 天价格高，就卖出获得利润
//             total += prices[i] - prices[i - 1]
//         }
//     }
//
//     return total
// };

/**
 * 动态规划 状态是当天是否持有股票
 * @param prices
 */
// function maxProfit(prices: number[]): number {
//     if (prices.length <= 1) {
//         return 0
//     }
//
//     const len = prices.length
//
//     const dp: number[][] = new Array(len).fill(0).map(() => new Array(2).fill(0))
//
//     // 第 0 天手里没股票，利润为 0
//     dp[0][0] = 0
//     // 第0 天手里有股票，利润为 -prices[0]
//     dp[0][1] = -prices[0]
//
//     for (let i = 1; i < len; i++) {
//         // 第 i 天手里没股票（意思第 i 天卖了）的最大利润 = （昨天的手里有股票最大利润 + 今天的股票价格）和 （昨天手里没股票）哪个大
//         dp[i][0] = Math.max(dp[i-1][1] + prices[i], dp[i-1][0])
//         // 第 i 天手里有股票（意思是第 i 天买了点股票）的最大利润 = (昨天手里有股票最大利润)  和 （昨天手里没股票的最大利润 - 今天股票价格)
//         dp[i][1] = Math.max(dp[i - 1][1], dp[i-1][0] - prices[i])
//     }
//
//     // 最后一天手里没股票的最大利润
//     return dp[len - 1][0]
// };
