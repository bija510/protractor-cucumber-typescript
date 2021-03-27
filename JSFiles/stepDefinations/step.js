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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const CalculatorPage_1 = require("../pageObjects/CalculatorPage");
const protractor_1 = require("protractor");
const chai_1 = __importDefault(require("chai"));
const AngularHomePage_1 = require("../pageObjects/AngularHomePage");
var expect = chai_1.default.expect;
let calc = new CalculatorPage_1.CalculatorPage();
let ah = new AngularHomePage_1.AngularHomePage();
/*
 * To run from Terminal 1) open step def file 2) type tsc 3) npm run cucumbertest
 */
cucumber_1.Given('I will navigate to Calc Site', () => __awaiter(void 0, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    yield protractor_1.browser.get('http://juliemr.github.io/protractor-demo/');
}));
cucumber_1.Given('I will navigate to {string} page', (string) => __awaiter(void 0, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    if (string == "calc") {
        yield protractor_1.browser.get('http://juliemr.github.io/protractor-demo/');
    }
    else if (string == "AngularJs") {
        yield protractor_1.browser.get("https://angularjs.org/");
    }
}));
cucumber_1.When('I clicked on header link', () => __awaiter(void 0, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    yield ah.angularLink.click();
}));
cucumber_1.When('you will navigate to angular page', () => __awaiter(void 0, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    console.log("navigated to new page");
}));
cucumber_1.Then('you will enter {string} in search box', (string) => __awaiter(void 0, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    yield protractor_1.browser.sleep(3000);
    yield ah.search.sendKeys(string);
}));
cucumber_1.When('I add two numbers {string} and {string}', (string, string2) => __awaiter(void 0, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    yield calc.firstEditBox.sendKeys(string);
    yield calc.secondEditBox.sendKeys(string2);
}));
cucumber_1.Then('the output displayed should be {string}', (string) => __awaiter(void 0, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    yield calc.go.click();
    yield calc.getResult.getText().then(function (text) {
        expect(text).to.equal(string);
    });
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3N0ZXBEZWZpbmF0aW9ucy9zdGVwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUNBQTZDO0FBQzdDLGtFQUErRDtBQUMvRCwyQ0FBcUM7QUFDckMsZ0RBQXdCO0FBQ3hCLG9FQUFpRTtBQUNqRSxJQUFJLE1BQU0sR0FBRyxjQUFJLENBQUMsTUFBTSxDQUFDO0FBQ3pCLElBQUksSUFBSSxHQUFHLElBQUksK0JBQWMsRUFBRSxDQUFDO0FBQ2hDLElBQUksRUFBRSxHQUFHLElBQUksaUNBQWUsRUFBRSxDQUFDO0FBQy9COztHQUVHO0FBR0gsZ0JBQUssQ0FBQyw4QkFBOEIsRUFBRSxHQUFTLEVBQUU7SUFDN0Msb0VBQW9FO0lBQ3BFLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsMkNBQTJDLENBQUMsQ0FBQztBQUVuRSxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBQ0gsZ0JBQUssQ0FBQyxrQ0FBa0MsRUFBRSxDQUFPLE1BQU0sRUFBRSxFQUFFO0lBQ3ZELG9FQUFvRTtJQUNwRSxJQUFJLE1BQU0sSUFBSSxNQUFNLEVBQUU7UUFDbEIsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQywyQ0FBMkMsQ0FBQyxDQUFDO0tBQ2xFO1NBQ0ksSUFBSSxNQUFNLElBQUksV0FBVyxFQUFFO1FBQzVCLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQztLQUMvQztBQUVMLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsMEJBQTBCLEVBQUUsR0FBUyxFQUFFO0lBQ3hDLG9FQUFvRTtJQUVwRSxNQUFNLEVBQUUsQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDakMsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUNILGVBQUksQ0FBQyxtQ0FBbUMsRUFBRSxHQUFTLEVBQUU7SUFDakQsb0VBQW9FO0lBQ3BFLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQztBQUN6QyxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBQ0gsZUFBSSxDQUFDLHVDQUF1QyxFQUFFLENBQU8sTUFBTSxFQUFFLEVBQUU7SUFDM0Qsb0VBQW9FO0lBQ3BFLE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsTUFBTSxFQUFFLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUNyQyxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLHlDQUF5QyxFQUFFLENBQU8sTUFBTSxFQUFFLE9BQU8sRUFBRSxFQUFFO0lBQ3RFLG9FQUFvRTtJQUVwRSxNQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3pDLE1BQU0sSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDL0MsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUdILGVBQUksQ0FBQyx5Q0FBeUMsRUFBRSxDQUFPLE1BQU0sRUFBRSxFQUFFO0lBQzdELG9FQUFvRTtJQUNwRSxNQUFNLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDdEIsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUk7UUFFOUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbEMsQ0FBQyxDQUFDLENBQUE7QUFDTixDQUFDLENBQUEsQ0FBQyxDQUFDIn0=