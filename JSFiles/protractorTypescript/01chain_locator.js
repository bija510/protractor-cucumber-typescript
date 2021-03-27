"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const protractor_2 = require("protractor");
describe('TS_chainLocator', () => {
    //function() ---> ()=> now this is treated as function without name work in [es6] and [typeScript2]
    //to use [await] we need to name function as [async]
    it('chainLocator', () => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.manage().window().maximize();
        yield protractor_1.browser.get("http://juliemr.github.io/protractor-demo/");
        yield protractor_2.element(protractor_2.by.model("first")).sendKeys("10");
        yield protractor_2.element(protractor_2.by.model("operator")).element(protractor_2.by.css("option:nth-child(4)")).click();
        yield protractor_2.element(protractor_2.by.model("second")).sendKeys("5");
        yield protractor_2.element(protractor_2.by.id("gobutton")).click();
        //parent.child 
        protractor_2.element(protractor_2.by.repeater("result in memory")).element(protractor_2.by.css("td:nth-child(3)")).getText().then(function (text) {
            console.log(text);
        });
        //		element(by.repeater("result in memory")).element(by.css("td:nth-child(3)")).getText().then(function(text2)
        //						{
        //						console.log(text2);
        //						})
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMDFjaGFpbl9sb2NhdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcHJvdHJhY3RvclR5cGVzY3JpcHQvMDFjaGFpbl9sb2NhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsMkNBQW1DO0FBQ25DLDJDQUF1QztBQUV2QyxRQUFRLENBQUMsaUJBQWlCLEVBQUUsR0FBRSxFQUFFO0lBQy9CLG1HQUFtRztJQUNuRyxvREFBb0Q7SUFDcEQsRUFBRSxDQUFDLGNBQWMsRUFBQyxHQUFPLEVBQUU7UUFFMUIsTUFBTSxvQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzNDLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsMkNBQTJDLENBQUMsQ0FBQztRQUUvRCxNQUFNLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoRCxNQUFNLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNuRixNQUFNLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoRCxNQUFNLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBR3pDLGVBQWU7UUFDZixvQkFBTyxDQUFDLGVBQUUsQ0FBQyxRQUFRLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBUyxJQUFJO1lBRXRHLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEIsQ0FBQyxDQUFDLENBQUE7UUFFTiw4R0FBOEc7UUFDOUcsU0FBUztRQUNULDJCQUEyQjtRQUMzQixVQUFVO0lBR1QsQ0FBQyxDQUFBLENBQUMsQ0FBQTtBQUdILENBQUMsQ0FBQyxDQUFBIn0=