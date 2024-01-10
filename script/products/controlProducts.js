import * as productData from '../products/productsDataBase';
import * as productView from '../products/productsView';

//incialization//

let idReceived=JSON.parse(localStorage.getItem('id'));
productView.optionSelector(idReceived);

const localStorageClear=function(){
    localStorage.removeItem('id');
}
localStorageClear();



