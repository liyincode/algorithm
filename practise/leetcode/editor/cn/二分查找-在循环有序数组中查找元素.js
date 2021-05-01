// 无重复元素
function bsearch(a, n, target) {
    let low = 0;
    let high = n - 1;

    while (low <= high) {
        const mid = low + Math.floor((high - low) / 2);

        if (a[mid] === target) return mid;

        // 判断哪边有序
        if (a[low] < a[mid]) {
            // 左边有序
            if (target >= a[low] && target < a[mid]) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        } else {
            // 右边有序
            if (target > a[mid] && target <= a[high]) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
    }

    return -1;
}


const data = [7, 9, 10, 11, 15, 1, 2, 3, 4, 5, 6];
console.log(bsearch(data, data.length, 5));