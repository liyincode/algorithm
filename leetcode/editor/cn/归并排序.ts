function mergeSort(nums: number[]) {
    if (nums.length <= 1) {
        return nums
    }

    // 分割数组
    const middle = Math.floor(nums.length / 2)
    const left = nums.slice(0, middle)
    const right = nums.slice(middle)

    // 递归排序左右两半
    const sortedLeft = mergeSort(left)
    const sortedRight = mergeSort(right)

    // 合并两个已排序的子数组
    return merge(sortedLeft, sortedRight)
}

function merge(left, right) {
    const result = []
    let leftIndex = 0
    let rightIndex = 0

    // 比较左右数组的元素，小的元素放入结果数组
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex])
            leftIndex++
        } else {
            result.push(right[rightIndex])
            rightIndex++
        }
    }

    // 将剩余元素添加到结果数组中
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
}

// 使用示例
const array = [38, 27, 43, 3, 9, 82, 10];
console.log("排序前:", array);
const sortedArray = mergeSort(array);
console.log("排序后:", sortedArray);
