//给定一个 N 叉树，返回其节点值的 前序遍历 。
//
// N 叉树 在输入中按层序遍历进行序列化表示，每组子节点由空值 null 分隔（请参见示例）。
//
//
//
//
//
// 进阶：
//
// 递归法很简单，你可以使用迭代法完成此题吗?
//
//
//
// 示例 1：
//
//
//
//
//输入：root = [1,null,3,2,4,null,5,6]
//输出：[1,3,5,6,2,4]
//
//示例 2：
//
//
//
//
//输入：root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,
//null,13,null,null,14]
//输出：[1,2,3,6,7,11,14,4,8,12,5,9,13,10]
//
//
//
//
// 提示：
//
//
// N 叉树的高度小于或等于 1000
// 节点总数在范围 [0, 10^4] 内
//
//
//
// Related Topics 树
// 👍 159 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function(root) {

};



//leetcode submit region end(Prohibit modification and deletion)
// 迭代
// var preorder = function(root) {
//     if (root === null) return [];
//
//     let stack = [root];
//     let res = [];
//
//     while (stack.length) {
//       const curr = stack.pop();
//       res.push(curr.val);
//
//       for (let i = curr.children.length - 1; i >= 0; i--) {
//         stack.push(curr.children[i]);
//       }
//     }
//
//     return res;
// };

// 递归
// var preorder = function(root) {
//   if (root === null) return [];
//   const res = [];
//   const traversal = node => {
//     if (node.children !== null) {
//       res.push(node.val);
//       node.children.forEach(child => traversal(child));
//     }
//   }
//   traversal(root);
//   return res;
// };

function Node(val, children) {
  this.val = val;
  this.children = children;
};

let root = new Node('root', []);
let node4 = new Node(4, []);
let node5 = new Node(5, []);
let node6 = new Node(6, []);
let node1 = new Node(1, [node5, node6]);
let node2 = new Node(2, []);
let node3 = new Node(3, []);
root.children = [node1, node2, node3, node4]


console.log(preorder(root));
