const fName = document.getElementById("fname");
const lName = document.getElementById("lname");
const mail = document.getElementById("email");

function submnit(e){
    e.preventdefault();
    if(!fName.value && lName.value && mail){
        alert("Value added successfully");
    }
}
