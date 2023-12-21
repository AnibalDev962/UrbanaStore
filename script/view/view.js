///SLIDER COMPONENT//
/* 
export const sliderView={
    //selecting dom elements//
    slides:document.querySelectorAll('.slider__slide'),
    buttonNext:document.querySelector('.slider__btn--right'),
    buttonPrev:document.querySelector('.slider__btn--left'),
    dotsContainer:document.querySelector('.dots'),

    //slider Functions//

    createDotsFunction: function(){
        console.log('executed')
        this.slides.forEach(function(s,i){
          console.log(this.dotsContainer);
            
        })
    },

    

}; */

const slides=document.querySelectorAll('.slider__slide');
const dotsContainer=document.querySelector('.dots');

export const  createDotsFunction = function(){
    console.log('executed')
    slides.forEach(function(s,i){
        dotsContainer.insertAdjacentHTML('beforeend',`<button class="dot-${i} dots__dot"></button>`);
      
    })
};

