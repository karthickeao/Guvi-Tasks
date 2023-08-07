// sample data to store initial records
let data=[
    {name:"Guvi WD Batch 49-Tamil", age:20},
    {name:"Guvi WD Batch 50-Tamil", age:21},
    {name:"Guvi WD Batch 51-Tamil", age:22},
    {name:"Guvi WD Batch 52-Tamil", age:23},
    {name:"Guvi WD Batch 53-Tamil", age:24},
];

// function to display data in the table
function displayData() {
    const dataRows = document.getElementById("dataRows");
    dataRows.innerHTML = "";
    data.forEach((value, index)=> {
        const row =  `
        <tr>
        <td>${value.name}</td>      
        <td>${value.age}</td>
        <td>
        <button class="btn btn-info edit-btn" data-index="${index}">Edit</button>
        <button class="btn btn-danger delete-btn" data-index="${index}">Delete</button>
        </td>
        </tr>`;
        dataRows.insertAdjacentHTML("beforeend", row);
    });
}

// function to handle form submission
function handleFormSubmit(event){
    event.preventDefault();
    const nameInput = document.getElementById("name");
    const ageInput = document.getElementById("age");

    const name = nameInput.value;
    const age = ageInput.value;

// add data to the array
    data.push({name,age});

// clear form fields
    nameInput.value="";
    ageInput.value="";

    // display updates data in the table
displayData();
}

// Function to handle delete button click
function handleDeleteClick(event) {
    const index = event.target.getAttribute("data-index");
    data.splice(index, 1);
    displayData();
  }

// Function to handle edit button click
function handleEditClick(event) {
    const index = event.target.getAttribute("data-index");
    const record = data[index];

    const nameInput = document.getElementById("name");
    const ageInput = document.getElementById("age");

    nameInput.value = record.name;
    ageInput.value = record.age;

    data.splice(index, 1);
    displayData();
}

// attach event listners
document.getElementById("crudForm").addEventListener("submit", handleFormSubmit);
document.getElementById("dataRows").addEventListener("click", (s) =>{
    // alert(event.target.classlist);
    if (event.target.classList.contains("delete-btn")) {
        handleDeleteClick(event);
      } else if (event.target.classList.contains("edit-btn")) {
        handleEditClick(event);
      }
    });

    displayData();