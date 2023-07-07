//给你二叉树的根节点 root ，返回其节点值的 层序遍历 。 （即逐层地，从左到右访问所有节点）。
//
//
//
// 示例 1：
//
//
//输入：root = [3,9,20,null,null,15,7]
//输出：[[3],[9,20],[15,7]]
//
//
// 示例 2：
//
//
//输入：root = [1]
//输出：[[1]]
//
//
// 示例 3：
//
//
//输入：root = []
//输出：[]
//
//
//
//
// 提示：
//
//
// 树中节点数目在范围 [0, 2000] 内
// -1000 <= Node.val <= 1000
//
//
// Related Topics 树 广度优先搜索 二叉树 👍 1710 👎 0


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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (!root) {
        return []
    }

    const result = []
    const map = {}

    map[0] = [[root.val]]

    start(root)

    function start(node, layer = 1) {
       if ((node.left || node.right) && !map[layer]) {
           map[layer] = []
       }

       const item = []
       if (node.left) {
           item.push(node.left.val)
       }
       if (node.right) {
           item.push(node.right.val)
       }
       if (item.length) {
           map[layer].push(item)
       }

        if (node.left || node.right) {
            layer++
        }

       if (node.left) {
           start(node.left)
       }
       if (node.right) {
           start(node.right)
       }

       layer--
    }

    Object.values(map).forEach(item => {
        item.forEach(s => {
            result.push(s)
        })
    })

    return result
};
//leetcode submit region end(Prohibit modification and deletion)
