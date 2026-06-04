// function decleration 

function isEven(number){
    return number%2 == 0; 
}

// calling the function 
x = isEven(5);
console.log(x);  



// function with parameters 

function displayMessage(messsageToBeDisplayed){
    console.log(messsageToBeDisplayed)
}

displayMessage("i am happy to learn full stack development"); 




// function with default parameters 

function displayMessage1(messsageToBeDisplayed = 'i am a proud student of this institute'){
    console.log(messsageToBeDisplayed); 
}
displayMessage1(); 