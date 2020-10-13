
function assignObjects() {
    newObject = {};
    for (element of arguments) {
        copyObject(element, newObject)
    }
    return newObject;
}
function copyObject(object, newObject) {
    for (key in object) {
        if (typeof (object[key]) == 'object') {
            copyObject(object[key], newObject)
        } else {
            newObject[key] = object[key];
        }
    }
    return newObject
}

console.log(assignObjects({ x: 10, y: 20 }, { z: 30 }));
console.log(assignObjects({ x: 10 }, { x: 20, y: 30 }));
console.log(assignObjects({ x: 10 }, { x: 20, y: 30 }, { x: 87, z: 32 },{ q: 430, k: 10 }, { y: { r: {t : {r: 100}}}, z: 0 }));
    