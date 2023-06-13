export class Person {
    firstName!:string;
    lastName!:string;
    emailPerson!:string;

    constructor() {
        this.firstName = "Chavdar";
        this.lastName = "Momchilov";
        this.emailPerson = "chavmom@gmail.com";
    }
    sub(num:number) {
        return num * num;

    }
    ed(num:number, num1:number) {
        return num * num1;
    }
}