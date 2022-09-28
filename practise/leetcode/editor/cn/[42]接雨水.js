// 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。
//
//
//
// 示例 1：
//
//
//
//
// 输入：height = [0,1,0,2,1,0,1,3,2,1,2,1]
// 输出：6
// 解释：上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。
//
//
// 示例 2：
//
//
// 输入：height = [4,2,0,3,2,5]
// 输出：9
//
//
//
//
// 提示：
//
//
// n == height.length
// 1 <= n <= 2 * 10⁴
// 0 <= height[i] <= 10⁵
//
//
// Related Topics 栈 数组 双指针 动态规划 单调栈 👍 3821 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} height
 * @return {number}
 */
const trap = function (height) {

}
// leetcode submit region end(Prohibit modification and deletion)

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]))

/*
解法：
暴力法，求当前这个元素能盛多少水
当前元素的盛水量 = min(左边最高的柱子高度, 右边最高的柱子高度) - 这个柱子的高度
 */
// const trap = function (height) {
//   let sum = 0
//   // 从索引为 1 开始，结束于倒数第 2 个元素
//   for (let i = 1; i < height.length - 1; i++) {
//     let leftMax = 0
//     let rightMax = 0
//     // 求当前这个元素的右边最高的柱子
//     for (let j = i + 1; j < height.length; j++) {
//       if (height[j] > rightMax) {
//         rightMax = height[j]
//       }
//     }
//
//     // 求当前这个元素的左边最高的柱子
//     for (let t = i - 1; t >= 0; t--) {
//       if (height[t] > leftMax) {
//         leftMax = height[t]
//       }
//     }
//
//     // 只要左边最高或右边最高有一个为 0，说明就盛不了雨水
//     if (rightMax === 0 || leftMax === 0) {
//       sum = sum + 0
//     } else {
//       // 找左边最高或右边最高里最矮的，因为最矮的才能决定装多少水
//       const minHeight = rightMax > leftMax ? leftMax : rightMax
//       // 如果当前这个元素比这个最矮值大的话，这个元素就盛不了水，比如：[0, 1, 0, 2, 1]，这其中的 2 就是
//       if (minHeight <= height[i]) {
//         sum = sum + 0
//       } else {
//         // 这个最矮值减去当前这个元素的高度就是能盛水多少
//         sum = sum + (minHeight - height[i])
//       }
//     }
//   }
//
//   return sum
// }
