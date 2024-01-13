import * as productData from '../products/productsDataBase';
import * as productView from '../products/productsView';

//incialization//

let idReceived=JSON.parse(localStorage.getItem('id'));


!idReceived?productView.optionSelector(0):productView.optionSelector(idReceived);


const localStorageClear=function(){
    localStorage.removeItem('id');
}
localStorageClear();






