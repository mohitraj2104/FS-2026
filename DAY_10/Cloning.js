/*let obj={
    name:"student",
    age:21,
    salary:"1.5L"
}
//shallow clonning
let copyObj=obj;
copyObj.name="karan";
console.log(obj)
*/
const lodash = require('lodash')
let obj1={
    name:"iphone",
    price:10000,
    intro:function(){
        console.log(`${this.name}=${this.price}`)
    },
    detail:{
        model:"14",
        store:"bhubaneswar"
    }
}
/*
//spread operator or destructuring
let copyObj1={...obj1};
copyObj1.name="samsung",
console.log(obj1)
console.log(copyObj1)
copyObj1.intro()
copyObj1.detail.model=15;
console.log(obj1)
*/
/*
//object assign
let copyObj1=Object.assign(obj1)
copyObj1.name="samsung"
console.log(obj1)
*/

//stringify -> In JavaScript, it usually refers to:

//JSON.stringify(),It converts a JavaScript object into a string.
/*
let copyObj=JSON.parse(JSON.stringify(obj1));
console.log(obj1),
copyObj1.name="samsung"
copyObj1.detail.model=15
console.log(obj1)
console.log(copyObj1)
*/

// perfect
let copyObj1= lodash.cloneDeep(obj1);
copyObj1.name="samsung"
copyObj1.detail.model = 15
console.log(copyObj1)
console.log(obj1)
copyObj1.intro()