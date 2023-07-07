//请实现一个函数按照之字形顺序打印二叉树，即第一行按照从左到右的顺序打印，第二层按照从右到左的顺序打印，第三行再按照从左到右的顺序打印，其他行以此类推。
//
//
//
// 例如: 给定二叉树: [3,9,20,null,null,15,7],
//
//     3
//   / \
//  9  20
//    /  \
//   15   7
//
//
// 返回其层次遍历结果：
//
// [
//  [3],
//  [20,9],
//  [15,7]
//]
//
//
//
//
// 提示：
//
//
// 节点总数 <= 1000
//
//
// Related Topics 树 广度优先搜索 二叉树 👍 294 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (!root) {
        return []
    }

    const result = [[root.val]]
    start(root)

    function start(node, layer = 1) {
        console.log(node, layer)
        const item = []

        if (layer % 2 === 0) {
            if (node.left) {
                item.push(node.left.val)
            }
            if (node.right) {
                item.push(node.right.val)
            }

            item.length && result.push(item)
            if (node.left && (node.left.left || node.left.right)) {
                layer++
                start(node.left, layer)
            } else if (node.right && (node.right.left || node.right.right)) {
                layer++
                start(node.right, layer)
            }
        } else if (layer % 2 === 1) {
            if (node.right) {
                item.push(node.right.val)
            }
            if (node.left) {
                item.push(node.left.val)
            }

            item.length && result.push(item)
            if (node.right && (node.right.left || node.right.right)) {
                layer++
                start(node.right, layer)
            } else if (node.left && (node.left.left || node.left.right)) {
                layer++
                start(node.left, layer)
            }
        }


    }

    return result
};
//leetcode submit region end(Prohibit modification and deletion)
