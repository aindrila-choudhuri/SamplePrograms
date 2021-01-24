class Animal {
    poop() {
        console.log("poops");
    }
}

class Dog extends Animal{
    bark() {
        console.log("barks");
    }
}

class Cat extends Animal{
    meow() {
        console.log("meows");
    }
}

class Driver {
    drive(){
        console.log("drives"); 
    }
}

class Cleaner extends Driver{
    clean() {
        console.log("cleans");
    }
}

class Murderer extends Driver{
    kill(){
        console.log("kills"); 
    }
}

function barker() {
    console.log("barks");
}

function driver() {
    console.log("drives");
}