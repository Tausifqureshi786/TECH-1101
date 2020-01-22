// console.log("Hello");
// // alert("Yo");

// // how to use variables 

var a= 45;

console.log(a);

// // Manipulating DOM with Javascript

// /*
// It means that changing html with javascript 
// */

var a = prompt("What is your Name");

var place = prompt("Where do you live");

document.getElementById("sometxt").innerHTML =  a ;

document.getElementById("place").innerHTML = place;


// Playing with numbers

var num1 = 40; num2= 20 ;

// adding/subtracting/ dividing and multiplying to the Number

num1 += 10 ;
console.log(num1);

num1 -=42
console.log(num1);

num1 /= 4;
console.log(num1);

num2 % 10;
 console.log(num2);

//  FUNCTIONS:

/* THERE ARE TWO STEPS FOR USING FUNCTIONS 
    1.CREATE
    2.CALL
*/

// 1.CREATE 

function fun(){
        console.log("Hi this is Tausif Qureshi's PC Whats your name?");

}

// 2.CALL

            fun();


    /* Making a function that asks your name and says
        hello followed by your name.

        example
         name : kai
         REsult : Hello Kai
         
//     */ 

/*   NOTES:
     This function is dependent on the input information. Thus in order to write
     clean code you should declare the input outside the function as it is an 
     example of writing a clean code.
 */


// function greet(){
//     var name = prompt("Hi What is your name? ");
//     var result = "Hello" + " " + name; // String Concatenation
//     console.log(result);

// }
 
// greet();

// instead write the above code as this.

    

    function greet( Yourname ){
      var result = "Hello " + Yourname;
      console.log(result);

        }

        var name = prompt("Hi What is your name? ");
   
// function call

            greet(name);

// Adding two no with the help of functions
function add(num1, num2){
   var  result = num1 + num2;
    console.log(result);

} 


            add(14,35);