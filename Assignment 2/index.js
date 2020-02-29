console.log("Testing");

// defining the Submit button of html in javascript
const Submit = document.querySelector("#Submit");

// defining clear button of html in javascript
const Clear = document.querySelector("#Clear");

// defining input field of html in javasript
const Input = document.querySelector("#Input");


const Container = document.querySelector("#container");

// defining the span of tax owed in js
const Owed = document.querySelector("#OwedT");


// defining the effective rate in js for future editing.
const ERate = document.querySelector("#ERate");

// defining the Retained earning in the js for editing
const REarnings = document.querySelector("#REarn");

// console.log(Container);
let para = document.createElement("p");

function Tax(){
    let taxOwed, rEarnings ; 
    
    if (Input.value === "0" ){
        
        document.body.appendChild(para);
        para.textContent = "Congrats You have to pay ZERO tax!!";
      
     }
     else if (Input.value === "" ){
      
        document.body.appendChild(para);
        para.textContent = "Please first enter a number for calculation!!";
       
     }
    else if (Input.value <= 48535 ){

        taxOwed =  (Input.value - 0) * 0.15 + 0; 
        rEarnings = Input.value - taxOwed;
        Owed.textContent ="$ " + taxOwed.toFixed(2);
        ERate.textContent = 15;
        REarnings.textContent = "$ " + rEarnings.toFixed(2);
         Remove();

    }  else if (Input.value > 48535 && Input.value<= 97069){

       taxOwed = (Input.value - 48535) * 0.205 + 7280;
       rEarnings = Input.value - taxOwed;
       Owed.textContent ="$ " + taxOwed.toFixed(2);
        ERate.textContent = 20.50;
        REarnings.textContent ="$ " + rEarnings.toFixed(2);
        Remove();

    }  else if (Input.value > 97069 && Input.value <= 150473){
        
        taxOwed = (Input.value - 97069)* 0.26 + 17230;
        rEarnings = Input.value - taxOwed;
        Owed.textContent = "$ " + taxOwed.toFixed(2);
        ERate.textContent = 26;
        REarnings.textContent = "$ " + rEarnings.toFixed(2);
        Remove(); 

    } else if (Input.value > 150473 && Input.value <= 214368){
        taxOwed = (Input.value - 150473) * 0.29 + 31115;
        rEarnings = Input.value - taxOwed;
        Owed.textContent = "$ " + taxOwed.toFixed(2);
        ERate.textContent = 29
        REarnings.textContent = "$ " + rEarnings.toFixed(2);
        Remove();

    }
    
     else  if (isNaN(Input.value) ){
    
        // console.log("is not a number");
       

        document.body.appendChild(para);
        para.textContent = "Error: Enter a number";

        // console.log(para);
    }

    else if (Input.value > 214368 ){
        taxOwed = (Input.value - 214368) * 0.33 + 49645;
        rEarnings = Input.value - taxOwed;
        Owed.textContent = "$ " + taxOwed.toFixed(2);
        ERate.textContent = 33;
        REarnings.textContent = "$ " + rEarnings.toFixed(2);

    }
}


//console.log(Submit);

//console.log(Clear);

//console.log(Input);


function Remove(){

para.parentNode.removeChild(para);
}

function ClearB(){
    Input.value = "";
    ERate.textContent = "";
    Owed.textContent = "";
    REarnings.textContent = "";

}

Submit.addEventListener("click",function () {
    
   Tax();
  
} );

Clear.addEventListener("click", function(){
   
    ClearB();
    Remove();
    
});