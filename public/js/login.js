


var email = document.getElementById("email");
var error1 = document.getElementById("error1");
var tick1 = document.getElementById("tick1");
var x1 = document.getElementById("mistake1");

var pwd = document.getElementById("pwd");
var tick2 = document.getElementById("tick2");
var x2 = document.getElementById("mistake2");
var error2 = document.getElementById("error2");
// app.use(express.static(__dirname+'/public'));


// login.get('/', (req, res) => {
//     res.render("login"
//        );
// });



    

function validate(){
    if(validate1() && validate2() ) {
            return true;
        } else {
           
            return false;
        }
}


    function validate1() {
        // let regexp = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.]{2,4})+\.([A-Za-z]{2,3})$/;;
        if (email.value.trim() == "admin" ){
            error1.innerHTML = "valid";
            error1.style.color = "green";
            email.style.borderColor = "yellow";

            tick1.removeAttribute("hidden", "true");
            x1.setAttribute("hidden", "true");
            return true;
            console.log("ok perfect ok");
        }
        else {
            error1.innerHTML = "invalid email format";
            error1.style.color = "red";
            email.style.borderColor = "red";
            x1.removeAttribute("hidden", "true");
            tick1.setAttribute("hidden", "true");
            return false;
            console.log("thetipoyallo");

        }
    }

    function validate2() {

        if (pwd.value.trim() == "12345") {
            error2.innerHTML = "valid";
            error2.style.color = "green";
            pwd.style.borderColor = "yellow";

            tick2.removeAttribute("hidden", "true");
            x2.setAttribute("hidden", "true");
            return true;
        }
        else if (pwd.value.trim() == "") {

            error2.innerHTML = "space is not allowed";
            error2.style.color = "red";
            pwd.style.borderColor = "red";
            x2.removeAttribute("hidden", "true");
            tick2.setAttribute("hidden", "true");
            return false;
        }

        else {
            error2.innerHTML = "password is too short";
            error2.style.color = "red";
            pwd.style.borderColor = "red";
            x2.removeAttribute("hidden", "true");
            tick2.setAttribute("hidden", "true");
            return false;
        }
    };


