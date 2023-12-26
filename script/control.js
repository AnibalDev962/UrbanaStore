import * as sliderData from './view/sliderView.js';
import * as stateData from '../script/state.js'

//dependencies/

import 'core-js/stable';
import 'regenerator-runtime/runtime.js'; ///these two are to support old browsers

//Controlling slider component///

//step1 creating dots//
sliderData.createDotsFunction();
//step2 initial delay/
sliderData.delayerFunction();
//step 3/ activating initial dot
sliderData.activeDot(0);


