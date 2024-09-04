
// Validating the Input field data
let username = document.querySelector('#username');
let firstname = document.querySelector('#firstname');
let lastname = document.querySelector('#lastname');
let email = document.querySelector('#email');
let password = document.querySelector('#password');
let confirm = document.querySelector('#confirm-pass');  
let signUpButton = document.querySelector('button');


function validate(input){
    //length, characters (type text) = min=5
    if(input.type === "text"){
        console.log("Text Field", input.value);
        if(input.value.length >= 5){
            console.log("Valid")
        }
        else {
            console.error("Should have a min length of 5 Characters")
        }
    }
    else if(input.type === "email"){
        console.log("Email Field", input.value);

        let pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

        if(pattern.test(input.value)){
            console.log("Email Is Valid")
        } else {
            console.error("Email Format Is Invalid, Should Be Like test@gmail.com")
        }
    }
    else if(input.type === "password"){
        console.log("Password Field", input.value);
        if(input.value === confirm.value){
            console.log("Password Matches")
        }
        else {
            console.error("Confirm Password Is Not Equal To The Password You Entered")
        }
    }
    else {
        console.log("Malformed Input Field");
    }
}

signUpButton.addEventListener('click', function(){
 
    let inputFields = [username, firstname, lastname, email, password]
 
    for(let input of inputFields){
     validate(input)
     let myData = localStorage.setItem("enteredData", JSON.stringify(input));
    
     console.log(myData)
    }
});
