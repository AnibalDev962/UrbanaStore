
let dateForFooter=new Date();

let yearForFooter=dateForFooter.getFullYear();
//entering the year to the footer//

let spanForYearInTheHtml=document.querySelector('.year-span');

export const insertYearForCopyRightText=function(){
    spanForYearInTheHtml.textContent=yearForFooter;
}
