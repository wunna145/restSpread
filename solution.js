//ES2015 Function that takes a variable number of arguments
const filterOutOdds = (...args) => args.filter(num => num % 2 === 0)

//findMin
const findMin = (...args) => Math.min(...args)

//mergeObjects
const mergeObjects = (obj1 , obj2) => ({...obj1, ...obj2})

//doubleAndReturnArgs
const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map(num => num * 2)]

//SliceAndDice
/** remove a random element in the items array
and return a new array without that item. */
const removeRandom = (...items) => {
    let index = Math.floor(Math.random() * items.length);
    let forFront = [...items];
    let forBack = [...items];
    return [...forFront.splice(0,index), ...forBack.splice(index+1)];
}

/** Return a new array with every item in array1 and array2. */
const extend = (arr1, arr2) => [...arr1, ...arr2]

/** Return a new object with all the keys and values
from obj and a new key/value pair */
const addKeyVal = (obj, key, val) => {
    let newObj = {...obj};
    newObj[key] = val;
    return newObj;
}

/** Return a new object with a key removed. */
const removeKey = (obj, key) => {
    let newObj = {...obj};
    delete newObj[key];
    return newObj;
}

/** Combine two objects and return a new object. */
const combine = (obj1, obj2) => ({...obj1, ...obj2})

/** Return a new object with a modified key and value. */
const update = (obj, key, val) => {
    let newObj = {...obj};
    newObj[key] = val;
    return newObj;
}

