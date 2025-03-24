function binarySearch(nums: number[], target: number): number {
    let left = 0
    let right = nums.length - 1

    while (left <= right) {
        const mid = Math.floor((left + right) / 2)

        if (nums[mid] === target) {
            return mid
        }

        // 左半部分找
        if (nums[mid] > target) {
            right = mid - 1
        }
        // 右半部分找
        else {
            left = mid + 1
        }
    }

    return -1
}


// 测试数据
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(binarySearch(arr, 5)); // 输出: 4
console.log(binarySearch(arr, 10)); // 输出: -1
