//给定两个数组 nums1 和 nums2 ，返回 它们的 交集 。输出结果中的每个元素一定是 唯一 的。我们可以 不考虑输出结果的顺序 。
//
//
//
// 示例 1：
//
//
//输入：nums1 = [1,2,2,1], nums2 = [2,2]
//输出：[2]
//
//
// 示例 2：
//
//
//输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
//输出：[9,4]
//解释：[4,9] 也是可通过的
//
//
//
//
// 提示：
//
//
// 1 <= nums1.length, nums2.length <= 1000
// 0 <= nums1[i], nums2[i] <= 1000
//
//
// Related Topics 数组 哈希表 双指针 二分查找 排序 👍 965 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
function intersection(nums1: number[], nums2: number[]): number[] {

};
//leetcode submit region end(Prohibit modification and deletion)
/*
    先通过 set 去重，然后遍历第二个数组看有没有对应的值
 */
// function intersection(nums1: number[], nums2: number[]): number[] {
//     const set1 = new Set(nums1)
//     const resultSet = new Set<number>()
//
//     for (const num of nums2) {
//         if (set1.has(num)) {
//             resultSet.add(num)
//         }
//     }
//
//     return Array.from<number>(resultSet)
// };
