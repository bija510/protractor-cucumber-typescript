import {Config} from "protractor"; 
/*******************************************************************************************
1. To run here in VS:- terminal:- tsc --> protractor JSFiles/configs.js
2. We configure in package.json like..test, pretest, protractor and webdriver-manager update so
3. we just write this in terminal ====> npm run test
*********************************************************************************************/
exports.config = 
{
    directconnect: true,
    capabilities: 
        {
        browserName: 'chrome',
        },
        
        specs: ['01chain_locator.js'],

        

        jasmineNodeOpts:
        {
            showColors:true,
        }
};
  
  /*********************************************************************************************************************
   * <!---https://www.protractortest.org/#/browser-setup--->
   * To use the other browser than Chrome
   * webdriver-manager updates ==> download all the driver 
   * path==> C:\Users\Bijaya Chhetri\AppData\Roaming\npm\node_modules\protractor\node_modules\webdriver-manager\selenium
   * 'browserName': 'firefox' ==> ['chrome', 'internet explorer']
   * To download Internet Explorer driver ==>webdriver-manager update --ie
   * work best with chrome & firefox But with ====>IE <<Big headache>>
   **********************************************************************************************************************
   */
  
  