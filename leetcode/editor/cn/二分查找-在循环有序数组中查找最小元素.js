// 无重复数据
function bsearch(a, n) {
    let low = 0;
    let high = n - 1;

    while (low <= high) {
        const mid = low + Math.floor((high - low) / 2);
        if (low === high) return mid;

        if (// 循环有序时
            (mid !== 0 && a[mid] < a[mid - 1]) ||
            // 有序时
            (mid === 0 && a[mid] < a[high])) return mid;


        if (a[mid] > a[high]) {
            // 如果是 mid - high 是循环有序，那目标值一定在这里面
            low = mid + 1
        } else {
            // 如果是有序，向左探测
            high = mid - 1;
        }
    }

    return -1;
}

const data = [5, 6, 7, 1, 2, 3];
console.log(bsearch(data, data.length));