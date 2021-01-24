let obj = {
    num: 1,
    test: ["1", "2","3"],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}
function convertToNumber(obj) {
        let keys = Object.keys(obj);
        keys.forEach((key) => {
            let value = obj[key];

            if(typeof value === "number") {
                obj[key] = value.toString();
            }else if (value && typeof value === "object" && !Array.isArray(value)) {
                convertToNumber(value)
            }
        })

        return obj;
}

let newObj = convertToNumber(obj);

console.log(newObj);
