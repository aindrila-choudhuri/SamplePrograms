const dependency = {
    "libA" : ["libC"],
    "libB" : ["libM"],
    "libC": ["libX", "libY"],
    "libX": ["libA", "libM"]
}

function findCyclic(dependency) {
    let dependencyKeylist = [];
    for (key in dependency) {
        dependencyKeylist.push(key)
        // check for each of the value - if it is there in dependencyKeylist then cyclic
        // else if the value is there in dependency key
        // push it to dependency list
        dependency[key].forEach(element => {
            console.log("element" , element);
            if (dependencyKeylist.includes(element)) {
                console.log("cyclic" , element);
                return;
            } else {
                if (isValueInDependencyKey(element)) {
                    dependencyKeylist.push(element);
                }
            }
        });
        
    }
    console.log("dependencyKeylist : ", dependencyKeylist)
}

function isValueInDependencyKey(element, dependency) {
    for (element in dependency) {
        return true;
    }
    return false;
}

findCyclic(dependency)