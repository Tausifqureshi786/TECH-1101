/* Excercise 1: Find the sum of two numbers using function parameters and return/output
  of the result
*/

    function Addition(num1,num2){
        return num1 + num2;

}

 console.log(Addition(3,5));

//  Excercise 2: Divide 2 numbers using parameters and return value

    function Divide(num3,num4){
        return num3 / num4;

    }

 console.log(Divide(40,10));

// Excercise 3: Subtract 3 numbers using parameters and return the result.

    function Subtract(num3,num4,num5){
        return num3 - num4 - num5;

    }

    console.log(Subtract(60,30,40));

/* Excercise 4: Add two strings using function parameters and 
return one single string in the output.
*/

    function Hello(name1,name2){
        return name1 + " "+ name2;

    }
    
console.log( Hello("Hello","Tausif"));

// Excercise 5: Write an object for the animal

let Animal = {
    name: "Lion",
    height: "3 feet",
    weight: "120 kg"
};

console.log(Animal["height"]);


/* Excercise 6: Create a function that asks for name and returns 
the name as output.
*/

function askname(){
    yourname =  prompt ("What is your name?")
    console.log (yourname);
}

askname();

// Excercise 6:

// let X= 25 ,Y = 25;
/* if you include the above statement in the code then only
 the code gives the hardcoded logial output and if you comment
  out the above statement it shows the ReferenceError: " "is 
  not defined 
 line 
 */
// How old are you and your wife?
// let husbandAge = X;
// prompt('How old are you?' );
// let wifeAge = Y;
// prompt('How old are you?' );
 
// function additionofage(){
   
//      alert ( husbandAge + wifeAge);

// }

// additionofage();

/* ANSWER 7 : 
--> THE LOGICAL ANSWER WHAT I THINK IS THAT THE PROMPT
    COMMAND IS USED TO SHOW THE MESSAGE THAT IS TYPED IN AS IT IS 

--> WHATEVER IS GIVEN AS AN INPUT TO THE PROMPT COMMAND IT IS STORED
    AS A STRING NOT AS A MATHEMATICAL OPERAND OF WHOSE THE RESULT
    WOULD BE A FINAL QUANTITY. 

--> THUS IT ADDS TWO STRINGS AS A RESULT THE OUTPUT IS SHOWN AS
    THE SUM OF TWO STRING INSTEAD OF SUM OF TWO NUMBERS.

*/



