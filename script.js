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
    document.querySelector('#result').innerHTML = 'Result: ' + res.risk;

    if (res.risk == "Error: Cannot Calculate Risk") {
        document.getElementById("resultBox").style.backgroundColor = "#FFCCCB";
    } else if (res.risk == "uninsurable") {
        document.getElementById("resultBox").style.backgroundColor = "#FFCCCB";
    } else if (res.risk == "high risk") {
        document.getElementById("resultBox").style.backgroundColor = "FFD580";
    }else if (res.risk == "moderate risk") {
        document.getElementById("resultBox").style.backgroundColor = "#FFF9A6";
    } else if (res.risk == "low risk") {
        document.getElementById("resultBox").style.backgroundColor = "#90EE90";
    }

    if (document.getElementById("metOne").checked == true) {
        let cm = document.getElementById("HeightFt").value;
        if ((cm > 304.8) || (cm < 0)) {
            document.getElementById("HeightFt").style.backgroundColor = "#FFCCCB";
        } else {
            document.getElementById("HeightFt").style.backgroundColor = "white";
        }
    }
    else{
        let feet = document.getElementById("HeightFt").value;
        let inches = document.getElementById("HeightIn").value;
        let totalInches = (feet * 12) + parseInt(inches);
        if ((totalInches > 120)|| (totalInches < 0)) {
            document.getElementById("HeightFt").style.backgroundColor = "#FFCCCB";
            document.getElementById("HeightIn").style.backgroundColor = "#FFCCCB";
        } else {
            document.getElementById("HeightFt").style.backgroundColor = "white";
            document.getElementById("HeightIn").style.backgroundColor = "white";
        }
    }

    if (document.getElementById("metTwo").checked == true){
        if ((document.getElementById("Weight").value > 142.882) || (document.getElementById("Weight").value < 0) || (document.getElementById("Weight").value == "")) {
            document.getElementById("Weight").style.backgroundColor = "#FFCCCB";
        } else {
            document.getElementById("Weight").style.backgroundColor = "white";
        }
    }
    else{
        if ((document.getElementById("Weight").value > 315) || (document.getElementById("Weight").value < 0) || (document.getElementById("Weight").value == "")) {
            document.getElementById("Weight").style.backgroundColor = "#FFCCCB";
        } else {
            document.getElementById("Weight").style.backgroundColor = "white";
        }
    }

    if (document.getElementById("Age").value == "") {
        document.getElementById("Age").style.backgroundColor = "#FFCCCB";
    } else {
        document.getElementById("Age").style.backgroundColor = "white";
    }

    if (document.getElementById("HeightFt").value == "") {
        document.getElementById("HeightFt").style.backgroundColor = "#FFCCCB";
    } else {
        document.getElementById("HeightFt").style.backgroundColor = "white";
    }

    if (document.getElementById("HeightIn").value == "") {
        document.getElementById("HeightIn").style.backgroundColor = "#FFCCCB";
    } else {
        document.getElementById("HeightIn").style.backgroundColor = "white";
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

