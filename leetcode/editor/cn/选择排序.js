/*
选择排序
分左右区间，从右边区间中找到最小值，填到左区间末尾

不是稳定排序算法：2，6，3，2，4，1
最好，最坏，平均时间复杂度都是 O(n^2)
 */
function selectSort(arr) {
    if (arr.length <= 1) return

    for (let i = 0; i < arr.length - 1; i++) {
        let minValue = arr[i]
        let minIndex = i

        for (let j = i; j < arr.length; j++) {
            if (minValue > arr[j]) {
                minValue = arr[j]
                minIndex = j
            }
        }

        arr[minIndex] = arr[i]
        arr[i] = minValue
    }
}

const arr = [4, 5, 6, 1, 3, 2]
selectSort(arr)
console.log(arr)

