// Grab numbers from the text fields and pass them to the server
// All calculations are done outside of script.js

function grabNumbers() {
    
    age = document.getElementById("Age").value;
    feet = document.getElementById("HeightFt").value;
    inches = document.getElementById("HeightIn").value;
    weight = document.getElementById("Weight").value;
    console.log("age = "+ age + " height = " + feet + "ft " + inches + "in");
    console.log("Weight = " + weight + "lbs");
    
}

function rdMetFn() {
    var rdbTwoHeight = document.getElementById("metOne");
    if (rdbTwoHeight.checked == true) {
        document.getElementById("HeightIn").style.display = "none";
        document.getElementById("HeightFt").placeholder = "Cm..."  
    }
}

function rdImpFn() {
    var rdImpHeightIn = document.getElementById("impOne");
    if (rdImpHeightIn.checked == true) {
        document.getElementById("HeightIn").style.display = "";
        document.getElementById("HeightFt").placeholder = "Feet..."
    } 
}