document.getElementById("checkButton").addEventListener("click", function() {
  let age = document.getElementById("ageInput").value;
  let resultText = document.getElementById("resultText");
  let resultImage = document.getElementById("resultImage");

  if (age < 16) {
    resultText.innerText = " You cannot drive ";
    resultText.style.color = "red"; // change color
    resultImage.src = "bicycles.jpg";
  } else if (age >= 16 && age <= 24) {
    resultText.innerText = "You can drive";
    resultText.style.color = "green";
    resultImage.src = "car.jpg";
  } else if (age > 25) {
    resultText.innerText = "25";
    resultText.style.color = "You can drive and rent a car";
    resultImage.src = "rental.jpg";
  }
});
