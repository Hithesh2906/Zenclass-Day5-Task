//3.Write a “person” class to hold all the details.

class Person {
    constructor(firstName, lastName, age, department, email, mobile, city){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.department=department;
        this.email=email;
        this.mobile=mobile;
        this.city = city;
    }
    getPersonDetails(){
        return `Name: ${this.firstName} ${this.lastName}
        age: ${this.age}
        department: ${this.department}
        email: ${this.email}
        mobile: ${this.mobile}
        city: ${this.city}`;
    }
}
let person1 = new Person("Raj", "Kumer",24, "mechanical", "rajkumer24@gmail.com", 7894561230, "Krishnagiri");
let person2 = new Person("Arul","Raj", 27, "mechanical", "arulraj@gmail.com", 7418529630, "Veppanapalli");

console.log(person1.getPersonDetails());
console.log(person2.getPersonDetails());