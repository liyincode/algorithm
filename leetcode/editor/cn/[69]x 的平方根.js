//实现 int sqrt(int x) 函数。 
//
// 计算并返回 x 的平方根，其中 x 是非负整数。 
//
// 由于返回类型是整数，结果只保留整数的部分，小数部分将被舍去。 
//
// 示例 1: 
//
// 输入: 4
//输出: 2
// 
//
// 示例 2: 
//
// 输入: 8
//输出: 2
//说明: 8 的平方根是 2.82842..., 
//     由于返回类型是整数，小数部分将被舍去。
// 
// Related Topics 数学 二分查找 
// 👍 669 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    // 转换为求最后一个 平方 <= x 的元素
    if (x === 0) return 0;
    let low = 1;
    let high = x;

    while (low <= high) {
        const mid = low + Math.floor((high - low) / 2);
        const mid2 = mid * mid;

        if (mid2 === x) {
            return mid;
        } else if (mid2 < x) {
            const mid22 = (mid + 1) * (mid + 1);
            if (mid22 <= x) {
                low = mid + 1;
            } else {
                return mid;
            }
        } else {
            high = mid - 1;
        }

    }
};
//leetcode submit region end(Prohibit modification and deletion)

console.log(mySqrt(4))