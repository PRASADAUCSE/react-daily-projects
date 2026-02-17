const button = document.getElementById("btn");
button.addEventListener('click', calculateBMI);

const i1 = document.getElementById("height");
const i2 = document.getElementById("weight");

function calculateBMI() {
    const height = parseFloat(i1.value);
    const weight = parseFloat(i2.value);
    if (isNaN(height) || isNaN(weight)) {
        alert("Please enter valid numbers for both height and weight.");
        return;
    }
    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);
    document.getElementById("result").innerText = `Your BMI is: ${bmi.toFixed(2)}`;
    if(bmi< 18.5){
        document.getElementById("result").innerText += " (Underweight)";
    }
    else if(bmi >= 18.5 && bmi < 25){
        document.getElementById("result").innerText += " (Normal weight)";
    }
    else if(bmi >= 25 && bmi < 30){
        document.getElementById("result").innerText += " (Overweight)";
    }
    else{
        document.getElementById("result").innerText += " (Obese)";
    }
}