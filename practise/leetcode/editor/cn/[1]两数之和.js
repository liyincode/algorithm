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
//     for (let i = 0; i < nums.length; i++) {
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
//     let map = {};
//     for (let i = 0; i < nums.length; i++) {
//         const currentValue = nums[i];
//         const index = map[target - currentValue];
//         if (index !== undefined) return [index, i];
//         map[currentValue] = i;
//     }
// };