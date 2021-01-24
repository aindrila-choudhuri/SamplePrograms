const obj = {
    stuff: 'foo',
    data: {
        val: {
            thing: {
                info: 'bar',
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: 'baz',
                    },
                },
            },
        },
    },
};


let outputArr = []

function getStrings(obj) {
    for (let key in obj){
        if (typeof obj[key] === 'string') {
            outputArr.push(obj[key]);
        } else if (typeof obj[key] === 'object') {
            getStrings(obj[key]);
        }
    }
    return outputArr;
}

getStrings(obj);