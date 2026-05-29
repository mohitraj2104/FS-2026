let user= "Mohit"
// accesing Character

console.log(user.charAt(0));

let subname= user.slice(0,3);
console.log(subname) 

let subname1= user.slice(-3,-1);
console.log(subname1) 

let str = user.toLowerCase();
console.log(str)

let str1 = user.toUpperCase();
console.log(str1)

let str2 = user.substring(0,4)// Negative index is not supported.
console.log(str2)

console.log(user.endsWith("iti")) // it teels that particularstring is containing a substring at the end or not
console.log(user.startsWith("Moh"))

console.log(user.includes("o")) // checks substring

console.log(user.indexOf("h"))
