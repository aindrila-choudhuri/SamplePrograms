console.log('hello');

/*
Implement a Memoizer
- A function that accepts another function as a parameter and returns a memoized function
- the last argument will always be a callback, to be called when computation/async action is done
- argument count and type will vary. start with Number types and then expand to support Objects and Arrays
- ignore cache limit or expiry
*/
let obj = {}
let sleep1 = (delay) => new Promise((resolve) => {
    setTimeout(()=> resolve(), delay);
})

// an async action
function api(x, y, callback) {
    console.log('--- called API ---');
    setTimeout(()=> {
      callback(x + y);
    }, 1000);
}

// memoizer
/*
 // cache, checking value in cache, return cached or call and cache

*/


// memoizer will return a function which takes three args - last arg is a callback function
// while calling fn - the third arg function takes res because in the function api callback takes one arg which is sum of x and y - x+y
// requirement is - callback should be called after setValueToCache - so callback is called after that.
// callback function's job s not finding the sum, its job is to consle.log the res which is defined in the test function
function memoizer(fn) {
 // TODO
 return(val1, val2, callback) => {
    res = getValueFromCache(val1, val2);
    isExist = res[0]
    sumValFromCache = res[1]
    if (!isExist) {
        fn(val1, val2, function(res) {
           console.log('res', res);
           // cache here
           setValueToCache(val1, val2, res);
           callback(res);
        });
    } else {
        callback(sumValFromCache);
    }
 }
}

function setValueToCache(val1, val2, res) {
    const key = `${val1} - ${val2}`
    obj[key]= res;
}

function getValueFromCache(val1, val2){
    let expectedKey = `${val1} - ${val2}`
    let isExists = false
    
    if (expectedKey in obj) {
        isExists = true;
        return [isExists, obj[expectedKey]];
    }
    

    return [isExists, 0];
}


// test cases
async function test() {
  // callback
  const cb = (res) => console.log('result', res);

  const memoApi = memoizer(api);
  
  memoApi(2, 4, cb); 
  memoApi(4, 6, cb);
  await sleep1(3000); // wait for results

  memoApi(2, 4, cb); // should come from cache
}

test();