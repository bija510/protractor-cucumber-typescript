import {Config} from "protractor"; 

//npm run test

exports.config = 
{
    directconnect: true,

    framework: 'custom',
    frameworkPath : require.resolve('protractor-cucumber-framework'),
    
    capabilities: { browserName: 'chrome', },
        
    specs: ['../features/demo.feature'],
    cucumberOpts: {
        // require step definitions
        require: [
          './stepDefinations/*.js' // accepts a glob
        ]
      }
 
};
  
