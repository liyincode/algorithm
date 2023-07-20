//从上到下打印出二叉树的每个节点，同一层的节点按照从左到右的顺序打印。
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
// 返回：
//
// [3,9,20,15,7]
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
// Related Topics 树 广度优先搜索 二叉树 👍 282 👎 0


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
 * @return {number[]}
 */

//leetcode submit region end(Prohibit modification and deletion)
/*
    使用队列方式，先将 root 放入队列，从队列出根元素放入结果数组，然后将根元素的左右树放入队列
    ，继续将左子树从队列取出放入结果数组，然后再将左子树的左右子树放入队列，依次循环往复
 */
//var levelOrder = function (root) {
//     if (!root) {
//         return []
//     }
//
//     const result = []
//     const queue = []
//
//     queue.push(root)
//     while (queue.length) {
//         const target = queue.shift()
//         target.left && queue.push(target.left)
//         target.right && queue.push(target.right)
//
//         result.push(target.val)
//     }
//
//     return result
// }

// var levelOrder = function(root) {
//     const result = []
//     const map = {}
//
//     if (root) {
//         map[0] = [root.val]
//     } else {
//         return result
//     }
//
//     start(root)
//
//     function start(node, layer = 1) {
//         console.log(node.val, layer)
//         if ((node.left || node.right) && !map[layer]){
//             map[layer] = []
//         }
//         if (node.left) {
//             map[layer].push(node.left.val)
//         }
//         if (node.right) {
//             map[layer].push(node.right.val)
//         }
//
//         if (node.left || node.right) {
//             layer++
//         }
//
//         if (node.left) {
//             start(node.left, layer)
//         }
//         if (node.right) {
//             start(node.right, layer)
//         }
//         console.log(map)
//         layer--
//     }
//
//     console.log(map)
//     Object.values(map).forEach(item => {
//         result.push(item)
//     })
//
//     return result.flat()
// };

