//1, 11, 21, 1211, 111221, 312211, 13112221
function test(n) {
    let str = "";
    
    for (let i=1; i<=n; i++) {
        if (i === 1) {
            str = "1" 
        } else {
            for (let j=0; j<str.length; j++) {
                //count the occurance

            }
        }
    }
}


function generateNum(prevNum) {
    prevNum = "111221";
    let count = 0;
    let str = "";
    let currentNumber = prevNum[0];
    for (let j=0; j<prevNum.length; j++) {
        if (currentNumber === prevNum[j]) {
            count++
        } else {
            str = `${str}${count}${currentNumber}`;
            currentNumber = prevNum[j];
            count = 1;
            // if (j === prevNum.length -1) {

            // } 
            
        }
    }
}

