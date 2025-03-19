//给定一个字符串 s ，请你找出其中不含有重复字符的 最长 子串 的长度。
//
//
//
// 示例 1:
//
//
//输入: s = "abcabcbb"
//输出: 3
//解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
//
//
// 示例 2:
//
//
//输入: s = "bbbbb"
//输出: 1
//解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
//
//
// 示例 3:
//
//
//输入: s = "pwwkew"
//输出: 3
//解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
//     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
//
//
//
//
// 提示：
//
//
// 0 <= s.length <= 5 * 10⁴
// s 由英文字母、数字、符号和空格组成
//
//
// Related Topics 哈希表 字符串 滑动窗口 👍 10703 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
function lengthOfLongestSubstring(s: string): number {

}
//leetcode submit region end(Prohibit modification and deletion)

/*
滑动窗口
 */
/*
function lengthOfLongestSubstring(s: string): number {
    if (s.length === 0) {
        return 0
    }

    // 记录字符最后出现的位置
    const map = new Map<string, number>()
    // 滑动窗口左边界
    let left = 0;
    // 最大子串长度
    let maxLength = 0;

    for (let right = 0; right < s.length; right++) {
        const currentChar = s[right]

        // 判断是否存在过这个字符串并且在滑动窗口内
        if (map.has(currentChar) && map.get(currentChar) >= left) {
            // 修改 left 的位置到滑动窗口内那个字符串 + 1
            left = map.get(currentChar) + 1
        }

        // 记录当前字符串的位置
       map.set(currentChar, right)

        // 计算最大子串的长度
        maxLength = Math.max(maxLength, right - left + 1)
    }

    return maxLength


}

 */
