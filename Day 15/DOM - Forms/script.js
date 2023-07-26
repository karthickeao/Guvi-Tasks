const form = document.getElementById("form");
const table = document.querySelector("table");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  debugger;
  const Firstname = document.getElementById("first-name").value;
  const Lastname = document.getElementById("last-name").value;
  const Pincode=document.getElementById("pincode").value;
  const Address=document.getElementById("address").value;
  
  

  const gender = document.querySelector('input[name="gender"]:checked').value;

  const foodcheckboxes = document.querySelectorAll(
    'input[name="food"]:checked'
  );
  const foodChoices = Array.from(foodcheckboxes).map(
    (checkbox) => checkbox.value
  );

  if (foodChoices.length < 2) {
    alert("Please choose at least 2 food options.");
    return;
  }

  const newRow = table.insertRow(); //document.createElement("tr");
  const firstNameCol = newRow.insertCell(); //document.createElement("td");
  const lastNameCol = newRow.insertCell();
  const genderCol = newRow.insertCell();
  const pinCol = newRow.insertCell();
  const AddCol = newRow.insertCell();    //document.createElement("td");
  const foodCol = newRow.insertCell(); //document.createElement("td");

  firstNameCol.textContent = Firstname;
  lastNameCol.textContent = Lastname;
  genderCol.textContent = gender; 
  pinCol.textContent=Pincode;
  AddCol.textContent=Address;  
  foodCol.textContent = foodChoices.join(", ");

  form.reset();
});