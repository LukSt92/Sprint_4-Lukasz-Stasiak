const addTaskBtn = document.getElementById("addTaskBtn");
const mainInput = document.getElementById("mainInput");
const alertMsg = "Nazwa zadania nie może być pusta.";

function addTask() {
  if (mainInput.value === "") alert(alertMsg);
  else {
    const listToAdd = document.getElementById("toDoList");
    const newTask = document.createElement("li");
    const newTaskName = document.createElement("span");
    const newEditBtn = document.createElement("button");
    newEditBtn.innerText = "Edytuj";
    newEditBtn.addEventListener("click", editTask);
    const newDeleteBtn = document.createElement("button");
    newDeleteBtn.innerText = "Usuń";
    newDeleteBtn.addEventListener("click", deleteTask);
    newTaskName.innerText = mainInput.value;
    listToAdd.appendChild(newTask);
    newTask.appendChild(newTaskName);
    newTask.appendChild(newEditBtn);
    newTask.appendChild(newDeleteBtn);
    mainInput.value = "";
  }
}
function editTask() {
  this.removeEventListener("click", editTask);
  const currentTask = this.parentNode;
  let nameToEdit = currentTask.firstChild;
  const editInput = document.createElement("input");
  editInput.value = nameToEdit.innerText;
  currentTask.insertBefore(editInput, this);
  nameToEdit.innerText = "";
  this.innerText = "Zatwierdź zmiany";
  this.addEventListener("click", function saveChanges() {
    const validCheck = editInput.value.length > 0;
    console.log(validCheck);
    if (!validCheck) {
      alert(alertMsg);
    } else {
      nameToEdit.innerText = editInput.value;
      editInput.remove();
      this.removeEventListener("click", saveChanges);
      this.innerText = "Edytuj";
      this.addEventListener("click", editTask);
    }
  });
}
function deleteTask() {
  taskToDelete = this.parentNode;
  taskToDelete.remove();
}
addTaskBtn.addEventListener("click", addTask);
