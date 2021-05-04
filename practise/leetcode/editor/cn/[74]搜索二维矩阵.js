//编写一个高效的算法来判断 m x n 矩阵中，是否存在一个目标值。该矩阵具有如下特性： 
//
// 
// 每行中的整数从左到右按升序排列。 
// 每行的第一个整数大于前一行的最后一个整数。 
// 
//
// 
//
// 示例 1： 
//
// 
//输入：matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
//输出：true
// 
//
// 示例 2： 
//
// 
//输入：matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
//输出：false
// 
//
// 
//
// 提示： 
//
// 
// m == matrix.length 
// n == matrix[i].length 
// 1 <= m, n <= 100 
// -104 <= matrix[i][j], target <= 104 
// 
// Related Topics 数组 二分查找 
// 👍 435 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    const height = matrix.length;
    const weight = matrix[0].length;

    let low = 0;
    let high = height * weight - 1;
    while (low <= high) {
        const mid = low + Math.floor((high - low) / 2);
        // 精妙，寻址公式
        const midValue = matrix[Math.floor(mid / weight)][mid % weight];
        if (target === midValue) {
            return true;
        } else if (target > midValue) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return false;
};
//leetcode submit region end(Prohibit modification and deletion)
