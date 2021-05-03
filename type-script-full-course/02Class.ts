/**********************************************************************************
    Lecture:-73
    properties, methods, constructor
    1. any declare cariable inside called are = properties
    2. in typeScript we need Return type but in JS no return type
    3. properties can be accessable to anywhere inside the class
    4. variable and properties are little different
    5. We cannot straight write this in javascript so we write in simple way in TS and convert
    ***************************************************************************************/

class classDemo {

    username: string; //no need to write let inside the class
    password: string;
    ssn: number;

    // same like getter and setter method = encapsulation
    getUsername() {
        return this.username;
    }

    setUsername() {
        this.username = "Hello";
    }

    getSsn() {
        return this.ssn;
    }

    setSsn() {
        this.ssn = 12345;
    }

}

let cd = new classDemo(); //creating object
cd.setUsername();
console.log(cd.getUsername());

cd.setSsn();
console.log(cd.getSsn());

