//给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有满足条件且不重复
//的三元组。 
//
// 注意：答案中不可以包含重复的三元组。 
//
// 
//
// 示例： 
//
// 给定数组 nums = [-1, 0, 1, 2, -1, -4]，
//
//满足要求的三元组集合为：
//[
//  [-1, 0, 1],
//  [-1, -1, 2]
//]
// 
// Related Topics 数组 双指针 
// 👍 2686 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {

};
//leetcode submit region end(Prohibit modification and deletion)


// 1. 暴力法
// var threeSum = function (nums) {
//     let result = [];
//     nums.sort((a, b) => a - b);
//
//     for (let i = 0; i < nums.length - 2; i++) {
//         for (let j = i + 1; j < nums.length - 1; j++) {
//             for (let k = j + 1; k < nums.length; k++) {
//                 // 去重
//                 if ( i > 0 && nums[i] === nums[ i - 1] ) continue;
//                 if ( j > i + 1 && nums[j] === nums[ j - 1] ) continue;
//                 if ( k > j + 1 && nums[k] === nums[ k - 1] ) continue;
//                 if (nums[i] + nums[j] + nums[k] === 0) result.push([nums[i], nums[j], nums[k]]);
//             }
//         }
//     }
//
//     return result;
//
// };
// 2. 双指针夹逼
//     var threeSum = function (nums) {
//         let result = [];
//         // 排序，增序
//         result.sort((a, b) => a - b);
//
//         for (let k = 0; k < nums.length - 2; k++) {
//             // 如果 nums[k] === nums[k - 1] , k - 1 和 k 的所有情况是一样的，去重 k 的情况
//             if (k > 0 && nums[k] === nums[k - 1]) continue;
//             if (nums[k] > 0) break;
//
//             let i = k + 1, j = nums.length - 1;
//             while (i < j) {
//                 const sum = nums[k] + nums[i] + nums[j];
//                 if (sum < 0) {
//                     // i 往右走，并跳过 nums[i] 重复的情况
//                     while (i < j && nums[i] === nums[++i]) ;
//                 } else if (sum > 0) {
//                     // j 往左走，并跳过 nums[j] 重复的情况
//                     while (i < j && nums[j] === nums[--j]) ;
//                 } else {
//                     result.push([nums[k], nums[i], nums[j]]);
//                     // 跳过所有 nums[i] nums[j] 所有的情况
//                     while (i < j && nums[i] === nums[++i]) ;
//                     while (i < j && nums[j] === nums[--j]) ;
//                 }
//             }
//         }
//
//         return result;
//     }
// };