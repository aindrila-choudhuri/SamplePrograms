class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class Employee extends Person {
    constructor(salary, name, age) {
        super(name, age);
        this.salary = salary;
    }
}

let p1 = new Person("shyam", 11);
console.log(p1.name);
console.log(p1.age);

let emp1 = new Employee(10000, "janie", 99);
console.log(emp1.name);
console.log(emp1.age);
console.log(emp1.salary);