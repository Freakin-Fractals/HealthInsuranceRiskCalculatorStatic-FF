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
    if (res5.blood == 'Error: Invalid Blood Pressure Stage'){
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
    if (res6.blood == 'Error: Invalid Family Disease Count'){
        console.log("Test 6: "+ '\x1b[32m%s\x1b[0m', "Pass")
    } else {
        console.log("Test 6: "+ '\x1b[31m%s\x1b[0m', "Fail")
        console.log("Got: { age: "+res6.age+", BMI: "+res6.BMI+", blood: "+res6.blood+", dis: "+res6.dis+" }")
        console.log("Expected: { dis: 'Error: Invalid Family Disease Count' }")
    }
    numDiseases = 1; // Reset Family Disease Count

    // Test 7 Bad Age: Out of Upper Bounds Integer
    age = 200; // Invalid String Age
    const data7 = { age, m, kg, bpstage, numDiseases};
    const calcURL7 = "https://healthappserver.azurewebsites.net/calculation?age=" + 
    age + "&height=" + m + "&weight="+kg+"&blood="+bpstage+"&disease="+numDiseases;
    const response7 = await fetch(calcURL7, data7);
    const res7 = await response7.json();
    if (res7.age == 'Error: Invalid Age'){
        console.log("Test 7: "+ '\x1b[32m%s\x1b[0m', "Pass")
    } else {
        console.log("Test 7: "+ '\x1b[31m%s\x1b[0m', "Fail")
        console.log("Got: { age: "+res7.age+", BMI: "+res7.BMI+", blood: "+res7.blood+", dis: "+res7.dis+" }")
        console.log("Expected: { age: 'Error: Invalid Age' }")
    }
    age = 20; // Reset Age

    // Test 8 Bad Height: Out of Upper Bounds Integer
    m = 5; // Invalid String Height
    const data8 = { age, m, kg, bpstage, numDiseases};
    const calcURL8 = "https://healthappserver.azurewebsites.net/calculation?age=" + 
    age + "&height=" + m + "&weight="+kg+"&blood="+bpstage+"&disease="+numDiseases;
    const response8 = await fetch(calcURL8, data8);
    const res8 = await response8.json();
    if (res8.BMI == 'Error: Invalid Height'){
        console.log("Test 8: "+ '\x1b[32m%s\x1b[0m', "Pass")
    } else {
        console.log("Test 8: "+ '\x1b[31m%s\x1b[0m', "Fail")
        console.log("Got: { age: "+res8.age+", BMI: "+res8.BMI+", blood: "+res8.blood+", dis: "+res8.dis+" }")
        console.log("Expected: { BMI: 'Error: Invalid Height' }")
    }
    m = 1.9; // Reset Height

    // Test 9 Bad Weight: Out of Upper Bounds Integer
    kg = 500; // Invalid String Weight
    const data9 = { age, m, kg, bpstage, numDiseases};
    const calcURL9 = "https://healthappserver.azurewebsites.net/calculation?age=" + 
    age + "&height=" + m + "&weight="+kg+"&blood="+bpstage+"&disease="+numDiseases;
    const response9 = await fetch(calcURL9, data9);
    const res9 = await response9.json();
    if (res9.BMI == 'Error: Invalid Weight'){
        console.log("Test 9: "+ '\x1b[32m%s\x1b[0m', "Pass")
    } else {
        console.log("Test 9: "+ '\x1b[31m%s\x1b[0m', "Fail")
        console.log("Got: { age: "+res9.age+", BMI: "+res9.BMI+", blood: "+res9.blood+", dis: "+res9.dis+" }")
        console.log("Expected: { BMI: 'Error: Invalid Weight' }")
    }
    kg = 65.77; // Reset Weight

    // Test 10 Bad Blood Pressure Stage: Out of Upper Bounds Integer
    bpstage = 6; // Invalid String Blood Pressure Stage
    const data10 = { age, m, kg, bpstage, numDiseases};
    const calcURL10 = "https://healthappserver.azurewebsites.net/calculation?age=" + 
    age + "&height=" + m + "&weight="+kg+"&blood="+bpstage+"&disease="+numDiseases;
    const response10 = await fetch(calcURL10, data10);
    const res10 = await response10.json();
    if (res10.blood == 'Error: Invalid Blood Pressure Stage'){
        console.log("Test 10: "+ '\x1b[32m%s\x1b[0m', "Pass")
    } else {
        console.log("Test 10: "+ '\x1b[31m%s\x1b[0m', "Fail")
        console.log("Got: { age: "+res10.age+", BMI: "+res10.BMI+", blood: "+res10.blood+", dis: "+res10.dis+" }")
        console.log("Expected: { blood: 'Error: Invalid Blood Pressure Stage' }")
    }
    bpstage = 1; // Reset Blood Pressure Stage

    // Test 11 Bad Family Disease Count: Out of Upper Bounds Integer
    numDiseases = 4; // Invalid String Family Disease Count
    const data11 = { age, m, kg, bpstage, numDiseases};
    const calcURL11 = "https://healthappserver.azurewebsites.net/calculation?age=" + 
    age + "&height=" + m + "&weight="+kg+"&blood="+bpstage+"&disease="+numDiseases;
    const response11 = await fetch(calcURL11, data11);
    const res11 = await response11.json();
    if (res11.blood == 'Error: Invalid Family Disease Count'){
        console.log("Test 11: "+ '\x1b[32m%s\x1b[0m', "Pass")
    } else {
        console.log("Test 11: "+ '\x1b[31m%s\x1b[0m', "Fail")
        console.log("Got: { age: "+res11.age+", BMI: "+res11.BMI+", blood: "+res11.blood+", dis: "+res11.dis+" }")
        console.log("Expected: { dis: 'Error: Invalid Family Disease Count' }")
    }
    numDiseases = 1; // Reset Family Disease Count

    // Test 12 Bad Age: Out of Lower Bounds Integer
    age = -1; // Invalid String Age
    const data12 = { age, m, kg, bpstage, numDiseases};
    const calcURL12 = "https://healthappserver.azurewebsites.net/calculation?age=" + 
    age + "&height=" + m + "&weight="+kg+"&blood="+bpstage+"&disease="+numDiseases;
    const response12 = await fetch(calcURL12, data12);
    const res12 = await response12.json();
    if (res12.age == 'Error: Invalid Age'){
        console.log("Test 12: "+ '\x1b[32m%s\x1b[0m', "Pass")
    } else {
        console.log("Test 12: "+ '\x1b[31m%s\x1b[0m', "Fail")
        console.log("Got: { age: "+res12.age+", BMI: "+res12.BMI+", blood: "+res12.blood+", dis: "+res12.dis+" }")
        console.log("Expected: { age: 'Error: Invalid Age' }")
    }
    age = 20; // Reset Age

    // Test 13 Bad Height: Out of Lower Bounds Integer
    m = -1; // Invalid String Height
    const data13 = { age, m, kg, bpstage, numDiseases};
    const calcURL13 = "https://healthappserver.azurewebsites.net/calculation?age=" + 
    age + "&height=" + m + "&weight="+kg+"&blood="+bpstage+"&disease="+numDiseases;
    const response13 = await fetch(calcURL13, data13);
    const res13 = await response13.json();
    if (res13.BMI == 'Error: Invalid Height'){
        console.log("Test 13: "+ '\x1b[32m%s\x1b[0m', "Pass")
    } else {
        console.log("Test 13: "+ '\x1b[31m%s\x1b[0m', "Fail")
        console.log("Got: { age: "+res13.age+", BMI: "+res13.BMI+", blood: "+res13.blood+", dis: "+res13.dis+" }")
        console.log("Expected: { BMI: 'Error: Invalid Height' }")
    }
    m = 1.9; // Reset Height

    // Test 14 Bad Weight: Out of Lower Bounds Integer
    kg = -1; // Invalid String Weight
    const data14 = { age, m, kg, bpstage, numDiseases};
    const calcURL14 = "https://healthappserver.azurewebsites.net/calculation?age=" + 
    age + "&height=" + m + "&weight="+kg+"&blood="+bpstage+"&disease="+numDiseases;
    const response14 = await fetch(calcURL14, data14);
    const res14 = await response14.json();
    if (res14.BMI == 'Error: Invalid Weight'){
        console.log("Test 14: "+ '\x1b[32m%s\x1b[0m', "Pass")
    } else {
        console.log("Test 14: "+ '\x1b[31m%s\x1b[0m', "Fail")
        console.log("Got: { age: "+res14.age+", BMI: "+res14.BMI+", blood: "+res14.blood+", dis: "+res14.dis+" }")
        console.log("Expected: { BMI: 'Error: Invalid Weight' }")
    }
    kg = 65.77; // Reset Weight

    // Test 15 Bad Blood Pressure Stage: Out of Lower Bounds Integer
    bpstage = -1; // Invalid String Blood Pressure Stage
    const data15 = { age, m, kg, bpstage, numDiseases};
    const calcURL15 = "https://healthappserver.azurewebsites.net/calculation?age=" + 
    age + "&height=" + m + "&weight="+kg+"&blood="+bpstage+"&disease="+numDiseases;
    const response15 = await fetch(calcURL15, data15);
    const res15 = await response15.json();
    if (res15.blood == 'Error: Invalid Blood Pressure Stage'){
        console.log("Test 15: "+ '\x1b[32m%s\x1b[0m', "Pass")
    } else {
        console.log("Test 15: "+ '\x1b[31m%s\x1b[0m', "Fail")
        console.log("Got: { age: "+res15.age+", BMI: "+res15.BMI+", blood: "+res15.blood+", dis: "+res15.dis+" }")
        console.log("Expected: { blood: 'Error: Invalid Blood Pressure Stage' }")
    }
    bpstage = 1; // Reset Blood Pressure Stage

    // Test 16 Bad Family Disease Count: Out of Lower Bounds Integer
    numDiseases = -1; // Invalid String Family Disease Count
    const data16 = { age, m, kg, bpstage, numDiseases};
    const calcURL16 = "https://healthappserver.azurewebsites.net/calculation?age=" + 
    age + "&height=" + m + "&weight="+kg+"&blood="+bpstage+"&disease="+numDiseases;
    const response16 = await fetch(calcURL16, data16);
    const res16 = await response16.json();
    if (res16.blood == 'Error: Invalid Family Disease Count'){
        console.log("Test 16: "+ '\x1b[32m%s\x1b[0m', "Pass")
    } else {
        console.log("Test 16: "+ '\x1b[31m%s\x1b[0m', "Fail")
        console.log("Got: { age: "+res16.age+", BMI: "+res16.BMI+", blood: "+res16.blood+", dis: "+res16.dis+" }")
        console.log("Expected: { dis: 'Error: Invalid Family Disease Count' }")
    }
    numDiseases = 1; // Reset Family Disease Count

    // Test 17 Bad Blood Pressure Stage: Rational Instead of Integer
    bpstage = 1.5; // Invalid Rational Number
    const data17 = { age, m, kg, bpstage, numDiseases};
    const calcURL17 = "https://healthappserver.azurewebsites.net/calculation?age=" + 
    age + "&height=" + m + "&weight="+kg+"&blood="+bpstage+"&disease="+numDiseases;
    const response17 = await fetch(calcURL17, data17);
    const res17 = await response17.json();
    if (res17.blood == 'Error: Invalid Blood Pressure Stage'){
        console.log("Test 17: "+ '\x1b[32m%s\x1b[0m', "Pass")
    } else {
        console.log("Test 17: "+ '\x1b[31m%s\x1b[0m', "Fail")
        console.log("Got: { age: "+res17.age+", BMI: "+res17.BMI+", blood: "+res17.blood+", dis: "+res17.dis+" }")
        console.log("Expected: { blood: 'Error: Invalid Blood Pressure Stage' }")
    }
    bpstage = 1; // Reset Blood Pressure Stage

    // Test 18 Bad Family Disease Count: Rational Instead of Integer
    numDiseases = 1.5; // Invalid Rational Number
    const data18 = { age, m, kg, bpstage, numDiseases};
    const calcURL18 = "https://healthappserver.azurewebsites.net/calculation?age=" + 
    age + "&height=" + m + "&weight="+kg+"&blood="+bpstage+"&disease="+numDiseases;
    const response18 = await fetch(calcURL18, data18);
    const res18 = await response18.json();
    if (res18.blood == 'Error: Invalid Family Disease Count'){
        console.log("Test 18: "+ '\x1b[32m%s\x1b[0m', "Pass")
    } else {
        console.log("Test 18: "+ '\x1b[31m%s\x1b[0m', "Fail")
        console.log("Got: { age: "+res18.age+", BMI: "+res18.BMI+", blood: "+res18.blood+", dis: "+res18.dis+" }")
        console.log("Expected: { dis: 'Error: Invalid Family Disease Count' }")
    }
    numDiseases = 1; // Reset Family Disease Count
}