import * as sliderData from './view/sliderView.js';
import * as stateData from '../script/state.js'
import * as genderSelectionData from '../script/view/genderSelectionview.js'
import * as mainPageData from './view/mainPageAndNavigation.js';

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

//contorling gender selection section///

genderSelectionData.hoveringFunctionality(); 

//controling page copyright updating year//
mainPageData.insertYearForCopyRightText();

///


