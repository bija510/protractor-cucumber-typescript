import { Given, When, Then } from "cucumber";
import { calculator } from "../pageObjects/calculator";
import { browser } from "protractor";

/*
 * To run from Terminal 1) open seep def file 2) type tsc 3) npm run cucumbertest
 */


let calc = new calculator(); //creating object   
        Given('I will navigate to Calc site', async()=> {
            
            await browser.get('http://juliemr.github.io/protractor-demo/');
          
            });
         
         When('I add two Number {string} and {string}', async(string, string2)=>
         {          
                await calc.firstEditBox.sendKeys(string);
                await calc.secondEditBox.sendKeys(string2);        
                  
            });
        
        Then('the output displayed should be {string}', async(string)=> {       
                await calc.go.click();
                await calc.getResult.getText().then(function (text) {
                    console.log(text);
               })
            });

 