function map(sourceArray, cbFunc) {
    const newArray = [];
    for (const val of sourceArray) {
        newArray.push(cbFunc(val));
    };
    return newArray;
};

function reduce(sourceArray, cbFunc, startingPoint=0) {
    let current = startingPoint;

    for (const val of sourceArray) {
        if (val === sourceArray[0] && !current) {
            current = val;
        } else {
            current = cbFunc(val, current);
        };
    };
    
    return current;
};