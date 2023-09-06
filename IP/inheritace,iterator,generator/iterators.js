//Iterators:
const names = ['altaf', 'sarah', 'aman', 'prasad'];

const obj = names[Symbol.iterator]();


while(true){
    let curr = obj.next();
    if(curr.done==false){
        console.log(curr);
    }
    else{
        console.log(curr, "Finished");
        break;
    }
}
// console.log(obj.next());

// console.log(obj.next());

// console.log(obj.next());

// console.log(obj.next());

// console.log(obj.next());

// console.log(obj.next());
