// let a = 10;
// let b = 20;

// // Ab sirf hamare pass c empty hai or uske use se he ham value swap karenge
// // Ham jisme value dalte hai vo phele rakhte hai

// c = a  //10
// a = b // 20
// b = c // 10
// console.log(a,b)

// //Value swap without taking Variable
// let a = 10;
// let b = 20;

// a = a + b // 30
// b = a - b // 10
// a = a - b
// console.log(a,b)

// // . / Division
// let a = 10
// let b = 20

// console.log(b/a)

// Modulo

// let a = 3
// let b = 7

// console.log(a % b)

// let a = 10
// a--
// console.log(a)

// let z  = 5
// console.log(++z)

// let a = 10
// let b = 22
// let c = a + b + a++ + b++ + ++a + ++b
// console.log("a" ,a)
// console.log("b" ,b)
// console.log("c" ,c)

// let a = false

// let b = 10++ // We can not use increment operator to constant value

// a++
// console.log(a)

// let a =  10
// console.log(a++)



console.log(Math.trunc(18.98));
console.log(Math.floor(18.98))
console.log(Math.pow(4 ,5))
console.log(Math.sqrt(25))
console.log(Math.abs(-25))
console.log(Math.max(78,68,78))
console.log(Math.min(78,68,78))
console.log(Math.floor(( Math.random() * 9837780306)));



let greeting = "Hi";

function outer() {
  let greeting = "Hello";
  function inner() {
    console.log(greeting);
  }
  inner();
}

outer();
