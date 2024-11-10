const addTaskBtn = document.getElementById("addTaskBtn");
const mainInput = document.getElementById("mainInput");

function addTask() {
  if (mainInput.value === "") alert("Nazwa zadania nie może być pusta");
  else {
    const listToAdd = document.getElementById("toDoList");
    const newTask = document.createElement("li");
    const newEditBtn = document.createElement("button");
    newEditBtn.setAttribute("class", "editBtn");
    newEditBtn.innerText = "Edytuj";
    const newDeleteBtn = document.createElement("button");
    newDeleteBtn.setAttribute("class", "deleteBtn");
    newDeleteBtn.innerText = "Usuń";
    newTask.innerText = mainInput.value;
    listToAdd.appendChild(newTask);
    newTask.appendChild(newEditBtn);
    newTask.appendChild(newDeleteBtn);
    mainInput.value = "";
  }
}
addTaskBtn.addEventListener("click", addTask);
