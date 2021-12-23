var arr =[
    {
        id:'1',
        name:'John'
    },{
        id:'2',
        name:'Mary'
    },
    {
        id:'3',
        name:'Andrew'
    }
]


function sortBy(array, key){
    for (i=0; i < array.length; i++){
        for (j=0; j<array.length-i-1; j++){
            if (array[i][key] > array[j+1][key]){
                temp=array[i]
                array[i]=array[j+1]
                array[j+1]=temp
            }
        }
    }
    return array
}

console.log(sortBy(arr, 'name'))