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
let subLinksActive=false;
const maleSubMenue='';
const femaleSubMenue=`
<li class="products-section__container__selection__list-container__list-el drop-down-link sub-link" id="women-clothes"><ion-icon name="ellipse-outline" class="products-selector-icon"></ion-icon>clothes</li>
<li class="products-section__container__selection__list-container__list-el drop-down-link sub-link" id="women-glasses"><ion-icon name="ellipse-outline" class="products-selector-icon"></ion-icon>glasses</li>
<li class="products-section__container__selection__list-container__list-el drop-down-link sub-link" id="women-jewelry"><ion-icon name="ellipse-outline" class="products-selector-icon"></ion-icon>jewelry</li>
<li class="products-section__container__selection__list-container__list-el drop-down-link sub-link" id="women-shoes"><ion-icon name="ellipse-outline" class="products-selector-icon"></ion-icon>shoes</li>
<li class="products-section__container__selection__list-container__list-el drop-down-link sub-link" id="women-watches"><ion-icon name="ellipse-outline" class="products-selector-icon"></ion-icon>watches</li>`
const kidsSubmenue='';

productOptions.forEach(function(e){
    let dropDownMenueToCLose='';
    let dropDownMenuToOpen='';

    e.addEventListener('click',function(i){
        //erase all previously opened sublinks before//
        
        if(i.target.classList[0]==='arrow-icon-products'){
            dropDownMenuToOpen=i.target.parentNode;
            //parent node is selected at this point/
            
            dropDownMenuToOpen.insertAdjacentHTML('afterend',`${femaleSubMenue}`)
            wrapAllSubMenues();
            subLinksActive=true;

        }
        

    })
})

const wrapAllSubMenues=function(){
    if(subLinksActive===false){
        return;
    }else if(subLinksActive===true){ 
    const subLinksToRemove=document.querySelectorAll('.sub-link');
    subLinksToRemove.remove();
   }
}