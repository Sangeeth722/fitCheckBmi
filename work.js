function calculateBmi(){
    let height = document.getElementById("first").value;

    let weight = document.getElementById("second").value;
    
    var heightInM = height /100;

    var bmi = weight/(heightInM*heightInM)

    if (height==="" || weight ===""){
        
        
        alert("Enter Valid Height And Weight")

    }

    else if (bmi <= 18.5){
        document.getElementById("result").innerHTML = "Underweight".toUpperCase();

    }else if(bmi >  18.5 && bmi <= 24.9 ){
        document.getElementById("result").innerHTML = "Normal weight".toUpperCase();
    }else if(bmi >=  25 && bmi <= 29.9 ){
        document.getElementById("result").innerHTML = "Over weight ".toUpperCase();
    }else if(bmi >=30 ){
        document.getElementById("result").innerHTML = "Obese ".toUpperCase();
    }


    
}
function whatIsBMI(){

    document.getElementById("bmi-info").innerHTML = `
    <strong>What is BMI?</strong><br><br>
    Body Mass Index (BMI) is a measurement that helps determine if a person has a healthy weight for their height.  
    It is calculated using the formula:  
    <br><br>
    <strong>BMI = Weight (kg) ÷ (Height (m) × Height (m))</strong>  
    <br><br>
    A higher BMI may indicate higher body fat, while a lower BMI may suggest being underweight.  
    However, BMI does not measure body fat directly and should be considered along with other health factors.  
`;


}




