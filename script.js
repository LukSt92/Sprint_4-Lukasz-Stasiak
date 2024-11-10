const addTaskBtn = document.getElementById("addTaskBtn");
const mainInput = document.getElementById("mainInput");

function addTask() {
  if (mainInput.value === "") alert("Nazwa zadania nie może być pusta");
  else {
    const listToAdd = document.getElementById("toDoList");
    const newTask = document.createElement("li");
    const newTaskName = document.createElement("span");
    const newEditBtn = document.createElement("button");
    newEditBtn.setAttribute("class", "editBtn");
    newEditBtn.innerText = "Edytuj";
    newEditBtn.addEventListener("click", editTask);
    const newDeleteBtn = document.createElement("button");
    newDeleteBtn.setAttribute("class", "deleteBtn");
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
  const taskToEdit = this.parentNode;
  let nameToEdit = taskToEdit.firstChild.innerText;
  const editInput = document.createElement("input");
  editInput.setAttribute("id", "temporaryInput");
  editInput.value = nameToEdit;
  taskToEdit.insertBefore(editInput, this);
  const toRemove = document.getElementById("temporaryInput");
  taskToEdit.firstChild.innerText = "";
  this.innerText = "Zatwierdź zmiany";
  this.addEventListener("click", function saveChanges() {
    const validCheck = editInput.value.length > 0;
    console.log(validCheck);
    if (!validCheck) {
      alert("Nazwa zadania nie może być pusta.");
    } else {
      taskToEdit.firstChild.innerText = editInput.value;
      toRemove.remove();
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
