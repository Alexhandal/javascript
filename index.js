const BMIcalculator = function (being) {
  let BMI = being.weight / being.height ** 2;
  return BMI;
};

const Handal = {
  name: "Handal",
  weight: 60,
  height: 1.8,
};

const BMI = function (being) {
  let BMI = calculateBMI(being);
  if (BMI < 18.5) {
    console.log("you are underweight");
  } else if (BMI > 18.5 && BMI < 25) {
    console.log("you are healthy");
  } else if (BMI > 25) {
    console.log("You are fat");
  }
};

CalculateBMI(Handal);
console.log(BMI(Handal));
