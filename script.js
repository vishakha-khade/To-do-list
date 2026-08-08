
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

let savedTask = JSON.parse(localStorage.getItem("tasks"));

if(savedTask){
    tasks = savedTask;
}
displayTask(tasks);

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
    displayTask(tasks);
    task.value = "";
    time.value = "";
});
function displayTask(taskArray){
    taskList.innerHTML = "";

    taskArray.forEach(function(item, index){

        let displaydiv = document.createElement("div");
        displaydiv.className = "displaydiv"
        let check = document.createElement("input");
        check.checked = item.complete;
        check.type = "checkbox"
        check.className = "tickbox"
        let taskText = document.createElement("span");
        taskText.textContent = item.task + " " + item.time;
        
        
        let deleteBtn = document.createElement('button');
        deleteBtn.textContent = "Delete";
        deleteBtn.className = "deletebtn"
        displaydiv.appendChild(check);
        displaydiv.appendChild(deleteBtn);
        displaydiv.appendChild(taskText);

        taskList.appendChild(displaydiv);
       

        deleteBtn.addEventListener("click", function(){
        tasks.splice(index,1);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        displayTask(tasks);

});
check.addEventListener("click", function(){
            item.complete = check.checked;
            localStorage.setItem("tasks", JSON.stringify(tasks));
            taskText.textContent = item.task + " " + item.time;
            displayTask(tasks)
            item.complete = check.checked;

if(item.complete){
    taskText.style.textDecoration = "line-through";
}else{
    taskText.style.textDecoration = "none";
}
localStorage.setItem("tasks", JSON.stringify(tasks));
        })

    })
    
};
complete.addEventListener('click', function(){
    let completedTask = tasks.filter(function(item){
        return item.complete;
       
    });
     displayTask(completedTask);
})
allBtn.addEventListener('click', function(){
    displayTask(tasks);
});
pending.addEventListener("click", function(){

    let pendingTask = tasks.filter(function(item){
        return !item.complete;
    });

    displayTask(pendingTask);
});
