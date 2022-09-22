const myEach = function(collection, callback){
    const arr = Object.values(collection)
    for (let element of arr){
        callback(element)
    }
    return collection
}

function myMap(collection, callback) {
    const arr = Object.values(collection)
    for (let element of arr){
        arr[element] = callback(element)
    }
}


function myReduce(collection, callback, acc){
    
}