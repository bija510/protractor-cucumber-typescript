/*
1. To Run :- terminal==>[tsc TsP_01_basic.ts] ==>[node TsP_01_basic.js]
2. cannot use the var to declare the variable in Typescript
3. var = let
*/

for(let i=0;i<5;i++){
    setTimeout(function() {console.log(i);}, 100 * i);
}

const a = 4;             //this is constant like final cannot be declare again
let c:string = "apple";  //means we can only reassign string type
let b:number = 10;       //means we can only reassign number only

//if we use any then we can reuse that variable for number, double, or string 
let e:any = "ball";
e = "This is i'm reusing again"
e = 10;
e= 3.5;

let flag:boolean =false;
flag = true;

//Array
let numList:Array<number> = [1,2,3,4,5];

let strList:Array<string> =['ant', 'bat', 'cat', 'dog'];

let strList2:Array<any> =['ant', 4, 2.5, 'dog'];
console.log(strList2[0]);
console.log(strList2[1]);
console.log(strList2[2]);

