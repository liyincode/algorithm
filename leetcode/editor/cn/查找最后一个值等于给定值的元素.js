const bsearch = (a, n, value) => {
    let low = 0;
    let high = n - 1;

    while (low <= high) {
        const mid = low + Math.floor((high - low) / 2);
        if (a[mid] === value) {
            if (mid === n - 1 || a[mid] !== a[mid + 1]) return mid;
            else low = mid + 1;
        } else if (value > a[mid]) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }

    }

    return -1;
}

const data = [1, 2, 3, 3, 3, 6, 6, 7];
console.log(bsearch(data, data.length, 3));