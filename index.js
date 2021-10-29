const calculateBMI = function (being) {
  let BMI = Math.round((being.weight / being.height **2) * 10000);
  return BMI;
};

const Handal = {
  name: "Handal",
  weight: 60,
  height: 172,
};

const showBMI = function (being) {
  let BMI = calculateBMI(being);
  if (BMI < 18.5){
    console.log("U R Underweight");
    alert("U R Underweight");
  } else if (BMI > 18.5 && BMI <=25) {
console.log("Why r u so healthy");
alert("Why r u so healthy");
  } else if (BMI>25) {
    console.log("you are fattt");
    alert("you are fattt");
  }
}

console.log("Ur BMI");
console.log(calculateBMI(Handal));
showBMI(Handal);