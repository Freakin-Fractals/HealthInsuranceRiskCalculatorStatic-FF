async function wakeup() {
    const response = await fetch("https://healthappserver.azurewebsites.net/ping")
    //If the console says pong, the server got the ping
    console.log(await response.json())
}

async function sendData() {
    // Grab numbers from the text fields and pass them to the server
    // All point calculations are done outside of script.js
    // age, height(meters), weight(kg), bloodPressure, diseases
    let age = document.getElementById("Age").value;
    let m;
    let kg;
    let bpstage = document.getElementById("bplst").value;

    if (document.getElementById("metOne").checked == true) {
        let cm = document.getElementById("HeightFt").value;
        //cm -> m
        m = cm / 100;
    }
    else{
        let feet = document.getElementById("HeightFt").value;
        let inches = document.getElementById("HeightIn").value;
        //change feet -> inches -> cm -> meter
        let totalInches = (feet * 12) + parseInt(inches);
        let cm = (totalInches * 2.54);
        m = cm / 100;
    }

    if (document.getElementById("metTwo").checked == true){
        kg = document.getElementById("Weight").value;
    }
    else{
        let lbs = document.getElementById("Weight").value;
        kg = lbs /2.205;
        kg = Math.round(kg * 10) / 10;
    }

    // Each family disease is worth the same value of 10 points
    // This will return the number of disease as 0-3
    let numDiseases = 0;
    if (document.getElementById("Diabetes").checked == true){ numDiseases++; }
    if (document.getElementById("Cancer").checked == true){ numDiseases++; }
    if (document.getElementById("Alzheimers").checked == true){ numDiseases++; }

    // Console log statements for testing feel free to uncomment 
    // console.log("age: "+ age);
    // console.log("Height: " + m + "m")
    // console.log("Weight : " + kg + "kg");
    // console.log("Blood Pressure Stage: " + bpstage)
    // console.log("Number of Family Diseases: " + numDiseases)


    // First attempt at sending the data between sites, feel free to change anything
    const data = { age, m, kg, bpstage, numDiseases};
    const calcURL = "https://healthappserver.azurewebsites.net/calculation?age=" + 
    age + "&height=" + m + "&weight="+kg+"&blood="+bpstage+"&disease="+numDiseases; //this address will get the server the information
    const response = await fetch(calcURL, data);
    const res = await response.json();
    console.log(res);
    alert(res.risk);
    document.querySelector('#result').innerHTML = 'Result: ' + res.risk;

    if (res.risk == "Error: Cannot Calculate Risk") {
        document.getElementById("results").style.backgroundColor = "red";
    } else if (res.risk == "uninsurable") {
        document.getElementById("results").style.backgroundColor = "red";
    } else if (res.risk == "high risk") {
        document.getElementById("results").style.backgroundColor = "orange";
    }else if (res.risk == "moderate risk") {
        document.getElementById("results").style.backgroundColor = "yellow";
    } else if (res.risk == "low risk") {
        document.getElementById("results").style.backgroundColor = "#90EE90";
    } else {
        document.getElementById("results").style.backgroundColor = "white";
    }

}

function rdMetFn() {
    var rdbTwoHeight = document.getElementById("metOne");
    if (rdbTwoHeight.checked == true) {
        document.getElementById("HeightIn").style.display = "none";
        document.getElementById("HeightFt").placeholder = "Centimeters..."  
    }
}

function rdImpFn() {
    var rdImpHeightIn = document.getElementById("impOne");
    if (rdImpHeightIn.checked == true) {
        document.getElementById("HeightIn").style.display = "";
        document.getElementById("HeightFt").placeholder = "Feet..."
    } 
}

function rdMetFn2() {
    var rdbTwoHeight = document.getElementById("metTwo");
    if (rdbTwoHeight.checked == true) {
        document.getElementById("Weight").placeholder = "Kilograms...";
    }
}

function rdImpFn2() {
    var rdImpHeightIn = document.getElementById("impTwo");
    if (rdImpHeightIn.checked == true) {
        document.getElementById("Weight").placeholder = "Pounds..."
    } 
}

