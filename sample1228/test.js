function Person(name, age) {
    this.name = name;
    this.age = age;
}

let person2 = new Person("john", "22");

Person.prototype.getName = function() {
    console.log(this.name);
}

person2.getName();

function Employee(salary, name, age) {
    this.salary = salary

    Person.call(this, name, age);
}
Employee.prototype = new Person();
Employee.prototype.constructor = Employee;

let emp1 = new Employee(100000, "ram", 67);

console.log(emp1.name);



const obj = {
    a: 10,
    method: () => {
        console.log(this.a);
    }
}

obj.method();




