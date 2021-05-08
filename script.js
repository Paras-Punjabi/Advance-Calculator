// DOM Elements
let calcy = document.querySelector(".calcy");
let foot = document.querySelector(".foot");
let displayArea = document.getElementById("result");
let operators = document.querySelectorAll(".operator");
let leftIcon = document.querySelector('.toggle .fa-arrow-left')
let rigthIcon = document.querySelector('.toggle .fa-arrow-right')
let keyboard = document.querySelectorAll('.keyboard')
let keyboardAdvance = document.querySelectorAll('.k-adv')

// main logics
for (const item of operators) {
  item.addEventListener("click", (e) => {
    let buttonText = e.target.innerText;
    if (buttonText == "CA") {
      displayArea.value = "";
    } else if (displayArea.value == "" && buttonText == "=") {
      displayArea.value = "Invalid Syntax";
    } else if (buttonText == "=") {
      try {
        document.getElementById("result").value = eval(
          document.getElementById("result").value
        );
      } catch (error) {
        displayArea.value = "Invalid Syntax";
      }
    }
    
    else if (buttonText == `×`) {
      displayArea.value += "*";
    } 


    else if (buttonText == `÷`) {
      displayArea.value += "/";
    }


    else if(buttonText == "sin-1"){
        if(displayArea.value == ""){
            displayArea.value = "First select a number!";
        }
        else{
        displayArea.value = eval(Math.asin(displayArea.value));
        if(displayArea.value=="NaN"){
            displayArea.value = "Cannot Perform"
        }
    }
    }


    else if(buttonText == "cos-1"){
        if(displayArea.value == ""){
            displayArea.value = "First select a number!";
        }
        else{
        displayArea.value = eval(Math.acos(displayArea.value));
        if(displayArea.value=="NaN"){
            displayArea.value = "Cannot Perform"
        }
    }
    }


    else if(buttonText == "tan-1"){
        if(displayArea.value == ""){
            displayArea.value = "First select a number!";
        }
        else{
        displayArea.value = eval(Math.atan(displayArea.value));
        if(displayArea.value=="NaN"){
            displayArea.value = "Cannot Perform"
        }
    }
    }


    else if(buttonText == "√"){
        if(displayArea.value == ""){
            displayArea.value = "First Select a number!"
        }
        else {
        displayArea.value = eval(Math.sqrt(displayArea.value));
        if(displayArea.value=="NaN"){
            displayArea.value = "Cannot Perform"
        }
    }
    }

    else if(buttonText == "ex"){
        if(displayArea.value == ""){
            displayArea.value = "First Select a number!"
        }
        else{
        displayArea.value = eval(Math.exp(displayArea.value));
        }
    }

    
    else if(buttonText == "ln"){

        if(displayArea.value == ""){
            displayArea.value = "First Select a number!"
        }
        else{
        displayArea.value = eval(Math.log(displayArea.value));
        if(displayArea.value=="NaN"){
            displayArea.value = "Cannot Perform"
        }
    }
    }
    else if(buttonText == "log10"){
        if(displayArea.value == ""){
            displayArea.value = "First Select a number!";
        }
        else {
        displayArea.value = eval(Math.log10(displayArea.value));
        if(displayArea.value=="NaN"){
            displayArea.value = "Cannot Perform"
        }
    }
    }

    else if(buttonText == "1/x"){
       if(displayArea.value == ""){
           displayArea.value = "First Select a number!";
       }
       else{
        displayArea.value = eval(1/displayArea.value);
       }
    }

    else if(buttonText == "x2"){
        if(displayArea.value == ""){
            displayArea.value = "First Select a number!"
        }
        else{
        displayArea.value = eval(Math.pow(displayArea.value,2));
        }
    }

    else if(buttonText == "x3"){
        if(displayArea.value == ""){
            displayArea.value = "First Select a number!"
        }
        else{
        displayArea.value = eval(Math.pow(displayArea.value,3));
        }
    }

    else if(buttonText == "|x|"){
        if(displayArea.value == ""){
            displayArea.value = "First Select a number!"
        }
        else{
        displayArea.value = eval(Math.abs(displayArea.value));
        }
    }

    else if(buttonText == "π"){
       if(displayArea.value == ""){
        displayArea.value = Math.PI;
       }
       else {
        displayArea.value += "*" +  Math.PI;
       }
    }

    
    else if(buttonText == "e"){
        if(displayArea.value == ""){
            displayArea.value = Math.E;
           }
           else {
            displayArea.value += "*" +  Math.E;
           }
    }

    else if(buttonText == "sin"){
        if(displayArea.value == ""){
            displayArea.value = "First Select a number!"
        }
        else{
        displayArea.value = eval(Math.sin(displayArea.value).toFixed(3));
        }
    }

    else if(buttonText == "cos"){
        if(displayArea.value == ""){
            displayArea.value = "First Select a number!"
        }
        else{
        displayArea.value = eval(Math.cos(displayArea.value));
        }
    }

    else if(buttonText == "tan"){
        if(displayArea.value == ""){
            displayArea.value = "First Select a number!"
        }
        else{
        displayArea.value = eval(Math.tan(displayArea.value).toFixed(3));
        }
    }

    else if(buttonText =="xy"){
       if(displayArea.value==""){
        displayArea.value = "First Select a number!"
       }
       else{
           displayArea.value += "**"; 
       }
    }

    else if(buttonText == "x!"){
        let number = Number(displayArea.value)
        if(displayArea.value == ""){
            displayArea.value = "First Select an Integer!"
        }
        
        else if(Number.isInteger(number)==true){
            if(number>=0){
           if(number<=20){
            displayArea.value = factorial(number);
           }
           else{
               displayArea.value = "Out of Range!"
           }
            }
            else {
                displayArea.value = "Should be a positive integer";
            }
        }
        else if(Number.isInteger(number)==false){
            displayArea.value = "Number is not an Integer"
        }
    }
    else {
      displayArea.value += buttonText;
    }
  });
}

// Toggle Scientific and Basic Operators
leftIcon.addEventListener('click',Toggle=()=>{
    keyboardAdvance.forEach(e=>{
        e.classList.toggle('hide')
    })
    keyboard.forEach(item=>{
        item.classList.toggle('hide')
    })
    rigthIcon.classList.remove('hide')
    leftIcon.classList.add('hide')
})

rigthIcon.addEventListener('click',()=>{
    Toggle();
    rigthIcon.classList.add('hide')
    leftIcon.classList.remove('hide')
})

// factorial function
function factorial(num){
    if(num==0 || num==1){
        return 1;
    }
 let result = 1;
 for(let i=num;i>0;i--){
     result = result*i
 }
 return result;
}