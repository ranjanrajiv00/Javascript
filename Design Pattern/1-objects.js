var employee = {};
// var employee = Object.create(Object.prototype);
// var employee = new Object(); 

// employee={
//     name:"Rajiv Ranjan"
// };

Object.defineProperty(employee, "name", {
    value: "Rajiv Ranjan",
    writable: true,
    enumerable: false,
    configurable: false
});

Object.defineProperty(employee, "getEmployeeName", {
    value: function(){
        return this.name;
    },
    writable: false,
    enumerable: true,
    configurable: true
});

//  writable: true,
employee.getEmployeeName ="dfdfdfdf";

// enumerable: true
console.log(Object.keys(employee));


Object.defineProperty(employee, "name", {
    enumerable: true
});

console.log(Object.keys(employee));

//console.log(employee.getEmployeeName());