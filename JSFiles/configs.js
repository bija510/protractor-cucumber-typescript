"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*******************************************************************************************
1. To run here in VS:- terminal:- tsc --> protractor JSFiles/configs.js
2. We configure in package.json like..test, pretest, protractor and webdriver-manager update so
3. we just write this in terminal ====> npm run test
*********************************************************************************************/
exports.config =
    {
        directconnect: true,
        capabilities: {
            browserName: 'chrome',
        },
        specs: ['01chain_locator.js'],
        jasmineNodeOpts: {
            showColors: true,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlncy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvbmZpZ3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQTs7Ozs4RkFJOEY7QUFDOUYsT0FBTyxDQUFDLE1BQU07SUFDZDtRQUNJLGFBQWEsRUFBRSxJQUFJO1FBQ25CLFlBQVksRUFDUjtZQUNBLFdBQVcsRUFBRSxRQUFRO1NBQ3BCO1FBRUQsS0FBSyxFQUFFLENBQUMsb0JBQW9CLENBQUM7UUFJN0IsZUFBZSxFQUNmO1lBQ0ksVUFBVSxFQUFDLElBQUk7U0FDbEI7S0FDUixDQUFDO0FBRUE7Ozs7Ozs7OztHQVNHIn0=