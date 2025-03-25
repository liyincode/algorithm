//我们正在玩猜数字游戏。猜数字游戏的规则如下：
//
// 我会从 1 到 n 随机选择一个数字。 请你猜选出的是哪个数字。
//
// 如果你猜错了，我会告诉你，我选出的数字比你猜测的数字大了还是小了。
//
// 你可以通过调用一个预先定义好的接口 int guess(int num) 来获取猜测结果，返回值一共有三种可能的情况：
//
//
// -1：你猜的数字比我选出的数字大 （即 num > pick）。
// 1：你猜的数字比我选出的数字小 （即 num < pick）。
// 0：你猜的数字与我选出的数字相等。（即 num == pick）。
//
//
// 返回我选出的数字。
//
//
//
// 示例 1：
//
//
//输入：n = 10, pick = 6
//输出：6
//
//
// 示例 2：
//
//
//输入：n = 1, pick = 1
//输出：1
//
//
// 示例 3：
//
//
//输入：n = 2, pick = 1
//输出：1
//
//
//
//
// 提示：
//
//
// 1 <= n <= 2³¹ - 1
// 1 <= pick <= n
//
//
// Related Topics 二分查找 交互 👍 360 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */


function guessNumber(n: number): number {

};
//leetcode submit region end(Prohibit modification and deletion)

/*
function guessNumber(n: number): number {
    let left:number = 1;
    let right: number = n;

    while (left <= right) {
        const mid: number = Math.floor((right + left) / 2)

        const result: number = guess(mid)

        if (result === 0) {
            return mid
        } else if (result === -1) {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }

    return -1
};

 */
