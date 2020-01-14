/*console.log('Hello World');
//alert( 'Yo!');

var b = "Happy Holidays!";
console.log(b);

document.getElementById('txt').innerHTML=b;

function fun() {
	var name= prompt('What is your name?');
	var grt = "Hello " + name;
	 alert(grt);
	}
 function math(num1, num2) {
 	var n = num2 + num1;
 	console.log(n);
 }
 math (2, 20);

 //while loops

 var num = 5;

 while (num < 6){
 	num += 1;
 	console.log(num);
 }

 //for loop

for (let i = 5; i <= 6; i++) {
	console.log(i);
 }
 
 // string

 let f = 'banaanan';

 console.log(f.length);
 console.log(f.slice(1, 5));
 console.log(f.replace('naanan', 'm'));*/

// array

let F = [' apple ', ' banana ', ' mango ' , ' berry '];

F[0] = 'yam ';
//alert(F);

let animal = new Array();
for (let num= 1; num<= 5; num++){
    animal.push(num)
}
 
console.log(animal);

//Objects

let student = {
    first: "Shan",
    last: "Tom",
    age : 22,
    height: 160,
}
console.log (student.age);
student.last= "Atkin";
console.log(student.last);

// If and Else statements
 
//var age = prompt ("What is your age?");
/*function ages(age){

if( age < 20 ) {
    alert ("Perfect!");
}
else{
   alert ( "Invalid");
}*/
 
 // Switch Statemtn

  switch (0){
     case 0 : 
        text = "weekend"
     break;

     case 6 :
        text = "weekend"
     break;

     default:
        text = "weekday"
 }

 console.log(text);