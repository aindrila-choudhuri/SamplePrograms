function test(arr, sum) {
    let numMap = new Map();
    let pairs = []
    for (let i=0; i< arr.length; i++) {
        if (numMap.size) {
            let idx = numMap.get(sum-arr[i])
            if (idx) {
                pairs.push([sum-arr[i], arr[i]]);
            }
            numMap.set(arr[i], i+1)
        } else {
            numMap.set(arr[i], i+1)
        }
    }

    return pairs;
}