var myInput = document.getElementById("psw");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");
var special=document.getElementById("special");
var weak= document.getElementById("weak");
var medium=document.getElementById("medium");
var strong=document.getElementById("strong");
var nam=document.getElementById("name");
var tick=document.getElementById("tick");
var mistake=document.getElementById("mistake");


let regex = /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,}).{8,}$/;
let regex1=/^[\!\@\#\$\%\^\&\*\)\(+\=\._-]+$/;

    let regexp2 = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.]{2,4})+\.([A-Za-z]{2,3})$/;;
    let regEx3 = /^\(?(\d{3})\)?[-\. ]?(\d{3})[-\. ]?(\d{4})$/;


    var email = document.getElementById("email");
var error1 = document.getElementById("error1");
var tick1 = document.getElementById("tick1");
var x1 = document.getElementById("mistake1");

var number1 = document.getElementById("number1");
        var tick2 = document.getElementById("tick2");
        var x2 = document.getElementById("mistake2");
        var error2 = document.getElementById("error2");

        var button=document.getElementById("enablebtn");
        button.disabled=true;

// var pwd = document.getElementById("pwd");
// var tick2 = document.getElementById("tick2");
// var x2 = document.getElementById("mistake2");
// var error2 = document.getElementById("error2");



// When the user clicks on the password field, show the message box
myInput.onfocus = function () {
    document.getElementById("message").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
myInput.onblur = function () {
    document.getElementById("message").style.display = "none";
}

// When the user starts to type something inside the password field
myInput.onkeyup = function (password) {
    
    // Validate lowercase letters
    var lowerCaseLetters = /[a-z]/g;
    if (myInput.value.match(lowerCaseLetters)) {
        letter.classList.remove("invalid");
        letter.classList.add("valid");
    } else {
        letter.classList.remove("valid");
        letter.classList.add("invalid");
    }
  

    // Validate capital letters
    var upperCaseLetters = /[A-Z]/g;
    if (myInput.value.match(upperCaseLetters)) {
        capital.classList.remove("invalid");
        capital.classList.add("valid");

        
        

    } else {
        capital.classList.remove("valid");
        capital.classList.add("invalid");
      
    }

    // Validate numbers
    var numbers = /[0-9]/g;
    if (myInput.value.match(numbers)) {
        number.classList.remove("invalid");
        number.classList.add("valid");
        medium.removeAttribute("hidden","true");
        weak.setAttribute("hidden","true");

        
        
    } else {
        number.classList.remove("valid");
        number.classList.add("invalid");
        medium.setAttribute("hidden","true");
        
        
    }

    // Validate length
    if (myInput.value.trim().length >= 8) {
        length.classList.remove("invalid");
        length.classList.add("valid");
       
       

    } else {
        length.classList.remove("valid");
        length.classList.add("invalid");
        weak.removeAttribute("hidden","true");
        
        
    }
    //validate special character
if (regex1.test(myInput.value)){
    special.classList.remove("invalid");
    special.classList.add("valid");

}else{
    special.classList.remove("valid");
    special.classList.add("invalid");
}

    if (regex.test(myInput.value)) {
        strong.removeAttribute("hidden","true");
        medium.setAttribute("hidden","true");
        weak.setAttribute("hidden","true");
        button.disabled = false;

       
        return true;}
        else{
strong.setAttribute("hidden","true");
button.disabled=true;
        }

   
    
   
}
function validate1() {
    // let regexp2 = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.]{2,4})+\.([A-Za-z]{2,3})$/;;
    if (regexp2.test(email.value)) {
        error1.innerHTML = "valid";
        error1.style.color = "green";
        email.style.borderColor = "green";

        tick1.removeAttribute("hidden", "true");
        x1.setAttribute("hidden", "true");
        console.log("ok perfect ok");

        return true;
    }
    else {
        error1.innerHTML = "invalid email format";
        error1.style.color = "red";
        email.style.borderColor = "";
        x1.removeAttribute("hidden", "true");
        tick1.setAttribute("hidden", "true");
        return false;
        console.log("theti");

    }
}
function validate3() {

    // let regEx = /^\(?(\d{3})\)?[-\. ]?(\d{3})[-\. ]?(\d{3})$/;
    if (regEx3.test(number1.value)) {
        error2.innerHTML = "valid";
        error2.style.color = "green";
        number1.style.borderColor = "green";

        tick2.removeAttribute("hidden", "true");
        x2.setAttribute("hidden", "true");
        return true;

    }
    else {
        error2.innerHTML = "phone number is not valid";
        error2.style.color = "red";
        number1.style.borderColor = "red";
        x2.removeAttribute("hidden", "true");
        tick2.setAttribute("hidden", "true");

        return false;
    }
}



function name1(){
    if (nam.value.trim().length >= 5){
        error.innerHTML="valid";
        error.style.color="green"
        console.log("dr baaaa");
        tick.removeAttribute("hidden", "true");
        mistake.setAttribute("hidden", "true");
        return true;
    } 
    else{
        error.innerHTML="Name should have atleast 5 lettrs ";
        error.style.color="red";
        tick.setAttribute("hidden", "true");
        mistake.removeAttribute("hidden", "true");
        return false;
    }

}
function validate(){
    if(validate1() && validate3() && name1()) {
        return true;
    } else {
       
        return false;
    }
}















