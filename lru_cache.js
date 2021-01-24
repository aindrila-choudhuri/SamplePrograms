const arr = [1, 2,3,4,1,3]
const cacheSize = 3

lruCache(arr, cacheSize)

function lruCache(arr, cacheSize) {
    let cache = [];

    for (let i = 0; i<arr.length; i++) {
        if (cache.length == 0) {
            cache.push(arr[i])
        } else {
            if (cache.includes(arr[i])) {
                if (cache[cache.length - 1] !== arr[i]) {
                    const arrIdx = cache.indexOf(arr[i]);
                    cache.splice(arrIdx, 1);
                    cache.push(arr[i])
                }
            } else {
                if (cache.length < cacheSize) {
                    cache.push(arr[i]) 
                } else if (cache.length === cacheSize) {
                    cache.splice(0, 1);
                    cache.push(arr[i])
                }
            }
        }
        console.log("cache : ", cache);
    }
}