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
    const data = temperatures.map((item, index) => {
        return {
            value: item,
            index
        }
    })
    const result = Array.from({length: temperatures.length}, () => 0)
    let stack = [data[0]]

    for (let i = 1; i < data.length; i++) {
        const target = data[i]

        const compare = () => {
            const stackTop = stack[stack.length - 1]

            if (target.value > stackTop.value) {
                result[stackTop.index] = target.index - stackTop.index
                stack.pop()

                if (stack.length) {
                    compare()
                }
            }
        }
        compare()

        stack.push(target)
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

/*
Time Limit Exceeded
思路：
先拿出栈顶的温度作为基准值，然后将温度出栈到临时栈中，然后判断临时栈栈顶元素是否大于基准值
如果大于，则临时栈的长度就是增长的天数。完了之后将临时栈的元素出栈到温度表中，继续下一次比较
 */
// var dailyTemperatures = function(temperatures) {
//     const result = []
//     // 最大温度
//     let max = 0
//
//     while (temperatures.length) {
//         // 拿出需要比对的目标天
//         const target = temperatures.shift()
//         // 临时栈中放入直到温度升高的天数
//         let tempStack = []
//
//         if (target === max) {
//             result.push(0)
//             continue
//         }
//
//         while (temperatures.length) {
//             // 拿出栈顶温度
//             const temperature = temperatures.shift()
//             // console.log(temperature)
//             // 放入临时栈中
//             tempStack.unshift(temperature)
//
//             if (temperature > target) {
//                 // 如果温度大于这天的温度，就把过了多少天放入结果中
//                result.push(tempStack.length)
//                 // 计算完结果，把临时栈的温度原路返回给温度表
//                while (tempStack.length) {
//                    temperatures.unshift(tempStack.shift())
//                }
//                break
//             }
//
//             // 如果比对了一圈，直到温度表的温度都比对完了，还没有找到升温的那一天
//             if (temperatures.length === 0 && tempStack.length) {
//                 max = target
//                 result.push(0)
//                 while (tempStack.length) {
//                     temperatures.unshift(tempStack.shift())
//                 }
//                 break
//             }
//         }
//
//         // 温度表最后一天
//         if (temperatures.length === 0) {
//             result.push(0)
//         }
//
//         console.log('result', result)
//     }
//
//     return result
// };

/*
思路：
初始化一个栈，然后每次拿一个元素比较栈顶的元素，大的话，下标相减就是天数，然后栈出栈然后再比
如果小的话，就把这个元素入栈，下次继续
 */
// var dailyTemperatures = function(temperatures) {
//     const data = temperatures.map((item, index) => {
//         return {
//             value: item,
//             index
//         }
//     })
//     const result = Array.from({length: temperatures.length})
//     let stack = [data[0]]
//
//     for (let i = 1; i < data.length; i++) {
//         const target = data[i]
//
//         const compare = () => {
//             const stackTop = stack[stack.length - 1]
//
//             if (target.value > stackTop.value) {
//                 result[stackTop.index] = target.index - stackTop.index
//                 stack.pop()
//
//                 if (stack.length) {
//                     compare()
//                 }
//             }
//         }
//         compare()
//
//         stack.push(target)
//     }
//
//     if (stack.length) {
//         while (stack.length) {
//             result[stack.pop().index] = 0
//         }
//     }
//
//
//     return result
// };
