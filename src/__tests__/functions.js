import NotACreativeColor from "./NotACreativeColor";

function add(a, b) {
    return a + b;
}

function returnObject(list, index) {
    for (let i = 0; i < list.length; i++) {
        let count = 0;
        const object = list[i];
        if (count === index) {
            return object;
        }
        count++;
    }
}

function toMatchObject() {
    const weather = {
        sky: 'clear',
        temperature: 'hot',
        wind: 'strong'
    }
    return weather;
}

function toThrowError(color) {
    if (color === 'green') {
        throw new Error(NotACreativeColor());
    } else {
        return 'OK';
    }
}

function lessThan10Truthy(a, b) {
    const result = a + b;
    if (result < 10) {
        return true;
    }
    return false;
}

module.exports = {
    add: add,
    returnObject: returnObject,
    toMatchObject: toMatchObject,
    toThrowError: toThrowError,
    lessThan10Truthy: lessThan10Truthy
}