function bsearch(a, n, target) {
    let low = 0;
    let high = n - 1;

    while (low <= high) {
        const mid = low + Math.floor((high - low) / 2);
        if (a[mid] <= target) {
            if (mid === n - 1 || a[mid + 1] > target) return mid;
            else low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
}

const data = [1, 2, 3, 3, 3, 6, 6, 7];
console.log(bsearch(data, data.length, 3));