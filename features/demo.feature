Feature: I am going to validate calculator App

Scenario: Calculate add finctionality testing

Given I will navigate to Calc site
When I add two Number "3" and "5"
Then the output displayed should be "8"

Scenario: Calculate add finctionality testing

Given I will navigate to Calc site
When I add two Number "2" and "7"
Then the output displayed should be "9"

# to comment CTRL + / work here also
#To run from Terminal 1) open seep def file 2) type tsc 3) npm run cucumbertest


#Scenario: Calculate add functionality testing
#Given I will navigate to Angular Js page
#When I click on the header link
#And you will navigate to angular page
#Then you will enter "hello" in the search box

