class classDemo{
    /**********************************************************************************
    Lecture:-73
    properties, methods, constructor
    any declare cariable inside called are = properties
    in typeScript we need Return type but in JS no return type
    properties can be accessable to anywhere inside the class
    variable and properties are little different
    We cannot straight write this in javascript so we write in simple way in TS and convert
    ***************************************************************************************/
    username:string; //no need to write let inside the class
    password:string;
    ssn:number;
 // same like getter and setter method = encapsulation
    getUsername(){
        return this.username;
    }

    setUsername(){
        this.username="Hello";
    }

    getSsn(){
        return this.ssn;
    }

    setSsn(){
        this.ssn=12345;
    }

}

let cd = new classDemo(); //creating object
cd.setUsername();
console.log(cd.getUsername());

cd.setSsn();
console.log(cd.getSsn());

