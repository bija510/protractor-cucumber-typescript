export class classCons{
    /**********************************************************************************
    We cannot straight write this in javascript so we write in simple way in TS and convert
    ***************************************************************************************/
    username:string; //no need to write let inside the class
    password:string;
    ssn:number;
 
    constructor(ssn:number){
        this.ssn=ssn;
    }

    getUsername(){
        return this.username;
    }

    setUsername(username:string){
        this.username=username;
    }

    getSsn(){
        return this.ssn;
    }

    setSsn(ssn:number){
        this.ssn=12345;
    }

}

let cc = new classCons(123); //creating object

console.log(cc.getSsn());
cc.setUsername("bijaya");
console.log(cc.getUsername());
//tsc 03Constructor.ts
//node 03Constructor.js