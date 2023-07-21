const myEach = function(collection, callback){
    const arr = Object.values(collection)

    for(const element of arr){
        callback(element)
    }

    return collection
}

const myMap = function(collection, callback){
    const arr = Object.values(collection)
    const returnArr = []

    for(let i = 0; i < arr.length; i++){
        arr[i] = callback(arr[i])
    }

    return arr
}

const myReduce = function(collection, callback, acc=0){
    const arr = Object.values(collection)
    for (const element of arr){
        acc = callback(acc, element, arr)
     }
    return acc
}

const myFind = function(collection, predicate){
    const arr = Object.values(collection)
    for (const element of arr){
         if (predicate(element) === true) return element
    }  
}

const myFilter = function (collection, predicate){
    const arr = Object.values(collection)
    const matchArr = []
    for (const element of arr){
        if (predicate(element) === true) matchArr.push(element)
    }
    return matchArr
}

const mySize = function (collection){
    const arr = Object.values(collection)
    return arr.length
}

const myFirst = function(array, n=0){
    if (n > 0){
        return array.slice(0, n)
        }
    else {
    return array[n]
    }
}

const myLast = function (array, n=0){
    if (n > 0){
        return array.slice(array.length-n)
    }
    else{
        return array[array.length-1]
    }
}

const myKeys = function (object){
    return Object.keys(object)
}

const myValues = function(object){
    return Object.values(object)
}