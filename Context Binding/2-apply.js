function sayHello(firstName, lastName) {
    console.log(`${this.sayHello()} ${firstName} ${lastName}`);
}

var context = {
    sayHello() {
        return "Hello";
    }
}

const firstName = "Rajiv"; // const is used to create readonly variable
const lastName = "Ranjan";

sayHello.apply(context, [firstName, lastName]);