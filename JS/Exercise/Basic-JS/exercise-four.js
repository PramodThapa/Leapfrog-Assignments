//output [2,4,6,8]
var numbers = [1,2,3,4]

var newTransformedArray = []

function transformFunction(item,transformBy){
    return item*transformBy
}
function transform(array, transformFunction){
    for (let i=0; i<array.length; i++){
        newTransformedArray.push(transformFunction(array[i],2))
    }
}

transform(numbers,transformFunction)

console.log(newTransformedArray)