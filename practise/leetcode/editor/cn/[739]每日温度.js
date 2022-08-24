//给定一个整数数组 temperatures ，表示每天的温度，返回一个数组 answer ，其中 answer[i] 是指对于第 i 天，下一个更高温度出现
//在几天后。如果气温在这之后都不会升高，请在该位置用 0 来代替。
//
//
//
// 示例 1:
//
//
//输入: temperatures = [73,74,75,71,69,72,76,73]
//输出: [1,1,4,2,1,1,0,0]
//
//
// 示例 2:
//
//
//输入: temperatures = [30,40,50,60]
//输出: [1,1,1,0]
//
//
// 示例 3:
//
//
//输入: temperatures = [30,60,90]
//输出: [1,1,0]
//
//
//
// 提示：
//
//
// 1 <= temperatures.length <= 10⁵
// 30 <= temperatures[i] <= 100
//
//
// Related Topics 栈 数组 单调栈 👍 1262 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    const result = []

    for (let i = 0, j = 1; i < temperatures.length;) {
        // i 被比较的那天，j 表示第几天后温度升高
        if (j < temperatures.length) {
            if (temperatures[j] > temperatures[i]) {
                // 发现温度升高了
                // j - i 表示过了几天温度升高
                result.push(j - i)
                // 计算结果后，换下一天比较
                j = ++i + 1
            } else {
                // 如果没发现温度升高，继续寻找
                j++
            }
        } else {
            // 如果温度表的最后一天都比较完，温度没有升高的话，就返回 0
            result.push(0)
            j = ++i + 1
        }

    }

    return result
};
//leetcode submit region end(Prohibit modification and deletion)


console.log(dailyTemperatures([73,74,75,71,69,72,76,73]))

/*
思路：双指针，一个指针作为基准值，一个指针去找第几天后温度升高
 */
// var dailyTemperatures = function(temperatures) {
//     const result = []
//
//     for (let i = 0, j = 1; i < temperatures.length;) {
//         // i 被比较的那天，j 表示第几天后温度升高
//         if (j < temperatures.length) {
//             if (temperatures[j] > temperatures[i]) {
//                 // 发现温度升高了
//                 // j - i 表示过了几天温度升高
//                 result.push(j - i)
//                 // 计算结果后，换下一天比较
//                 j = ++i + 1
//             } else {
//                 // 如果没发现温度升高，继续寻找
//                 j++
//             }
//         } else {
//             // 如果温度表的最后一天都比较完，温度没有升高的话，就返回 0
//             result.push(0)
//             j = ++i + 1
//         }
//
//     }
//
//     return result
// };
