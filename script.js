let tasks = [];

// Function to Display tasks
function displayTasks() {
  let html = "";
  for (let i = 0; i < tasks.length; i++) {
    html +=
      "<li>" +
      '<input type="checkbox" ' +
      (tasks[i].isDone ? "checked" : "") +
      ' onchange="toggleTask(' +
      i +
      ')" />' +
      tasks[i].text +
      ' <button onclick="deleteTask(' +
      i +
      ')">Delete</button></li>';
  }
  document.getElementById("task-list").innerHTML = html;
}

// Function to Add a task
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

// Function to delete task
function deleteTask(i) {
  tasks.splice(i, 1);
  saveTasks();
  displayTasks();
}

// Function to Save tasks
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Function to Load tasks
function loadTasks() {
  let saved = localStorage.getItem("tasks");
  if (saved !== null) {
    tasks = JSON.parse(saved);
  }
}
// Load and display tasks when page loads
loadTasks();
displayTasks();

let activeTasks = [];
let complated = [];

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

function checkTask(i) {
  tasks[i].isDone = !tasks[i].isDone;
  saveTasks();
  displayTasks();
}

function filterAll() {
  displayTasks();
}

function setActive(btn) {
  document.getElementById("All").classList.remove("active");
  document.getElementById("Active").classList.remove("active");
  document.getElementById("Completed").classList.remove("active");

  btn.classList.add("active");
}
