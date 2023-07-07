//给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
//
// 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。
//
//
//
// 示例:
//
// 给定 nums = [2, 7, 11, 15], target = 9
//
//因为 nums[0] + nums[1] = 2 + 7 = 9
//所以返回 [0, 1]
//
// Related Topics 数组 哈希表
// 👍 9381 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * a + b = target
 * a = target - b
 */
var twoSum = function(nums, target) {

};
//leetcode submit region end(Prohibit modification and deletion)

console.log(twoSum([2, 7, 11, 15], 9));

// 1 暴力法
// var twoSum = function(nums, target) {
//     for (let i = 0; i < nums.length - 1; i++) {
//         for (let j =  i + 1; j < nums.length; j++) {
//             const sum = nums[i] + nums[j];
//             if (sum === target) return [i, j];
//         }
//     }
// };

/**
 * hash
 * a + b = target
 * a = target - b
 * 把每次循环的数组元素的值记下，放到对象中，如果之后循环里，对象以 target - b 为属性，有对应的值的话，就找到了
 */
// var twoSum = function(nums, target) {
//   // 以 num[i] 为 key，i 为 value
//   let map = {};
//
//   for (let i = 0; i < nums.length; i++) {
//     const index = map[target - nums[i]];
//     // 这里不能为 if (index) 因为 index === 0 的时候会走 else，用 undefined 更为合适
//     if (index !== undefined) {
//       // target - num[i] 的差值如果在 map 中找到，就说明 for 循环之前的值里有满足情况的
//       return [i, index];
//     } else {
//       // 将不满足的存入 map
//       map[nums[i]] = i;
//     }
//   }
// };

// 快慢指针
// var twoSum = function(nums, target) {
//   for (let i = 0; i < nums.length - 1; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) return [i, j];
//     }
//   }
// };
