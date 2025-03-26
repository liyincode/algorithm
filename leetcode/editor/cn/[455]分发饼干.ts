//假设你是一位很棒的家长，想要给你的孩子们一些小饼干。但是，每个孩子最多只能给一块饼干。
//
// 对每个孩子 i，都有一个胃口值 g[i]，这是能让孩子们满足胃口的饼干的最小尺寸；并且每块饼干 j，都有一个尺寸 s[j] 。如果 s[j] >= g[
//i]，我们可以将这个饼干 j 分配给孩子 i ，这个孩子会得到满足。你的目标是满足尽可能多的孩子，并输出这个最大数值。
//
// 示例 1:
//
//
//输入: g = [1,2,3], s = [1,1]
//输出: 1
//解释:
//你有三个孩子和两块小饼干，3 个孩子的胃口值分别是：1,2,3。
//虽然你有两块小饼干，由于他们的尺寸都是 1，你只能让胃口值是 1 的孩子满足。
//所以你应该输出 1。
//
//
// 示例 2:
//
//
//输入: g = [1,2], s = [1,2,3]
//输出: 2
//解释:
//你有两个孩子和三块小饼干，2 个孩子的胃口值分别是 1,2。
//你拥有的饼干数量和尺寸都足以让所有孩子满足。
//所以你应该输出 2。
//
//
//
//
// 提示：
//
//
// 1 <= g.length <= 3 * 10⁴
// 0 <= s.length <= 3 * 10⁴
// 1 <= g[i], s[j] <= 2³¹ - 1
//
//
//
//
// 注意：本题与 2410. 运动员和训练师的最大匹配数 题相同。
//
// Related Topics 贪心 数组 双指针 排序 👍 918 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
function findContentChildren(g: number[], s: number[]): number {

}
//leetcode submit region end(Prohibit modification and deletion)


/**
 * 贪心算法，每一步都想要最优解
 */
// function findContentChildren(g: number[], s: number[]): number {
//     // 将孩子和饼干从小到大排序
//     g.sort((a, b) => a - b);
//     s.sort((a, b) => a - b)
//
//     // 两个索引，分别指向孩子和饼干
//     let childIndex = 0;
//     let cookieIndex = 0
//
//     while (childIndex < g.length && cookieIndex < s.length) {
//         // 如果当前这个饼干满足当前这个孩子
//         if (s[cookieIndex] >=g[childIndex]) {
//             // 满足的孩子就不要了，到下一个孩子
//             childIndex++
//         }
//
//         // 下一个饼干
//         cookieIndex++
//     }
//
//     return childIndex
// }

// function findContentChildren(g: number[], s: number[]): number {
//     // 标记已经被满足的孩子
//     const satisfied = new Array(g.length).fill(false);
//     let count = 0;
//
//     // 遍历每个饼干
//     for (let i = 0; i < s.length; i++) {
//         let bestChildIndex = -1;
//         let maxAppetite = 0;
//
//         // 为当前饼干寻找最适合的孩子(就是饼干刚好接近这个孩子的胃口大小)
//         for (let j = 0; j < g.length; j++) {
//             // 如果孩子未被满足且当前饼干能满足该孩子
//             if (!satisfied[j] && s[i] >= g[j] && g[j] > maxAppetite) {
//                 bestChildIndex = j;
//                 maxAppetite = g[j];
//             }
//         }
//
//         // 如果找到适合的孩子
//         if (bestChildIndex !== -1) {
//             satisfied[bestChildIndex] = true;
//             count++;
//         }
//     }
//
//     return count;
// }
