serverTest()

async function serverTest() {   
   // First attempt at sending the data between sites, feel free to change anything
    let age = 20;
    let m = 1.9;
    let kg = 65.77;
    let bpstage = 1;
    let numDiseases = 1;

    const data = { age, m, kg, bpstage, numDiseases};
    const calcURL = "https://healthappserver.azurewebsites.net/calculation?age=" + 
    age + "&height=" + m + "&weight="+kg+"&bp="+bpstage+"&diseases="+numDiseases; //this address will get the server the information
    const response = await fetch(calcURL, data);
    const res = await response.json();
    console.log(res);
}