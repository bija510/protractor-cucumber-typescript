"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.classCons = void 0;
class classCons {
    constructor(ssn) {
        this.ssn = ssn;
    }
    getUsername() {
        return this.username;
    }
    setUsername(username) {
        this.username = username;
    }
    getSsn() {
        return this.ssn;
    }
    setSsn(ssn) {
        this.ssn = 12345;
    }
}
exports.classCons = classCons;
let cc = new classCons(123); //creating object
console.log(cc.getSsn());
cc.setUsername("bijaya");
console.log(cc.getUsername());
//tsc 03Constructor.ts
//node 03Constructor.js
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMDNDb25zdHJ1Y3Rvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3R5cGUtc2NyaXB0LWZ1bGwtY291cnNlLzAzQ29uc3RydWN0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsTUFBYSxTQUFTO0lBUWxCLFlBQVksR0FBVTtRQUNsQixJQUFJLENBQUMsR0FBRyxHQUFDLEdBQUcsQ0FBQztJQUNqQixDQUFDO0lBRUQsV0FBVztRQUNQLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN6QixDQUFDO0lBRUQsV0FBVyxDQUFDLFFBQWU7UUFDdkIsSUFBSSxDQUFDLFFBQVEsR0FBQyxRQUFRLENBQUM7SUFDM0IsQ0FBQztJQUVELE1BQU07UUFDRixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDcEIsQ0FBQztJQUVELE1BQU0sQ0FBQyxHQUFVO1FBQ2IsSUFBSSxDQUFDLEdBQUcsR0FBQyxLQUFLLENBQUM7SUFDbkIsQ0FBQztDQUVKO0FBNUJELDhCQTRCQztBQUVELElBQUksRUFBRSxHQUFHLElBQUksU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsaUJBQWlCO0FBRTlDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7QUFDekIsRUFBRSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO0FBQzlCLHNCQUFzQjtBQUN0Qix1QkFBdUIifQ==