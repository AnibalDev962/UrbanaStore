
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

////WEBSITE UNDER CONSTRUCTION MODAL/// disbled code, it used to give a pop up advisinf website is not fully built yet

//pending section buttons//
/* const pendingSectionButtons=document.querySelectorAll('.pending-section');
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
 */

//// function move to products//

//step1//
const buttons=document.querySelectorAll('.move-to-products');
const redirectionElements=document.querySelectorAll('.redirection-element');

buttons.forEach(function(e){
  let id='';
  e.addEventListener('click',function(c){
    id=e.querySelector('.products__container__card__img-container').id;
    //id is obtained//
    //sending id to local storage//
    sendIdToLocalStorage(id);
    //moving to next page//
    window.location.href='./products.html';
    
  })
  
});

const sendIdToLocalStorage=function(argument){
  localStorage.setItem('id', JSON.stringify(argument));
};

///same as above but these are the all other elements//

console.log(redirectionElements);

redirectionElements.forEach(function(e){
  
  e.addEventListener('click',function(c){
    ///listem to click/
    //read id//
    let idForProducts=c.target.id;
    console.log(idForProducts);
    console.log('function callled');

    //redirects using id//
    sendIdToLocalStorage(idForProducts);

    window.location.href='./products.html';
  })
})