import * as productData from '../products/productsDataBase';

let idReceived=JSON.parse(localStorage.getItem('id'));

const localStorageClear=function(){
    localStorage.removeItem('id');
}

document.querySelector('.texto22').textContent=idReceived;
console.log(idReceived);
localStorageClear();


