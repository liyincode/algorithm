//给定一个排序好的数组 arr ，两个整数 k 和 x ，从数组中找到最靠近 x（两数之差最小）的 k 个数。返回的结果必须要是按升序排好的。 
//
// 整数 a 比整数 b 更接近 x 需要满足： 
//
// 
// |a - x| < |b - x| 或者 
// |a - x| == |b - x| 且 a < b 
// 
//
// 
//
// 示例 1： 
//
// 
//输入：arr = [1,2,3,4,5], k = 4, x = 3
//输出：[1,2,3,4]
// 
//
// 示例 2： 
//
// 
//输入：arr = [1,2,3,4,5], k = 4, x = -1
//输出：[1,2,3,4]
// 
//
// 
//
// 提示： 
//
// 
// 1 <= k <= arr.length 
// 1 <= arr.length <= 104 
// 数组里的每个元素与 x 的绝对值不超过 104 
// 
// Related Topics 二分查找 
// 👍 203 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function (arr, k, x) {
    let n = arr.length;
    let low = 0;
    let high = n - 1;
    let firstElem = -1;

    // 找第一个大于等于 x 的元素
    while (low <= high) {
        const mid = low + Math.floor((high - low) / 2);
        if (arr[mid] >= x) {
            if (mid === 0 || arr[mid - 1] < x) {
                firstElem = mid;
                break;
            } else {
                high = mid - 1;
            }
        } else {
            low = mid + 1
        }
    }


    // 查找最接近 x 的 k 个元素
    let i = -1;
    let j = -1;
    if (firstElem === -1) {
        i = n - 1;
        j = n;
    } else {
        i = firstElem - 1;
        j = firstElem;
    }

    let result = [];
    let count = 0;

    while (count < k && i >= 0 && j < n) {
        if (Math.abs(arr[i] - x) <= Math.abs(arr[j] - x)) {
            result[count++] = arr[i];
            i--;
        } else {
            result[count++] = arr[j];
            j++;
        }
    }

    while (count < k && i >= 0) {
        result[count++] = arr[i];
        i--;
    }

    while (count < k && j < n) {
        result[count++] = arr[j];
        j++;
    }

    return result.sort((a, b) => a - b);
};
//leetcode submit region end(Prohibit modification and deletion)

console.log(findClosestElements([-2,-1,1,2,3,4,5], 7, 3))