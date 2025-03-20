let task = document.querySelector("#task");
let addTaskBtn = document.querySelector("#addingTaskBtn");
let taskList = document.querySelector("#tasks");


addTaskBtn.addEventListener("click", function(event) {
    let taskValue = task.value.trim();
    if (taskValue === "") {
        alert("Please enter a task!");
        return;
    }
    addTask(taskValue);
});

function addTask(taskValue) {
    let taskItem = document.createElement("li");
    taskItem.textContent = taskValue;
    
    let deletebtn = document.createElement("button");
    deletebtn.innerHTML = "<i class='bx bx-x'></i>";
    deletebtn.classList.add("btn-cross");
    
    deletebtn.addEventListener("click", function() {
        taskList.removeChild(taskItem);
        taskList.removeChild(deletebtn);
    });
    
    taskList.appendChild(deletebtn);
    taskList.appendChild(taskItem);

    
    task.value = "";
    task.focus();    
}

