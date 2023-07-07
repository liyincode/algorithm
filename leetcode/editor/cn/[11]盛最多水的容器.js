//给你 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i,
//ai) 和 (i, 0)。找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。
//
// 说明：你不能倾斜容器，且 n 的值至少为 2。
//
//
//
//
//
// 图中垂直线代表输入数组 [1,8,6,2,5,4,8,3,7]。在此情况下，容器能够容纳水（表示为蓝色部分）的最大值为 49。
//
//
//
// 示例：
//
// 输入：[1,8,6,2,5,4,8,3,7]
//输出：49
// Related Topics 数组 双指针
// 👍 1916 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    
};
//leetcode submit region end(Prohibit modification and deletion)

const testData = [1,8,6,2,5,4,8,3,7];
console.log(maxArea(testData));

/**
 1. 两次循环算最大面积
 */
// var maxArea = function(height) {
//     let maxArea = 0;
//     for (let i = 0; i < height.length - 1; i++) {
//         for (let j = i + 1; j < height.length; j++) {
//             const area = (j - i) * Math.min(height[i], height[j]);
//             maxArea = Math.max(maxArea, area);
//         }
//     }
//
//     return maxArea;
// };

/**
 * 2. 双指针紧逼法
 */
// var maxArea = function(height) {
//     let maxArea = 0;
//     for (let i = 0, j = height.length - 1; i < j; ) {
//         const minHeight = height[i] < height[j] ? height[i++] : height[j--];
//         const area = minHeight * (j - i + 1);
//         maxArea = Math.max(maxArea, area);
//     }
//
//     return maxArea;
// };
