//给你一个整数数组 nums ，数组中的元素 互不相同 。返回该数组所有可能的子集（幂集）。
//
// 解集 不能 包含重复的子集。你可以按 任意顺序 返回解集。
//
//
//
// 示例 1：
//
//
//输入：nums = [1,2,3]
//输出：[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
//
//
// 示例 2：
//
//
//输入：nums = [0]
//输出：[[],[0]]
//
//
//
//
// 提示：
//
//
// 1 <= nums.length <= 10
// -10 <= nums[i] <= 10
// nums 中的所有元素 互不相同
//
//
// Related Topics 位运算 数组 回溯 👍 2458 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
function subsets(nums: number[]): number[][] {

};
//leetcode submit region end(Prohibit modification and deletion)

console.log(subsets([1, 2, 3]))

/*
回溯
 */
// function subsets(nums: number[]): number[][] {
//     const result = []
//     const path = []
//
//     function find(start) {
//         // 每次调用都收集当前路径
//         result.push([...path])
//
//         for (let i = start; i < nums.length; i++) {
//             path.push(nums[i])
//
//             find(i + 1)
//
//             path.pop()
//         }
//     }
//
//     find(0)
//
//     return result
// };
