// Brindyn Schultz
// FreakinFractals
// Software Engineering
serverTest()

async function serverTest() {  
    // Good Data
    let age = 20;
    let m = 1.9;
    let kg = 65.77;
    let bpstage = 1;
    let numDiseases = 1;

    // Test 1 Good Data
    const data1 = { age, m, kg, bpstage, numDiseases};
    const calcURL1 = "https://healthappserver.azurewebsites.net/calculation?age=" + 
    age + "&height=" + m + "&weight="+kg+"&blood="+bpstage+"&disease="+numDiseases;
    const response1 = await fetch(calcURL1, data1);
    const res1 = await response1.json();
    if (res1.age == 0 && res1.BMI == 0 && res1.blood == 0 && res1.dis == 10){
        console.log("Test 1: "+ '\x1b[32m%s\x1b[0m', "Pass")
    } else {
        console.log("Test 1: "+ '\x1b[31m%s\x1b[0m', "Fail")
        console.log("Got: { age: "+res1.age+", BMI: "+res1.BMI+", blood: "+res1.blood+", dis: "+res1.dis+" }")
        console.log("Expected: { age: 0, BMI: 0, blood: 0, dis: 10 }")
    }

    // Test 2 Bad Age: String data type
    age = "apple"; // Invalid String Age
    const data2 = { age, m, kg, bpstage, numDiseases};
    const calcURL2 = "https://healthappserver.azurewebsites.net/calculation?age=" + 
    age + "&height=" + m + "&weight="+kg+"&blood="+bpstage+"&disease="+numDiseases;
    const response2 = await fetch(calcURL2, data2);
    const res2 = await response2.json();
    if (res2.age == 'Error: Invalid Age'){
        console.log("Test 2: "+ '\x1b[32m%s\x1b[0m', "Pass")
    } else {
        console.log("Test 2: "+ '\x1b[31m%s\x1b[0m', "Fail")
        console.log("Got: { age: "+res2.age+", BMI: "+res2.BMI+", blood: "+res2.blood+", dis: "+res2.dis+" }")
        console.log("Expected: { age: 'Error: Invalid Age' }")
    }
    age = 20; // Reset Age

    // Test 3 Bad Height: String data type
    m = "apple"; // Invalid String Height
    const data3 = { age, m, kg, bpstage, numDiseases};
    const calcURL3 = "https://healthappserver.azurewebsites.net/calculation?age=" + 
    age + "&height=" + m + "&weight="+kg+"&blood="+bpstage+"&disease="+numDiseases;
    const response3 = await fetch(calcURL3, data3);
    const res3 = await response3.json();
    if (res3.BMI == 'Error: Invalid Height'){
        console.log("Test 3: "+ '\x1b[32m%s\x1b[0m', "Pass")
    } else {
        console.log("Test 3: "+ '\x1b[31m%s\x1b[0m', "Fail")
        console.log("Got: { age: "+res3.age+", BMI: "+res3.BMI+", blood: "+res3.blood+", dis: "+res3.dis+" }")
        console.log("Expected: { BMI: 'Error: Invalid Height' }")
    }
    m = 1.9; // Reset Height

    // Test 4 Bad Weight: String data type
    kg = "apple"; // Invalid String Weight
    const data4 = { age, m, kg, bpstage, numDiseases};
    const calcURL4 = "https://healthappserver.azurewebsites.net/calculation?age=" + 
    age + "&height=" + m + "&weight="+kg+"&blood="+bpstage+"&disease="+numDiseases;
    const response4 = await fetch(calcURL4, data4);
    const res4 = await response4.json();
    if (res4.BMI == 'Error: Invalid Weight'){
        console.log("Test 4: "+ '\x1b[32m%s\x1b[0m', "Pass")
    } else {
        console.log("Test 4: "+ '\x1b[31m%s\x1b[0m', "Fail")
        console.log("Got: { age: "+res4.age+", BMI: "+res4.BMI+", blood: "+res4.blood+", dis: "+res4.dis+" }")
        console.log("Expected: { BMI: 'Error: Invalid Weight' }")
    }
    kg = 65.77; // Reset Weight

    // Test 5 Bad Blood Pressure Stage: String data type
    bpstage = "apple"; // Invalid String Blood Pressure Stage
    const data5 = { age, m, kg, bpstage, numDiseases};
    const calcURL5 = "https://healthappserver.azurewebsites.net/calculation?age=" + 
    age + "&height=" + m + "&weight="+kg+"&blood="+bpstage+"&disease="+numDiseases;
    const response5 = await fetch(calcURL5, data5);
    const res5 = await response5.json();
    if (res5.blood == 'Error: Invalid Weight'){
        console.log("Test 5: "+ '\x1b[32m%s\x1b[0m', "Pass")
    } else {
        console.log("Test 5: "+ '\x1b[31m%s\x1b[0m', "Fail")
        console.log("Got: { age: "+res5.age+", BMI: "+res5.BMI+", blood: "+res5.blood+", dis: "+res5.dis+" }")
        console.log("Expected: { blood: 'Error: Invalid Blood Pressure Stage' }")
    }
    bpstage = 1; // Reset Blood Pressure Stage

    // Test 6 Bad Family Disease Count: String data type
    numDiseases = "apple"; // Invalid String Family Disease Count
    const data6 = { age, m, kg, bpstage, numDiseases};
    const calcURL6 = "https://healthappserver.azurewebsites.net/calculation?age=" + 
    age + "&height=" + m + "&weight="+kg+"&blood="+bpstage+"&disease="+numDiseases;
    const response6 = await fetch(calcURL6, data6);
    const res6 = await response6.json();
    if (res6.blood == 'Error: Invalid Weight'){
        console.log("Test 6: "+ '\x1b[32m%s\x1b[0m', "Pass")
    } else {
        console.log("Test 6: "+ '\x1b[31m%s\x1b[0m', "Fail")
        console.log("Got: { age: "+res6.age+", BMI: "+res6.BMI+", blood: "+res6.blood+", dis: "+res6.dis+" }")
        console.log("Expected: { dis: 'Error: Invalid Family Disease Count' }")
    }
    numDiseases = 1; // Reset Family Disease Count
}