async function wakeup() {
    const response = await fetch("https://healthappserver.azurewebsites.net/ping")
    //If the console says pong, the server got the ping
    console.log(await response.json())
}

function grabNumbers() {
    // Grab numbers from the text fields and pass them to the server
    // All calculations are done outside of script.js
    age = document.getElementById("Age").value;
    feet = document.getElementById("HeightFt").value;
    inches = document.getElementById("HeightIn").value;
    weight = document.getElementById("Weight").value;
    bpstage = document.getElementById("bplst").value;

    // Each family disease is worth the same value of 10 points
    // This will return the number of disease as 0-3
    numDiseases = 0;
    if (document.getElementById("Diabetes").checked == true){ numDiseases++; }
    if (document.getElementById("Cancer").checked == true){ numDiseases++; }
    if (document.getElementById("Alzheimers").checked == true){ numDiseases++; }

    // Console log statements for testing feel free to uncomment 
    // console.log("age: "+ age + " height: " + feet + "ft " + inches + "in");
    // console.log("Weight : " + weight + "lbs");
    // console.log("Blood Pressure Stage: " + BPstage)
    // console.log("Number of Family Diseases: " + numDiseases)
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