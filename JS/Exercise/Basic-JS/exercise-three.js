var fruits = [
    {
        id:1,
        name:'Banana',
        color:'Yellow'
    },
    {
        id:2,
        name:'Apple',
        color:'Red'
    },
]

function searchByName(fruitsList, fruitename){
    fruitsList.forEach(value => {
       if (value.name == fruitename){
           console.log(value)
       }
   })
}

searchByName(fruits,'Apple')
