var box = document.getElementById('box')

box.setAttribute('class','box')

function getElementBoundingPoints(el){
    var rect = el.getBoundingClientRect()
    return rect
}


var points = []

function generatePoints(numberOfPoints){

    boundingPoints =  getElementBoundingPoints(box)
    console.log(boundingPoints)
    xStartPoint = Math.ceil(boundingPoints.x)
    xFinalPoint =  Math.floor(boundingPoints.x +  boundingPoints.width)
    yStartPoint = Math.ceil(boundingPoints.y)
    yFinalPoint =  Math.floor(boundingPoints.y +  boundingPoints.height)
    
    for (i=1; i<=numberOfPoints; i++){
        let pointObj = new Object()
        generatedPointX = Math.floor(Math.random()*(xFinalPoint-xStartPoint)+xStartPoint)
        generatedPointY = Math.floor(Math.random()*(yFinalPoint-yStartPoint)+yStartPoint)
        pointObj.X = generatedPointX
        pointObj.Y= generatedPointY
        points.push(pointObj)
    }
}

generatePoints(5)

function drawPoints(point){
    for(i=0; i<point.length; i++){
        var childElement = document.createElement('div')
        childElement.setAttribute('id',`child-${i}`)
        childElement.setAttribute('class','point')
        childElement.style.top=`${point[i]['Y']}px`
        childElement.style.left =`${point[i]['X']}px`

        // childElement.onclick = function(){
        //     this.parentElement.removeChild(this)
        // }

        // childElement.addEventListener('click',()=>{
        //     this.parentElement.removeChild(this)
        // })

        childElement.addEventListener('click',function(){
            this.parentElement.removeChild(this)
        })


        box.appendChild(childElement)
    }
}

drawPoints(points)



