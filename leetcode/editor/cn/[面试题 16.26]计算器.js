//给定一个包含正整数、加(+)、减(-)、乘(*)、除(/)的算数表达式(括号除外)，计算其结果。
//
// 表达式仅包含非负整数，+， - ，*，/ 四种运算符和空格 。 整数除法仅保留整数部分。
//
// 示例 1:
//
// 输入: "3+2*2"
//输出: 7
//
//
// 示例 2:
//
// 输入: " 3/2 "
//输出: 1
//
// 示例 3:
//
// 输入: " 3+5 / 2 "
//输出: 5
//
//
// 说明：
//
//
// 你可以假设所给定的表达式都是有效的。
// 请不要使用内置的库函数 eval。
//
//
// Related Topics 栈 数学 字符串 👍 81 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
};
//leetcode submit region end(Prohibit modification and deletion)

console.log(calculate('1*2-3/4+5*6-7*8+9/10'))

/*
思路：两个栈，一个存放数字的栈，一个存放运算符的栈。
判断即将入运算符栈的第二个运算符与栈顶运算符的优先级
若将要入栈的优先级大于栈顶优先级，那就按兵不动继续入栈，等下次数字栈总数达到 3 个，运算符栈总数达到 2 个，这个时候开始计算结果
若将要入栈的优先级小于栈顶优先级，赶紧计算结果
每次计算完结果后，会将结果压入数字栈中
最后数字栈只能有一个值，就是最终结果
反正，运算符栈最多有两个运算符，数字栈最多有三个数字
 */
//var calculate = function(s) {
//     // 如 s = '2'
//     if (s.length === 1) {
//         return Number(s)
//     }
//
//     // 判断是否为运算符
//     const isOperator = val => ['+', '-', '*', '/'].includes(val)
//
//     // 转换为数组
//     const strArr = s.split('')
//     const handleArr = []
//
//     // 如 s = '32+54' strArr = ['3', '2', '+', '5', '4'] 转化为 handleArr = ['32', '+', '54']
//     let block = ''
//     for (let i = 0, j = 0; j < strArr.length;) {
//         if (isOperator(strArr[j])) {
//             handleArr.push(block)
//             handleArr.push(strArr[j])
//             i = j + 1
//             j = j + 2
//             block = strArr[i]
//         } else {
//             block = block + strArr[j]
//             j++
//         }
//     }
//     handleArr.push(block)
//
//     // 如 s = '32' handleArr = ['32']
//     if (handleArr.length === 1) {
//         return Number(s)
//     }
//
//     // 存放数字的栈
//     const numberStack = []
//     // 存放运算符的栈
//     const operatorStack = []
//
//     // 将运算符放在运算符栈，将数字放在数字栈
//     const pushItem = target => {
//         if (isOperator(target)) {
//             operatorStack.push(target)
//         } else {
//             numberStack.push(Number(target))
//         }
//     }
//
//     // 计算数字栈顶两个数字和运算符栈顶一个运算符的结果
//     const calVal = () => {
//         console.log('calVal ', numberStack)
//         let result = 0
//         const b = Number(numberStack.pop())
//         const operate = operatorStack.pop()
//         const a = Number(numberStack.pop())
//
//         if (operate === '+') {
//             result = a + b
//         } else if (operate === '-') {
//             result = a - b
//         } else if (operate === '*') {
//             result = a * b
//         } else if (operate === '/') {
//             result = Math.floor(a / b)
//         }
//
//         console.log(a, operate, b, result)
//         // 将计算结果压入数字栈
//         numberStack.push(result)
//     }
//
//     // 判断运算符优先级
//     const prior = (a, b) => {
//         if ((a === '*' || a === '/') && (b === '+' || b === '-')) {
//             return true
//         }
//
//         return false
//     }
//
//     console.log('handleArr ', handleArr)
//
//     for (let i = 0; i < handleArr.length; i++) {
//         const target = handleArr[i]
//         console.log('target', target)
//
//         if (isOperator(target)) {
//             if (operatorStack.length) {
//                 if (numberStack.length === 2) {
//                     console.log(2222, target)
//                     const topOperator = operatorStack[operatorStack.length - 1]
//
//                     // 当前运算符的优先级高于运算符栈顶的运算符时，不能计算还得把之后的数字放进来再看
//                     if (prior(target, topOperator)) {
//                         pushItem(target)
//                     } else {
//                         calVal()
//                         pushItem(target)
//                     }
//                 } else if (numberStack.length === 3) {
//                     console.log(333, target)
//                     calVal()
//
//                     // 如 '3+2*3+'，当计算完 2*3 后，发现下一个运算符是 '+' 低优先级，就把 3 + 6（刚才的乘积）算一下
//                     if (['+', '-'].includes(target)) {
//                         calVal()
//                     }
//
//                     pushItem(target)
//                 }
//             } else {
//                 pushItem(target)
//             }
//         } else {
//             pushItem(target)
//         }
//
//         console.log(numberStack, operatorStack)
//     }
//
//     // 当 s = '3+2*2' ,上面的代码只放入了各自栈，但并没有计算
//     if (operatorStack.length) {
//         calVal()
//     }
//     if (operatorStack.length) {
//         calVal()
//     }
//
//     return numberStack.pop()
// };
