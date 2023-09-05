// let game = 'Sonic';

// console.log(game);

// function title(){
//   console.log( game);
// }
// title();

// if(ture){
//   console.log(game)
// }

function a(){
  let game = 'Sonic';
  console.log(game)
}
a()

if(true){
  let game = 'Mario'
  console.log(game);
}
// console.log(game);


function hello() {
  var greeting = 'hello';
}

if(true){
  var greeting = 'hello'
}
console.log(greeting)

// var x = 10;
let x = 10
console.log(x);

if(true){
  // var x = 2;
  let x = 2
  console.log(x);
}

console.log(x)

/************************** Tasks ******************************/
// 1
// let firstName = 'John';
// let lastName = 'Smith';
// let age = 25;

// function person(){
//   console.log(`${firstName} ${lastName} is ${age} years old.`);
// }

//2



function person(){
  let firstName = 'John';
  let lastName = 'Smith';
  let age = 25;
  let country = 'England'
  console.log(`${firstName} ${lastName} is ${age} years old and lives in ${country}.`);
}

person()

let firstName = 'James';

//3 - yes variable not found

//4

// GAME NOT DEFINED
let game = 'Sonic'
if(true){
  let game = 'Mario'
  console.log(game)
}
console.log(game)