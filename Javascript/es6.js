
function add() {
    var sum = 0;
    for (var i = 0; i < 10; i++) { //var is functional level & let is block leval
        sum += i;
        console.log(i);//can access i
    }
    console.log("i " + i);//can't access i
    return sum;
}

console.log(add());

export default class Person { //parent class,default means no need to use {} for that import like import  Person  from '../es7';
    constructor(name) {
        this.name = name;
    }
}
//import { Person } from '../es7';
//import { walk } from '../es7';

class Student extends Person { // child class inheriting parent class

    constructor(rollno, name) {
        super(name);//initializes the parent class paramater name
        this.rollno = rollno;
    }

    talk() {
        console.log("talk");
    }
    walk() {
        console.log("walk");
    }
}

var std1 = new Student("63", "Hanisha")//creating obj for class
console.log(std1.rollno);
console.log(std1.name);
std1.walk();
std1.talk();

//object
var student = {//student is object
    rollno: 120,//must have , after every line
    name: "Ninisha",
    talk: function () {
        console.log("talk"); //inside every function must have ;
    },
    walk() {
        console.log("walk");//in es6 need not write function keyword like taken above in js
    },
    subjects: ["english", "maths"],
    marks: { //another obj created
        english: 80,
        maths: 90
    }
};

console.log(student.name);// object.object_pproperty to call out
console.log(student.talk());
console.log(student.walk());
console.log(student.subjects[0]);
console.log(student.subjects[1]);
console.log(student.marks.maths);//can access an array element in obj like this or like below
console.log(student.marks["english"]);


var std = function () {
    console.log(this);
};

console.log(std);//will return the func. 
console.log(std());//will return what is inside the func.

//in standalone func. 'this' refers 'window'
var std = student.walk;
console.log(std());

//binding object to function
var std = student.walk.bind(student);
console.log(std());

//arrow functions
function adda(num1, num2) {
    return num1 + num2;
}

var suma = (num1, num2) => { return num1 + num2; }
console.log(suma(20, 30));//50

var square = (num1, num2) => num1 * num2;
console.log(square(20, 30));//60

var cube = () => 20 * 30 * 20;
console.log(cube());//12000

var arr = [10, 23, 35, 40, 50];
var arr1 = [];

function sq() {
    for (var i = 0; i < arr.length; i++) {
        arr1 = arr[i] * arr[i];

        for (var j = 0; j < arr.length; j++) {
            console.log(arr1);//instead of this whole logic we can use the map keyword below
        }
    }
}
sq()

//map(x=>f(x) applies func. on every element, will show [100, 529, 1225, 1600, 2500]
console.log(arr.map(num => num * num));

console.log(arr.filter(num => num > 20));// array >20[23, 35, 40, 50]

console.log(arr.filter(num => num % 2 == 0));//even array [10, 40, 50]
console.log(arr.filter(num => num % 2 != 0));//odd array [23, 35]

//reduce acc= will be 0 val will add up all no's by using acc,will show 158
console.log(arr.reduce((acc, val) => acc + val));

// will show 16100000
console.log(arr.reduce((acc, val) => acc * val));

//deconstructuring - assigning our attributes to our own variable 
const address = {
    street: "7th cross",
    area: "tnagar",
    city: "chennai"
}
/*
const street = address.street;
const area = address.area;     this or the bottom ways
const city = address.city;
*/

/*
const { street, area } = address;
console.log(street);
console.log(area);

const { city } = address;
console.log(city);

const { city: c } = address;
console.log(city);*/

const { street: a, area: b, city: c } = address; //using our own variables this os deconstouring
console.log(a);//7th cross
console.log(b);//tnagar
console.log(c);//chennai      

var arr1 = [10, 20, 30];
var arr2 = [5, 15, 25];

var arr3 = [...arr1, ...arr2];
console.log(arr3);

//array clone
var arr4 = [...arr1];
console.log(arr4);

var arr3 = [3, 6, ...arr1, 50, 55, 60, 65, ...arr2, arr3];
console.log(arr3);

//object clone
var student1 = {
    rollno: 120,
    name: "Ninisha"
};

var student2 = { ...student1 };
console.log(student2);

student2.schoolname = "DPS";
console.log(student2);

var student3 = {
    rollno: 63,
    name: "Hanisha"
};

var std = { ...student2, ...student3, city: "Steel Plant" }
console.log(std);

//modules - import, export
