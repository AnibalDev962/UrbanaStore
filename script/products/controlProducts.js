import * as productData from '../products/productsDataBase';

//incialization//

let idReceived=JSON.parse(localStorage.getItem('id'));

const localStorageClear=function(){
    localStorage.removeItem('id');
}
localStorageClear();

