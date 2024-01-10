import * as productData from '../products/productsDataBase';
import * as productViw from '../products/productsView';

//incialization//

let idReceived=JSON.parse(localStorage.getItem('id'));

const localStorageClear=function(){
    localStorage.removeItem('id');
}
localStorageClear();

