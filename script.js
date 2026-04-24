let tasks = [];

// ________Function to Display tasks
function displayTasks() {
  let html = "";
  for (let i = 0; i < tasks.length; i++) {
    html +=
      "<li>" +
      '<input type="checkbox" ' +
      (tasks[i].isDone ? "checked" : "") +
      ' onchange="checkTask(' +
      i +
      ')" />' +
      tasks[i].text +
      ' <button onclick="deleteTask(' +
      i +
      ')">Delete</button></li>';
  }
  document.getElementById("task-list").innerHTML = html;
}

// _________Function to Add a task
function addTask() {
  let taskInput = document.getElementById("task-input");
  let text = taskInput.value;
  if (text === "") {
    return;
  }
  tasks.push({ text, isDone: false });
  taskInput.value = "";
  saveTasks();
  displayTasks();
}

// __________Function to delete task
function deleteTask(i) {
  tasks.splice(i, 1);
  saveTasks();
  displayTasks();
}

// ___________Function to Save tasks
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// __________Function to Load tasks
function loadTasks() {
  let saved = localStorage.getItem("tasks");
  if (saved !== null) {
    tasks = JSON.parse(saved);
  }
}
// __________Load and display tasks when page loads
loadTasks();
displayTasks();

let activeTasks = [];
let complated = [];

//_________Function to show all tasks
function filterAll() {
  displayTasks();
}

//___________ Function to show active tasks
function filterActive() {
  let html = "";
  for (let i = 0; i < tasks.length; i++) {
    if (!tasks[i].isDone) {
      html +=
        "<li>" +
        '<input type="checkbox" onchange="checkTask(' +
        i +
        ' )"/>' +
        tasks[i].text +
        ' <button onclick="deleteTask(' +
        i +
        ')">Delete</button></li>';
    }
  }
  document.getElementById("task-list").innerHTML = html;
}

//__________Function to show complete tasks
function filterCompleted() {
  let html = "";
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].isDone) {
      html +=
        "<li>" +
        '<input type="checkbox" checked onchange="checkTask(' +
        i +
        ' )"/>' +
        tasks[i].text +
        ' <button onclick="deleteTask(' +
        i +
        ')">Delete</button></li>';
    }
  }
  document.getElementById("task-list").innerHTML = html;
}
//_________Function to check checkbox
function checkTask(i) {
  tasks[i].isDone = !tasks[i].isDone;
  saveTasks();
  displayTasks();
}
//_________Function to keep buttons blue
function setActive(btn) {
  document.getElementById("All").classList.remove("active");
  document.getElementById("Active").classList.remove("active");
  document.getElementById("Completed").classList.remove("active");

  btn.classList.add("active");
}
