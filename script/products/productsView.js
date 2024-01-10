//product selector functionality//
const productDropDownLinks=document.querySelectorAll('.drop-down-link');


//MOBILE MENUE FUNCTIONALITY//
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
});
//// Products filter functionality//

const productOptions=document.querySelectorAll('.products-section__container__selection__list-container__list-el');
const linksThatHaveSubLinks=document.querySelectorAll('.drop-down-link');
const allLinksWithNoSubMenues=document.querySelectorAll('.products-section__container__selection__list-container__list-el');
const allIconsForFilteringProducts=document.querySelectorAll('.products-selector-icon');


linksThatHaveSubLinks.forEach(function(el) { 
  el.addEventListener('click',function(e){

    if(e.target.classList.contains('arrow-icon-products') & !e.target.parentNode.classList.contains('selected-sub-link')){
      //arrows are targetted//
      e.target.classList.add('openned');
      const identificatorToRemoveHidden=e.target.parentNode.id;
      //id adquired//
      const elToShow=document.querySelector(`.${identificatorToRemoveHidden}-sub-menue`);
      elToShow.classList.remove('sub-menue-hidden');
      e.target.parentNode.classList.add('selected-sub-link');

      
    }else if(e.target.classList.contains('arrow-icon-products') & e.target.parentNode.classList.contains('selected-sub-link')){
      e.target.classList.remove('openned');
      const identifierToRemove=e.target.parentNode.id;
      console.log(identifierToRemove);
      const elToRemove=document.querySelector(`.${identifierToRemove}-sub-menue`);
      elToRemove.classList.add('sub-menue-hidden');
      e.target.parentNode.classList.remove('selected-sub-link');
      
    };

  });

})

allLinksWithNoSubMenues.forEach(function(el,i){
 //i is the index//
 //el//is th click
 
  
  el.addEventListener('click',function(e){
    //getting the id//

    
    //changin the icon style//
    if(e.target.classList.contains('products-selector-icon') || e.target.classList.contains('products-section__container__selection__list-container__list-el')){ 
      setIconDefault();
  
    let iconToModify=document.querySelector(`.ellipse-${i}`);
    let idtoCallRender=iconToModify.parentNode.id;
    let currentAtribute=iconToModify.getAttribute('name');
    currentAtribute==='ellipse-outline'? iconToModify.setAttribute('name','disc'): iconToModify.setAttribute('name','ellipse-outline');

    //HERE CALL RENDER with i wich is the index 0 based //
      callRender(idtoCallRender);
    }else{
      return;
    };
    
  })

})


const setIconDefault=function(){
  allIconsForFilteringProducts.forEach(function(e){
    e.setAttribute('name','ellipse-outline');
  })

}

export const callRender=function(products){
  console.log(products);
}

export const optionSelector=function(desiredEl){
  console.log(desiredEl);

}