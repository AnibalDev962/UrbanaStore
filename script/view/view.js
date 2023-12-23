///SLIDER COMPONENT//

export const sliderView={
    //selecting dom elements//
    slides:document.querySelectorAll('.slider__slide'),
    buttonNext:document.querySelector('.slider__btn--right'),
    buttonPrev:document.querySelector('.slider__btn--left'),
    dotsContainer:document.querySelector('.dots'),
     
    //slider view variables///

    pos:0,
    /* slidesAmount *///this gets defined by the function//
    sliderLenght:this.slides.lenght,


    //slider Functions//

    createDotsFunction: function(){
        const sliders=this.slides;
        const dotContainer=this.dotsContainer;
        console.log('executed')
        sliders.forEach(function(s,i){
            dotContainer.insertAdjacentHTML('beforeend',`<button class="dot-${i} dots__dot"></button>`);
            
        })
    },



}; 

