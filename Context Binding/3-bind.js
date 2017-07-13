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

var onSayHello = sayHello.bind(context, firstName, lastName); // bind is used to set the context but execute function at some later time
onSayHello();