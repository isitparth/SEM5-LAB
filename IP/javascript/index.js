let i=1;
let counter=0;
while (i < 11) {
    counter+=i;
}

print("sum of 1 to 10 is : ",counter);


//  ------------

const cars = ["BMW", "Volvo", "Ford","Audi"];

let allCars = "All cars are : ";
for (let i = 0; i < cars.length; i++) {
  allCars += cars[i] + " ";
}

console.log(allCars);

// ---------------

const person = {fname:"Altaf", lname:"Alam", age:20}; 

let personDetail = "";
let personKey = "";

for (let x in person) {
  personDetail += person[x] + " ";
  personKey += x + ", ";
}

console.log("details : ",personDetail);
console.log("keys : ",personKey);

// --------------

const marks = [39,40,78,22,78,19];
passcount=failcount =0

for (mark of marks){
    if(mark>35){
        console.log("passed: ",mark);
        passcount++;
    }
    else{
        console.log("failed: ",mark);
        failcount++;
    }
}
console.log(`pass count is: ${passcount} , fail count is : ${failcount}`);


// -------------

let sum = 0;

function myFunction(item) {
    item>=0 ? sum+=item : sum+=0;
}

const numbers = [65, 44, -12, 4, 98, -5, 34];
numbers.forEach(myFunction);
console.log("sum of all positive numbers in array is: ", sum)




// ------------

let greet = "Hello ";
i = 0;
const users = ["Altaf", "Sarah","Kulsum"];

const greetFunction = (a=greet,b) => {
    console.log(a+b);
}

do {
  greetFunction(greet,users[i]);
  i++;
}
while (i < 3);

// -----------

let sumFunc = function (a,b){
    console.log(a+b);
}

sumFunc(4,5)

