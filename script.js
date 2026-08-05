
const task = document.querySelector('.task-input');
const time = document.querySelector('.time-input');
const addBtn = document.querySelector('.add-btn');
const allBtn = document.querySelector('.all-btn')
const pending = document.querySelector('.pending-btn');
const complete = document.querySelector('.completed-btn');
const taskIn = document.querySelector('.task-error');
const timeError = document.querySelector('.time-error');
const taskList = document.querySelector('.task-list');

let tasks = [];

addBtn.addEventListener('click', function(){


    let usertask = task.value;
    let usertime = time.value;

   if(usertask === ""){
        taskIn.textContent = "Please enter your task"
        return
    };
    if(usertime === ""){
        timeError.textContent = "Please select task timing"
        return
    };

    let taskObj = {
        task: usertask,
        time: usertime,
        complete: false

    }
    tasks.push(taskObj);
    localStorage.setItem("tasks", JSON.stringify(tasks));

    taskIn.textContent = "";
    timeError.textContent = "";
    displayTask();
    task.value = "";
    time.value = "";
});
function displayTask(){
    taskList.innerHTML = "";

    tasks.forEach(function(item, tasks){
        let displaydiv = document.createElement("div");
        displaydiv.className = "displaydiv"
        let check = document.createElement("input");
        check.type = "checkbox"
        check.className = "tickbox"
        taskList.appendChild(check)
        displaydiv.textContent = item.task +" "+  item.time;
        taskList.appendChild(displaydiv);
        
        let deleteBtn = document.createElement('button');
        taskList.appendChild(deleteBtn);
        deleteBtn.textContent = "Delete";
    })
    
};
function update(){

}


