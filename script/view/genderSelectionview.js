let hitBoxForElements=document.querySelectorAll('.gender-selection__hit-box');
//els read//
const imagesToApplyEffectTo=document.querySelectorAll('.gender-selection__img');


const activatingImage=function(imgIndex, action){
    let imgToAddStyle='';
    let imageELs=imagesToApplyEffectTo;
    imageELs.forEach(function(e,i){
        e.classList.contains(`img-${imgIndex}`)?imgToAddStyle=e:'';
    });
       if(action==='activate'){ 
        imgToAddStyle.classList.add('hovering');
       }else if(action==='remove'){
        imgToAddStyle.classList.remove('hovering');
       }
    
};

export const hoveringFunctionality=function(){
    hitBoxForElements.forEach(function(e,i){
       
        e.addEventListener('mouseover',function(){
            activatingImage(i,'activate'); 
            console.log('mouse in'); 
        }); 
        e.addEventListener('mouseout',function(){
            activatingImage(i,'remove'); 
            console.log('mouse out'); 
        })  

    })
   
}