function printPattern(n){
    for(var j = 0 ; j<n; j++){
        var pattern = ''
        for (var i=n; i>j; i--){
            pattern += '*'
        }
        console.log(pattern)
    }        
}
printPattern(5)



