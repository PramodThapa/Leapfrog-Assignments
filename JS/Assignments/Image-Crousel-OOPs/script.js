class ImageCrousel{
    /**
     * 
     * @param {*} crouselWrapper || name of crousel container
     * @param {*} transitionTime  || animation time of transition in slider 
     * @param {*} holdTime || hold time after animation of slider
     */
    constructor(crouselWrapper, transitionTime, holdTime){
        
        this.wrapper = document.querySelector(`.${crouselWrapper}`)
        this.imageWrapper = this.wrapper.children[0]
        this.images = this.imageWrapper.children
        this.indicatorWrapper =  document.createElement('div')
        this.imageWidth = this.images[0].clientWidth
        this.imageHeight = this.images[0].clientHeight
        this.noOfImage = this.images.length
        this.pixelChangePerInterval = 10

        //config crousel wrapper style
        this.wrapper.style.position = 'relative'
        this.wrapper.style.border = '1px solid #000'
        this.wrapper.style.width = `${this.imageWidth}px`
        this.wrapper.style.height = `${this.imageHeight}px`
        this.wrapper.style.margin = 'auto'
        this.wrapper.style.overflow = 'hidden'

        // config image wrapper style
        this.imageWrapper.style.position = 'absolute'
        this.imageWrapper.style.top = '0px'
        this.imageWrapper.style.width = `${this.imageWrapper.children.length * this.imageWidth}`

        //config transition and hold time
        this.transitionTime = transitionTime
        this.holdTime = holdTime

        //config index of images
        this.finalImageIndex = this.noOfImage - 1
        this.initialImageIndex = 0
        this.currentImageIndex = 0

        this.displayImage()
        this.createLeftSlider()
        this.createRightSlider()
        this.createIndicator()
        this.indicatorController()
        this.autoSlider()

        // event handler (mouse in and out of the crousel container)
        this.wrapper.onmouseover = this.stopSlider.bind(this);
        this.wrapper.onmouseout = this.resumeSlider.bind(this);
        
    }

    displayImage(){
        for (let i = 0; i < this.noOfImage ; i++){
            const image = this.imageWrapper.children [i]
            image.style.left = `${i * this.imageWidth}px`
        }
    }

    createRightSlider(){
        let btnRight = document.createElement('button')
        btnRight.innerHTML = '&#8594;'
        btnRight.style.position = 'absolute'
        btnRight.style.height = '40px'
        btnRight.style.width = '30px'
        btnRight.style.top = '45%'
        btnRight.style.right = '0px'
        btnRight.style.fontWeight = '500px'
        btnRight.style.fontSize = '25px'
        btnRight.addEventListener('click', this.slideRight.bind(this))
        this.wrapper.appendChild(btnRight)
    }

    createLeftSlider(){
        let btnLeft = document.createElement('button')
        btnLeft.style.height = '40px'
        btnLeft.style.width = '30px'
        btnLeft.style.top = '45%'
        btnLeft.innerHTML = '&#8592;'
        btnLeft.style.fontWeight = '500px'
        btnLeft.style.fontSize = '25px'
        btnLeft.style.position = 'absolute'
        btnLeft.addEventListener('click', this.slideLeft.bind(this))
        this.wrapper.appendChild(btnLeft)
    }

    createIndicator(){
        this.indicatorWrapper.style.position = 'absolute'
        this.indicatorWrapper.style.top = '450px'
        this.indicatorWrapper.style.left = '40%'
        this.wrapper.appendChild(this.indicatorWrapper)

        for (let i = 0; i < this.noOfImage; i++){
            let indicator =  document.createElement('div')
            indicator.style.display = 'inline-block'
            indicator.setAttribute('indicator-id',`${i}`)
            indicator.style.height = '20px'
            indicator.style.width = '20px'
            indicator.style.borderRadius = '50%'
            indicator.style.marginLeft = '5px'
            indicator.style.border = '2px solid #ffffff'
            this.indicatorWrapper.appendChild(indicator)
            indicator.onclick = ()=>{
                this.currentImageIndex = i
                this.currentIndicatorId = indicator.getAttribute('indicator-id')
                this.imageWrapper.style.left = `-${this.currentImageIndex * this.imageWidth}px`
            }
        }

    }

    indicatorController(){
        let inidicatorController = setInterval(() => {
            this.indicatorWrapper.childNodes.forEach(element => {
               if(this.currentImageIndex == element.getAttribute('indicator-id')){
                   element.style.backgroundColor = '#ffffff'
               }else{
                    element.style.backgroundColor = null 
               }
            }); 
        }, 5);
    }

    slideRight(){
        let pixelIncrement = 0
        this.currentImageIndex = ((this.currentImageIndex < 4) ? this.currentImageIndex += 1 : this.currentImageIndex = 0)
        let interval = setInterval(() => {
            pixelIncrement = pixelIncrement + this.pixelChangePerInterval
            if(pixelIncrement <= 500 ){
                if(this.currentImageIndex != 0 ){
                    this.imageWrapper.style.left = `${-(this.currentImageIndex - 1 ) * this.imageWidth - pixelIncrement }px`
                }else{
                    this.imageWrapper.style.left = '0px'                   
                }
            }else{
                clearInterval(interval)
            } 
        },this.transitionTime / (this.imageWidth / this.pixelChangePerInterval ))
    }

    slideLeft(){
        let pixelIncrement = 0
        this.currentImageIndex = ((!this.currentImageIndex <= 0) ? this.currentImageIndex -= 1 : this.currentImageIndex = this.finalImageIndex)
        let interval = setInterval(() => {
            pixelIncrement -= this.pixelChangePerInterval
            if (pixelIncrement >= - 500){
            if(this.currentImageIndex != this.finalImageIndex){
                this.imageWrapper.style.left = `-${(this.currentImageIndex  + 1  ) * this.imageWidth + pixelIncrement }px` 
            }else{
                this.imageWrapper.style.left = `-${this.finalImageIndex * this.imageWidth}px`
            }
            }
            else{
                clearInterval(interval)
            }
        },this.transitionTime / (this.imageWidth / this.pixelChangePerInterval ))
    }

    autoSlider(){
        this.slider = setInterval(() => {
            this.slideRight.bind(this)()
        }, this.transitionTime + this.holdTime);
    }

    stopSlider(){
       clearInterval(this.slider)
    }

    resumeSlider(){
        this.autoSlider()
    }
}

// creating instances of crousel class
let crouselInstance = new ImageCrousel('carousel-container', 500, 1500)
let crouselInstanceTwo = new ImageCrousel ('carousel-container-second', 1000, 2000)
