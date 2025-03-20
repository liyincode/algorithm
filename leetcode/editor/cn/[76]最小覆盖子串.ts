//给你一个字符串 s 、一个字符串 t 。返回 s 中涵盖 t 所有字符的最小子串。如果 s 中不存在涵盖 t 所有字符的子串，则返回空字符串 "" 。
//
//
//
// 注意：
//
//
// 对于 t 中重复字符，我们寻找的子字符串中该字符数量必须不少于 t 中该字符数量。
// 如果 s 中存在这样的子串，我们保证它是唯一的答案。
//
//
//
//
// 示例 1：
//
//
//输入：s = "ADOBECODEBANC", t = "ABC"
//输出："BANC"
//解释：最小覆盖子串 "BANC" 包含来自字符串 t 的 'A'、'B' 和 'C'。
//
//
// 示例 2：
//
//
//输入：s = "a", t = "a"
//输出："a"
//解释：整个字符串 s 是最小覆盖子串。
//
//
// 示例 3:
//
//
//输入: s = "a", t = "aa"
//输出: ""
//解释: t 中两个字符 'a' 均应包含在 s 的子串中，
//因此没有符合条件的子字符串，返回空字符串。
//
//
//
// 提示：
//
//
// m == s.length
// n == t.length
// 1 <= m, n <= 10⁵
// s 和 t 由英文字母组成
//
//
//
//进阶：你能设计一个在
//o(m+n) 时间内解决此问题的算法吗？
//
// Related Topics 哈希表 字符串 滑动窗口 👍 3191 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/*
1. 确定滑动窗口，记录长度，记录左右位置
2.
 */
function minWindow(s: string, t: string): string {

}
//leetcode submit region end(Prohibit modification and deletion)

/*
function minWindow(s: string, t: string): string {
if (s.length < t.length) {
    return ''
}

// t 中每个字符多少次访问的 map
const targetMap = new Map<string, number>()
for(const char of t) {
    targetMap.set(char, (targetMap.get(char) || 0) + 1)
}

// 需要匹配的字符数
const requireChars = targetMap.size
// 当前匹配的不同字符数
let matchedChars = 0;

// 滑动窗口中字符多少次访问的 map
const windowMap = new Map<string, number>()

// 滑动窗口左边界
let left  = 0;
// 滑动窗口右边界
let right = 0;

// 所有滑动窗口中，最小的宽度
let minLength = Infinity
let minStart = 0;

while (right < s.length) {
    const charRight = s[right]

    // 遇见字符，更新字符次数
    windowMap.set(charRight, (windowMap.get(charRight) || 0) + 1)

    // 如果当前字符满足要求，并且字符出现的次数也满足要求
    if (targetMap.has(charRight) && windowMap.get(charRight) === targetMap.get(charRight)) {
        matchedChars++
    }


    // 收缩窗口，找到最小窗口
    while (left <=right && matchedChars === requireChars) {
        // 计算当前窗口长度
        if (right - left + 1 < minLength) {
            minLength = right - left + 1
            minStart = left
        }

        const charLeft = s[left]

        // 更新窗口字符计数
        windowMap.set(charLeft, windowMap.get(charLeft) - 1)

        // 如果当前字符离开滑动窗口后导致窗口不满足条件时，就跳出当前循环了
        if (targetMap.has(charLeft) && windowMap.get(charLeft) < targetMap.get(charLeft)) {
            matchedChars--
        }

        left++
    }

    right++
}

return minLength === Infinity ? "" : s.substring(minStart, minStart + minLength)
}
 */

