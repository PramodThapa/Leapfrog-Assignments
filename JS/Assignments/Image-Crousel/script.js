const wrapper = document.querySelector('.carousel-container')
const imageWrapper = document.querySelector('.carousel-image-container')

const images = imageWrapper.children
const imageWidth = images[0].clientWidth
const imageHeight = images[0].clientHeight
const noOfImage = imageWrapper.children.length

let finalImageIndex = noOfImage -1
let initialImageIndex = 0
let currentImageIndex = 0

//crousel-container style
wrapper.style.position = 'relative'
wrapper.style.width = `${imageWidth}px`
wrapper.style.height = `${imageHeight}px`
wrapper.style.margin = 'auto'
wrapper.style.overflow = 'hidden'

imageWrapper.style.position = 'absolute'
imageWrapper.style.top = '0px'
imageWrapper.style.width = `${imageWrapper.children.length * imageWidth}`

//assign width of imageWrapper
for (let i = 0; i < noOfImage ; i++){
    const image = imageWrapper.children [i]
    image.style.left = `${i * imageWidth}px`
}

// create crousel button left
const btnLeft =  document.createElement('button')
btnLeft.style.height = '40px'
btnLeft.style.width = '30px'
btnLeft.style.top = '45%'
btnLeft.innerHTML = '&#8592;'
btnLeft.style.fontWeight = '500px'
btnLeft.style.fontSize = '25px'
btnLeft.style.position = 'absolute'
btnLeft.addEventListener('click',slideLeft)
wrapper.appendChild(btnLeft)

// slide left (previous image)
function slideLeft(){
    let dx = 0
    currentImageIndex = ((!currentImageIndex <= 0) ? currentImageIndex -= 1 : currentImageIndex = finalImageIndex)
    let interval = setInterval(() => {
        dx -= 10
        if (dx >= - 500){
           if(currentImageIndex != finalImageIndex){
               console.log(currentImageIndex)
               imageWrapper.style.left = `-${(currentImageIndex  + 1  ) * imageWidth + dx }px` 
           }else{
               imageWrapper.style.left = `-${finalImageIndex * imageWidth}px`
           }
        }
        else{
            clearInterval(interval)
            dx = 0
        }
    }, 10)
 }

// create crousel button right
const btnRight = document.createElement('button')
btnRight.innerHTML = '&#8594;'
btnRight.style.position = 'absolute'
btnRight.style.height = '40px'
btnRight.style.width = '30px'
btnRight.style.top = '45%'
btnRight.style.right = '0px'
btnRight.style.fontWeight = '500px'
btnRight.style.fontSize = '25px'
btnRight.addEventListener('click',slideRight)
wrapper.appendChild(btnRight)

// slide right (next image)
function slideRight(){
    let dx = 0
    currentImageIndex = ((currentImageIndex < 4) ? currentImageIndex += 1 : currentImageIndex = 0)
    let interval = setInterval(() => {
        dx = dx + 10
        console.log(dx)
        if(dx <= 500 ){
            if(currentImageIndex != 0 ){
                imageWrapper.style.left = `${-(currentImageIndex - 1 ) * imageWidth - dx }px`
            }else{
                imageWrapper.style.left = '0px'
            }
        }else{
            clearInterval(interval)
            dx = 0
        } 
    },10)
    
}

// create crousel indicator
let indicatorWrapper =  document.createElement('div')
indicatorWrapper.style.position = 'absolute'
indicatorWrapper.style.top = '450px'
indicatorWrapper.style.left = '40%'
wrapper.appendChild(indicatorWrapper)

for (let i = 0; i < noOfImage; i++){
    let indicator =  document.createElement('div')
    indicator.style.display = 'inline-block'
    indicator.setAttribute('indicator-id',`${i}`)
    indicator.style.height = '20px'
    indicator.style.width = '20px'
    indicator.style.borderRadius = '50%'
    indicator.style.marginLeft = '5px'
    indicator.style.border = '2px solid #ffffff'
    indicatorWrapper.appendChild(indicator)
    indicator.onclick = function(){
        currentImageIndex = i
        currentIndicatorId = indicator.getAttribute('indicator-id')
        imageWrapper.style.left = `-${currentImageIndex * imageWidth}px`
    }
}

// indicator color controller
let inidicatorController = setInterval(() => {
    indicatorWrapper.childNodes.forEach(element => {
       if(currentImageIndex == element.getAttribute('indicator-id')){
           element.style.backgroundColor = '#ffffff'
       }else{
            element.style.backgroundColor = null 
       }
    }) 
}, 5)

