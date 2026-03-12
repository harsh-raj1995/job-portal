let add = document.getElementById("add");
let nameInput = document.getElementById("name");
let amount = document.getElementById("amount");
let category = document.getElementById("category");
let list = document.querySelector("ol");

let food = 0;
let travel = 0;
let shopping = 0;

let total = 0;

let totalDisplay = document.getElementById("total-expense");
let foodDisplay = document.getElementById("food-expense");
let travelDisplay = document.getElementById("travel");
let shoppingDisplay = document.getElementById("shopping");

add.addEventListener("click", function(event) {

    if(nameInput.value === "" || amount.value === "") {
        alert("Please fill in all fields");
        event.preventDefault();
        return;
    }

    let value = Number(amount.value);
    event.preventDefault();
    if(value < 0) {
        alert("Please enter a positive amount");
        return;
    }
    if(category.value === "food") {
        food += value;
        foodDisplay.textContent = food+'rs';
    }
    else if(category.value === "travel") {
        travel += value;
        travelDisplay.textContent = travel+'rs';
    }
    else if(category.value === "shopping") {
        shopping += value;
        shoppingDisplay.textContent = shopping+'rs';
    }

    total = food + travel + shopping;
    totalDisplay.textContent = total+'rs';

    let li = document.createElement("li");

li.innerHTML = `
${nameInput.value} - ${value}rs (${category.value})
<button onclick="updateExpense(this)">Update</button>
<button onclick="deleteExpense(this, ${value}, '${category.value}')">Delete</button>
`;

    list.appendChild(li);

    nameInput.value = "";
    amount.value = "";
    category.value = "food";
});

let updateNameInput = document.getElementById("update-name");
let updateAmount = document.getElementById("update-amount");
let updateCategory = document.getElementById("update-category");

function updateExpense(button) {

    let li = button.parentElement;

    let [name, amountCategory] = li.firstChild.textContent.split(" - ");
    let [amount, category] = amountCategory.split(" (");

    category = category.slice(0, -1);

    updateNameInput.value = name;
    updateAmount.value = amount.replace("rs", "");
    updateCategory.value = category;

    li.remove();
}

let updateButton = document.getElementById("update");

updateButton.addEventListener("click", function(event){

    if(updateNameInput.value === "" || updateAmount.value === "") {
        alert("Please fill in all fields");
        event.preventDefault();
        return;
    }
    if(Number(updateAmount.value) < 0) {
        alert("Please enter a positive amount");
        event.preventDefault();
        return;
    }

    let li = document.createElement("li");

    li.innerHTML = `
        ${updateNameInput.value} - ${updateAmount.value}rs (${updateCategory.value})
        <button onclick="updateExpense(this)">Update</button>
        <button onclick="this.parentElement.remove()">Delete</button>
    `;

    list.appendChild(li);

    updateNameInput.value = "";
    updateAmount.value = "";
    updateCategory.value = "food";
});

function deleteExpense(button, value, category){

    if(category === "food") food -= value;
    if(category === "travel") travel -= value;
    if(category === "shopping") shopping -= value;

    total = food + travel + shopping;

    foodDisplay.textContent = food+'rs';
    travelDisplay.textContent = travel+'rs';
    shoppingDisplay.textContent = shopping+'rs';
    totalDisplay.textContent = total+'rs';

    button.parentElement.remove();
}