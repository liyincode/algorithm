//给定整数数组 nums 和整数 k，请返回数组中第 k 个最大的元素。
//
// 请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。
//
// 你必须设计并实现时间复杂度为 O(n) 的算法解决此问题。
//
//
//
// 示例 1:
//
//
//输入: [3,2,1,5,6,4], k = 2
//输出: 5
//
//
// 示例 2:
//
//
//输入: [3,2,3,1,2,4,5,5,6], k = 4
//输出: 4
//
//
//
// 提示：
//
//
// 1 <= k <= nums.length <= 10⁵
// -10⁴ <= nums[i] <= 10⁴
//
//
// Related Topics 数组 分治 快速选择 排序 堆（优先队列） 👍 2683 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
function findKthLargest(nums: number[], k: number): number {

}
//leetcode submit region end(Prohibit modification and deletion)

const testCases = [
    { nums: [3, 2, 1, 5, 6, 4], k: 2, expected: 5 },
    { nums: [3, 2, 3, 1, 2, 4, 5, 5, 6], k: 4, expected: 4 }
];

for (const { nums, k, expected } of testCases) {
    console.log(`Input: nums = [${nums}], k = ${k}`);
    console.log(`Expected: ${expected}`);
     console.log(`Result (QuickSelect): ${findKthLargest([...nums], k)}`);

    console.log("---");
}

// function findKthLargest(nums: number[], k: number): number {
//     // 找第 k 个最大元素就等于
//     // 找第 nums.lenght - k + 1 个最小元素
//     return quickSelect(nums, nums.length - k + 1)
//
// }

// function quickSelect(nums: number[], k: number): number {
//     if (nums.length === 1) {
//         return nums[0]
//     }
//
//     const left = []
//     const equal = []
//     const right = []
//
//     const randomIndex= Math.floor(Math.random() * nums.length)
//     const pivot = nums[randomIndex]
//
//     // 分区排序
//     for (const element of nums) {
//         if (element < pivot) {
//             left.push(element)
//         } else if (element === pivot) {
//             equal.push(element)
//         } else {
//             right.push(element)
//         }
//     }
//
//     // 判断第 k 小的元素在哪个区域
//     if (k <= left.length) {
//         // 如果在做区域，那肯定在做区域里
//         return quickSelect(left, k)
//     } else if (k <= left.length + equal.length) {
//         // 如果在中间区域，直接返回基准元素，因为这个区域里所有的元素都相同
//         // 这里强调是 <= 而不是 ===
//         /*
//             假设 left = [1, 2]，equal = [3, 3, 3]，right = [4, 5]
//             如果 k = 3，那么第3小的元素是第1个3
//             如果 k = 4，那么第4小的元素是第2个3
//             如果 k = 5，那么第5小的元素是第3个3
//          */
//         return pivot
//     } else {
//         // 在 right 区域中找第几个最小的元素，这个“第几个” 就是 k - left.length - equal.length
//         return quickSelect(right, k - left.length - equal.length)
//     }
// }
