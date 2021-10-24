import NotACreativeColor from "./NotACreativeColor";
import axios from "axios";

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

function returnString() {
    return 'This String is returned';
}

function returnArrayAnimals() {
    const animals = [
        'cats',
        'dogs',
        'birds',
        'frogs'
    ]
    return animals;
}

async function fetchData() {
    const result = await axios.get('https://api.publicapis.org/entries');
    const count = result.data.count;
    return count;
}

module.exports = {
    add: add,
    returnObject: returnObject,
    toMatchObject: toMatchObject,
    toThrowError: toThrowError,
    lessThan10Truthy: lessThan10Truthy,
    returnString: returnString,
    returnArrayAnimals: returnArrayAnimals,
}