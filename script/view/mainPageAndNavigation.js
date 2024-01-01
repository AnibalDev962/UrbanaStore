
//COPYRIGHT TEXT//
let dateForFooter=new Date();
let yearForFooter=dateForFooter.getFullYear();
let spanForYearInTheHtml=document.querySelector('.year-span');

export const insertYearForCopyRightText=function(){
    spanForYearInTheHtml.textContent=yearForFooter;
};

//SMOOTH SCROLLING///

document.querySelector('.nav__links').addEventListener('click', function (e) {
    e.preventDefault();
    // Matching strategy
    if (e.target.classList.contains('nav__links__item__link')) {
      const id = e.target.getAttribute('href');
      document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
    }
  });

//MOBILE MENUE//

const mobileMenueButtonClose=document.querySelector('.mobile-menue-modal__close-button');
const mobileMenueOpen=document.querySelector('.mobile-menu');
const mobileMenue=document.querySelector('.mobile-menue-modal');
const mobileInMenueLinks=document.querySelectorAll('.mobile-menue-modal__container__item__link');

const openCloseMobileMenue=function(action){
   if(action==='open'){
    mobileMenue.classList.remove('pollito');
    mobileMenue.classList.add('mobile-menue-visible');
   }else if(action==='close'){
    mobileMenue.classList.remove('mobile-menue-visible');
    mobileMenue.classList.add('pollito');
   }
};

mobileMenueOpen.addEventListener('click',function(){
  openCloseMobileMenue('open');
});
mobileMenueButtonClose.addEventListener('click',function(){
  openCloseMobileMenue('close');
})

mobileInMenueLinks.forEach(function(e){
  e.addEventListener('click',function(){
    openCloseMobileMenue('close');
  })
})

////WEBSITE UNDER CONSTRUCTION MODAL///

//pending section buttons//
const pendingSectionButtons=document.querySelectorAll('.pending-section');
const pendingSectionModal=document.querySelector('.under-construction-modal');
const goBackButtonOnModal=document.querySelector('.under-construction-modal__button');
const openOrCloseUnderConstructionMessage=function(action){
  if(action==='open'){
    pendingSectionModal.classList.add('under-construction-modal-visible');   
   }else if(action==='close'){
    pendingSectionModal.classList.remove('under-construction-modal-visible');   
   }
};

pendingSectionButtons.forEach(function(e){
  e.addEventListener('click',function(){
    openOrCloseUnderConstructionMessage('open');
  })
})

goBackButtonOnModal.addEventListener('click',function(){
  openOrCloseUnderConstructionMessage('close');
})



