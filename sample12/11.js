const arr = [3, 5, -4, 8, 11, 1, -1, 6];
[1,2,3,4,5,6,7]

function binarySearch(arr, ele) {
    const halfLength = Math.floor(arr.length/2);
    
    if (ele === arr[halfLength]) {
        return halfLength;
    } else if (ele > arr[halfLength]) {
        binarySearch(arr.slice(halfLength, arr.length-1), ele);
    } else if (ele < arr[halfLength]) {
        binarySearch(arr.slice(0, halfLength-1), ele);
    }
}


binarySearch([1,2,3,4,5,6,7], 6);










