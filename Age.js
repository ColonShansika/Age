document.getElementById("checkButton").addEventListener("click", function() {
  let age = document.getElementById("ageInput").value;
  let resultText = document.getElementById("resultText");
  let resultImage = document.getElementById("resultImage");

  if (age < 16) {
    resultText.innerText = " You cannot drive ";
    resultText.style.color = "red"; // change color
    resultImage.src = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dimensions.com%2Fcollection%2Fbicycles-bikes&psig=AOvVaw0O9KxwiDtrttyxgoyZdP4X&ust=1744391383716000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCMCC17z6zYwDFQAAAAAdAAAAABAE";
  } else if (age >= 16 && age <= 24) {
    resultText.innerText = "You can drive";
    resultText.style.color = "green";
    resultImage.src = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fautomobile&psig=AOvVaw2l86dhSU4tn7RDmokqRbra&ust=1746290743601000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCIi64o6ehY0DFQAAAAAdAAAAABAJ";
  } else if (age > 25) {
    resultText.innerText = "25";
    resultText.style.color = "You can drive and rent a car";
    resultImage.src = "https://www.dispatch.com/gcdn/presto/2021/09/03/NCOD/5dc0b712-e655-4019-bce0-138aa996f41c-thumbnail_CMH_rental_car_center_-_lobby.jpg";
  }
});
