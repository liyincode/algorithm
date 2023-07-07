//给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
//
// 示例:
//
// 输入: [0,1,0,3,12]
//输出: [1,3,12,0,0]
//
// 说明:
//
//
// 必须在原数组上操作，不能拷贝额外的数组。
// 尽量减少操作次数。
//
// Related Topics 数组 双指针 👍 1179 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {

};
//leetcode submit region end(Prohibit modification and deletion)


// 双指针
//var moveZeroes = function(nums) {
//     let i = 0;
//
//     for (let j = 0; j < nums.length; j++) {
//         if (nums[j] !== 0) {
//             nums[i] = nums[j];
//             i++;
//         }
//     }
//
//     while (i < nums.length) nums[i++] = 0;
// };

//    let i = 0, j = 0;
//
//     const swap = (n, i, j) => {
//         const temp = n[i];
//         n[i] = n[j];
//         n[j] = temp;
//     }
//
//     while (j < nums.length) {
//         if (nums[j] !== 0) {
//             swap(nums, i, j);
//             i++;
//         }
//
//         j++;
//     }
