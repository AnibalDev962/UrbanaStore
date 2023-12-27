///SLIDER COMPONENT//

let pos=0;
const slides=document.querySelectorAll('.slider__slide');
const slidesAmout=slides.length;
let delayer=false;

let automateSliding=true;

const buttonNext=document.querySelector('.slider__btn--right');
const buttonPrev=document.querySelector('.slider__btn--left');

const dotsContainer=document.querySelector('.dots');

let dots='';

//step 1 create dots and mutate dots 

export const createDotsFunction=function(){
    slides.forEach(function(s,i){
      dotsContainer.insertAdjacentHTML('beforeend',`<button class="dot-${i} dots__dot"></button>`);
  
    });
    dots=document.querySelectorAll('.dots__dot');

    dots.forEach(function(d,i){

        let dotPreviouslySelected='';
        let newDot='';
        let dotsLenght=slidesAmout-1;
    
        d.addEventListener('click',function(){
          if(delayer===true){
            return;
          }

          clearInterval(sliderInterval);
      
          dotPreviouslySelected=pos;
          newDot=i;
      
          if(dotPreviouslySelected===dotsLenght && newDot===0){
            
            goToSlide(newDot,'left');
            pos=i;
            
           }else if(dotPreviouslySelected===0 && newDot===dotsLenght){
      
            goToSlide(newDot,'right');
            pos=i;
           }else if(dotPreviouslySelected<newDot){
      
            goToSlide(newDot,'right');
            pos=i;
           }else if(dotPreviouslySelected>newDot){
      
            goToSlide(newDot,'left');
            pos=i;
           }
      
        });
       
      });
    
  };

//step2 go to slide function////

export const goToSlide=function(pos,direction){
    
    let itemNumber=pos;
    let newElClass='';
    let elToGoAway='';
    

    slides.forEach(function(s,i){
        s.classList.contains(`slide-${itemNumber}`)? newElClass=i:'';
        s.classList.contains('active') || s.classList.contains('bring-from-left') || s.classList.contains('bring-from-right') ? elToGoAway=i:'';
        s.classList.remove('active');
        s.classList.remove('bring-from-left');
        s.classList.remove('bring-from-right');
        s.classList.remove('move-to-right');
        s.classList.remove('move-to-left');

    });

    
    if(direction==='right'){ 
     document.querySelector(`.slide-${newElClass}`).classList.add('bring-from-right');
     document.querySelector(`.slide-${elToGoAway}`).classList.add('move-to-left');
    }else if(direction==='left'){
     document.querySelector(`.slide-${newElClass}`).classList.add('bring-from-left');
     document.querySelector(`.slide-${elToGoAway}`).classList.add('move-to-right');

  }
  delayer=true;
  delayerFunction();

  activeDot(pos);



};

 export const delayerFunction= async function(){
    setTimeout(function(){
     delayer=false;
   
    },1000);
 }


 buttonNext.addEventListener('click',function(){
    clearInterval(sliderInterval);

    if(delayer===true){
      return;
    }
    clearInterval(sliderInterval);
    let slidesLenght=slidesAmout-1;

    if(pos===slidesLenght){
      pos=0;
      goToSlide(pos,'right');
    }else{
      pos++;
      goToSlide(pos,'right');
    }
  })

  buttonPrev.addEventListener('click',function(){

    if(delayer===true){
      return;
    }
  
    let slidesLenght=slidesAmout-1;
    clearInterval(sliderInterval);
  
    if(pos===0){
      
      pos=slidesLenght;
      goToSlide(pos,'left');

    }else{
        pos--;
        goToSlide(pos,'left');

    };
  });


  sliderInterval=setInterval(function(){

    let slidesLenght=slidesAmout-1;

    if(pos===slidesAmout-1){
        pos=0;
        goToSlide(pos,'right');

    }else{
        pos++;
        goToSlide(pos,'right')
    };

  },4000);


export const activeDot=function(dotNumber){
 /*  active-dot */
 
 let dotEls=dots;
 let dotToActivate=dotNumber;
 dotEls.forEach(function(d,i){
  d.classList.remove('active-dot');
  d.classList.contains(`dot-${dotToActivate}`)? dotToActivate=d:'';

 })
 dotToActivate.classList.add('active-dot');
}

