let selectedRow = null; // To store the current row for editing

const userName=document.querySelector("#name");
const birthDate=document.querySelector("#dob");
const email=document.querySelector("#email");
const city=document.querySelector("#city");
const dateValue=birthDate.value;

function returnAge(){
let date=new Date();
const currentYear=date.getFullYear();
const enteredYear=birthDate.value.split("-")[0]
if(enteredYear==0){
    return 0;
}
else{
 return (currentYear-enteredYear);
}
}
function userData(){
    if(selectedRow===null){
        addDataToTable();
    }
    else{
        updateData();
    }
    resetFormData();
}


function addDataToTable(){
let tableBody=document.getElementById("tbody");
let tr=document.createElement("tr");
let td1=tr.appendChild(document.createElement("td"));
td1.textContent=userName.value;
let td2=tr.appendChild(document.createElement("td"));
td2.textContent=returnAge();
let td3=tr.appendChild(document.createElement("td"));
td3.textContent=email.value;
let td4=tr.appendChild(document.createElement("td"));
td4.textContent=city.value;
let td5=tr.appendChild(document.createElement("td"));
td5.innerHTML=`<a onClick="editFormData(this)" return false; href="#">Edit</a> <a  onClick="deleteRow(this)" return false; href="#">Delete</a>`
td5.style.textAlign="center"
tableBody.appendChild(tr);
}


function resetFormData() {
    userName.value="";
    birthDate.value="";
    email.value="";
    city.value="";
}

function editFormData(link){
    selectedRow = link.parentElement.parentElement;
    userName.value = selectedRow.cells[0].textContent;
    birthDate.value = ''; // Set birthDate based on the current age if possible
    email.value = selectedRow.cells[2].textContent;
    city.value = selectedRow.cells[3].textContent;
}
function updateData(){
    selectedRow.cells[0].textContent = userName.value;
    selectedRow.cells[1].textContent = returnAge();
    selectedRow.cells[2].textContent = email.value;
    selectedRow.cells[3].textContent = city.value;
    selectedRow = null;
}

function deleteRow(link) {
    let row = link.parentElement.parentElement;
    row.parentNode.removeChild(row);
}

let submitBtn=document.querySelector(".sbtBtn");
submitBtn.addEventListener("click",(e)=>{
    userData();
    resetFormData();
    e.preventDefault()
})




