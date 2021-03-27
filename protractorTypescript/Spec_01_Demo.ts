import {browser} from "protractor";
import {element ,by} from "protractor";

describe('TS_chainLocator', ()=>{
	//function() ---> ()=> now this is treated as function without name work in [es6] and [typeScript2]
	//to use [await] we need to name function as [async]
	it('chainLocator',async()=>{
		
		await browser.manage().window().maximize();
		await browser.get("http://juliemr.github.io/protractor-demo/");
		
		await element(by.model("first")).sendKeys("10");
		await element(by.model("operator")).element(by.css("option:nth-child(4)")).click();
		await element(by.model("second")).sendKeys("5");
		await element(by.id("gobutton")).click();
		

		//parent.child 
		element(by.repeater("result in memory")).element(by.css("td:nth-child(3)")).getText().then(function(text) //either this way or use await infront
				{
				console.log(text);
				})

//		element(by.repeater("result in memory")).element(by.css("td:nth-child(3)")).getText().then(function(text2)
//						{
//						console.log(text2);
//						})

	 
	})
	
	
})

