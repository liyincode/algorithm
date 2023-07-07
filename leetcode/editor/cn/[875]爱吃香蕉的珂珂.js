//珂珂喜欢吃香蕉。这里有 N 堆香蕉，第 i 堆中有 piles[i] 根香蕉。警卫已经离开了，将在 H 小时后回来。 
//
// 珂珂可以决定她吃香蕉的速度 K （单位：根/小时）。每个小时，她将会选择一堆香蕉，从中吃掉 K 根。如果这堆香蕉少于 K 根，她将吃掉这堆的所有香蕉，然后
//这一小时内不会再吃更多的香蕉。 
//
// 珂珂喜欢慢慢吃，但仍然想在警卫回来前吃掉所有的香蕉。 
//
// 返回她可以在 H 小时内吃掉所有香蕉的最小速度 K（K 为整数）。 
//
// 
//
// 
// 
//
// 示例 1： 
//
// 输入: piles = [3,6,7,11], H = 8
//输出: 4
// 
//
// 示例 2： 
//
// 输入: piles = [30,11,23,4,20], H = 5
//输出: 30
// 
//
// 示例 3： 
//
// 输入: piles = [30,11,23,4,20], H = 6
//输出: 23
// 
//
// 
//
// 提示： 
//
// 
// 1 <= piles.length <= 10^4 
// piles.length <= H <= 10^9 
// 1 <= piles[i] <= 10^9 
// 
// Related Topics 二分查找 
// 👍 168 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    if (h < piles.length) return -1;
    let low = 1;
    let high = -1;

    for (let i = 0; i < piles.length; i++) {
        if (piles[i] > high) {
            high = piles[i];
        }
    }

    while (low <= high) {
        const mid = low + Math.floor((high - low) / 2);

        const canFinish = finish(piles, mid, h);

        if (canFinish) {
            if (mid === 1 || !finish(piles, mid - 1, h)) {
                return mid;
            } else {
                high = mid - 1;
            }
        } else {
            low = mid + 1;
        }
    }
};

function finish(piles, k, h) {
    let result = 0;
    for (let i = 0; i < piles.length; i++) {
        // 猴子每一堆吃香蕉所用的时间 = ((n - 1) / k ) + 1
        result += (Math.floor((piles[i] - 1) / k) + 1);
    }

    return h >= result;
}
//leetcode submit region end(Prohibit modification and deletion)

console.log(minEatingSpeed([3,6,7,11], 8))