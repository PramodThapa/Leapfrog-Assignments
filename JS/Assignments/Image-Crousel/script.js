const imageWidth = 500
let finalImageIndex = 4
let initialImageIndex = 0
let currentImageIndex = 0


const wrapper = document.querySelector('.carousel-container')
wrapper.style.position = 'relative'
wrapper.style.border = '1px solid #000'
wrapper.style.width = '500px'
wrapper.style.height = '500px'
wrapper.style.margin = 'auto'
wrapper.style.overflow = 'hidden'

const images = document.querySelector('.carousel-image-container')
images.style.position = 'absolute'
images.style.top = '0px'
images.style.height = '500px'
images.style.width = `${images.children.length * imageWidth}`

const noOfImage = images.children.length


for (let i = 0; i < noOfImage ; i++){
    const image = images.children [i]
    image.style.left = `${i * imageWidth}px`
}

// CROUSEL BUTTON
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

function slideLeft(){
    let dx = 0
    currentImageIndex = ((!currentImageIndex <= 0) ? currentImageIndex -= 1 : currentImageIndex = finalImageIndex)
    let interval = setInterval(() => {
        dx -= 10
        if (dx >= - 500){
           if(currentImageIndex != finalImageIndex){
               console.log(currentImageIndex)
               images.style.left = `-${(currentImageIndex  + 1  ) * imageWidth + dx }px` 
           }else{
               images.style.left = `-${finalImageIndex * imageWidth}px`
           }
        }
        else{
            clearInterval(interval)
            dx = 0
        }
    }, 10)
 }


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

function slideRight(){
    let dx = 0
    currentImageIndex = ((currentImageIndex < 4) ? currentImageIndex += 1 : currentImageIndex = 0)
    let interval = setInterval(() => {
        dx = dx + 10
        console.log(dx)
        if(dx <= 500 ){
            if(currentImageIndex != 0 ){
                images.style.left = `${-(currentImageIndex - 1 ) * imageWidth - dx }px`
            }else{
                images.style.left = '0px'
            }
        }else{
            clearInterval(interval)
            dx = 0
        } 
    },10)
    
}

// CROUSEL INDICATOR

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
        images.style.left = `-${currentImageIndex * imageWidth}px`
    }
}

let inidicatorController = setInterval(() => {
    indicatorWrapper.childNodes.forEach(element => {
       if(currentImageIndex == element.getAttribute('indicator-id')){
           element.style.backgroundColor = '#ffffff'
       }else{
            element.style.backgroundColor = null 
       }
    }) 
}, 5)

