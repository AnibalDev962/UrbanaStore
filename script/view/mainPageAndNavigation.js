//COPYRIGHT TEXT//
let dateForFooter=new Date();

let yearForFooter=dateForFooter.getFullYear();
//entering the year to the footer//

let spanForYearInTheHtml=document.querySelector('.year-span');

export const insertYearForCopyRightText=function(){
    spanForYearInTheHtml.textContent=yearForFooter;
}
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

//OPENNING//
mobileMenueOpen.addEventListener('click',function(){
 mobileMenue.classList.remove('pollito');
 mobileMenue.classList.add('mobile-menue-visible');
  
})
//CLOSING//
mobileMenueButtonClose.addEventListener('click',function(){
  mobileMenue.classList.remove('mobile-menue-visible');
  mobileMenue.classList.add('pollito');


})

