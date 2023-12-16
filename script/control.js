import * as viewData from './view/view.js';
import * as stateData from '../script/state.js'



//SLIDER CONTROL/❤️/
//initial position for sliders//

const goToSlide = function (slide) {
  viewData.slides.forEach(function(s,i){
    
    s.style.transform=`translateX(${100 *(i-slide)}%)`
  })
};


///creating slider selectors///

const createDots = function () {
  viewData.slides.forEach(function (_, i) {
    console.log('executed');
    viewData.dotContainer.insertAdjacentHTML(
      'beforeend',
      `<button class="dots__dot" data-slide="${i}"></button>`
    );
  });
};

const activateDot = function (slide) {
    console.log(slide)
  document
    .querySelectorAll('.dots__dot')
    .forEach(dot => dot.classList.remove('dots__dot--active'));

  document
    .querySelector(`.dots__dot[data-slide="${slide}"]`)
    .classList.add('dots__dot--active');
};


//left and right slider buttons//

  // Next slide
  const nextSlide = function () {
    if (stateData.state.curSlide === stateData.state.maxSlide - 1) {
      stateData.state.curSlide = 0;
    } else {
      stateData.state.curSlide++;
    }

    goToSlide(stateData.state.curSlide);
    activateDot(stateData.state.curSlide);

    stateData.state.autoSlide=false;
    
  };

  const prevSlide = function () {
    if (stateData.state.curSlide === 0) {
      stateData.state.curSlide = stateData.state.maxSlide - 1;
    } else {
      stateData.state.curSlide--;
    }
    goToSlide(stateData.state.curSlide);
    activateDot(stateData.state.curSlide);
  };

///initialization//


const sliderInitalizer=function(){
  goToSlide(0);
  createDots();
};

 sliderInitalizer();

 ///Events///
 viewData.btnRight.addEventListener('click', nextSlide);
 viewData.btnLeft.addEventListener('click', prevSlide);

 viewData.dotContainer.addEventListener('click', function (e) {
  if (e.target.classList.contains('dots__dot')) {
    const { slide } = e.target.dataset;
    goToSlide(slide);
    activateDot(slide);
  }
});


setInterval(function(){
  nextSlide();
},7000)












