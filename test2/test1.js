/* There exists a staircase with N steps, and you can climb up either 1 or 2 steps at a time.
Given N, write a function that returns the number of unique ways you can climb the staircase and the possible ways.
For example, if N is 4, then there are 5 unique ways:
* 1, 1, 1, 1
* 2, 1, 1
* 1, 2, 1
* 1, 1, 2
* 2, 2


Test Cases :

[ N : 6 , I : [3] , O1 : 1 , O2: {3,3} ]
[ N : 5 , I : [2,3] , O1 : 2 , O2 : {3,2} - {2,3} ]
*/
function steps(noOfSteps, types) {
    let coveredSteps = 0;
    let arr = [];
    while (noOfSteps >=coveredSteps) {
        for(let i=0; i<types.length; i++) {
            if ((noOfSteps-coveredSteps-types[i] == 0) ||  (noOfSteps-coveredSteps-types[i] >= Math.min.apply(Math, types))) {
                coveredSteps += types[i];
                arr.push(types[i]);
                console.log("1 arr : ", arr);
            }
        }
    }
    console.log(arr);
}

steps(10, [2,3])





