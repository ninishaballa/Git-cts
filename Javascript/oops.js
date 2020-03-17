
//Encapsulation
function Employee(id, firstname, lastname) {//class employee, so this is parent class
    this.id = id;
    this.firstname = firstname;
    this.lastname = lastname;
    var deptid = 109;

    Object.defineProperties(this, {
        Deptid: {
            get: function () { return deptid; },
            set: function (deptid) { deptid = deptid; }
        }
    })

    this.getFullName = function () { return this.lastname + "." + this.firstname; }
}

var emp1 = new Employee(1001, "Raj", "T");
var emp2 = new Employee(1002, "Hema", "K");

console.log(emp1.firstname);
console.log(emp2.getFullName());

emp1.salary = 100000;
Employee.prototype.getEmail = function () { return this.firstname + "_" + this.id + "@gmail.com"; }

console.log(emp1.salary);
console.log(emp2.salary);
console.log(emp1.getEmail());
console.log(emp2.getEmail());

console.log(emp1.Deptid);

function PermEmployee(id, firstname, lastname, annualSalary) { //class permanent employee,this is child class inheriting from parent class

    Employee.call(this, id, firstname, lastname) //this is used to point to current properties being used

    this.annualSalary = annualSalary;
}
PermEmployee.prototype = Employee.prototype // Extending premEmployee class with Employee class
var pemp1 = new PermEmployee(1004, "Anand", "L", 300000);

console.log(pemp1.annualSalary);
console.log(pemp1.getEmail());
console.log(pemp1.getFullName());


function outerfunction() {
    var outer = 100;
    function innerfunction() { //first inner func. will get executed
        alert(outer);
    }
    return innerfunction;
}
var innerfunc = outerfunction();
innerfunc();

function counter() {
    var counter = 0;
    function increasecounter() {
        return (counter += 1);
    }
    return increasecounter;
}

var counter = new counter();
alert(counter());//1
alert(counter());//2
alert(counter());//3
alert(counter());//4
alert(counter());//5