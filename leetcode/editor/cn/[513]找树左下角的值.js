//给定一个二叉树的 根节点 root，请找出该二叉树的 最底层 最左边 节点的值。
//
// 假设二叉树中至少有一个节点。
//
//
//
// 示例 1:
//
//
//
//
//输入: root = [2,1,3]
//输出: 1
//
//
// 示例 2:
//
//
//
//
//输入: [1,2,3,4,null,5,6,null,null,7]
//输出: 7
//
//
//
//
// 提示:
//
//
// 二叉树的节点个数的范围是 [1,10⁴]
//
// -2³¹ <= Node.val <= 2³¹ - 1
//
//
// Related Topics 树 深度优先搜索 广度优先搜索 二叉树 👍 492 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var findBottomLeftValue = function(root) {
    if (!root.left && !root.right) {
        return root.val
    }

    let result = [root.val]
    let maxLayer = 0
    search(root)

    function search(node, layer = 0) {
        layer++
        if (node.left) {
            search(node.left, layer)
        }

        if (node.right) {
            search(node.right, layer)
        }
        // 递归函数中，归的时候说明这个分支已经探到最低了
        if (layer > maxLayer) {
            maxLayer = layer
            result = [node.val]
        } else if (layer === maxLayer) {
            result.push(node.val)
        }

        layer--
    }

    // 数组中最左边也是第一个元素就是二叉树最底层最左边的值
    return result[0]
};
//leetcode submit region end(Prohibit modification and deletion)
