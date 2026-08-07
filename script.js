
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

    tasks.forEach(function(item, index){
        let displaydiv = document.createElement("div");
        displaydiv.className = "displaydiv"
        let check = document.createElement("input");
        check.checked = item.complete;
        check.type = "checkbox"
        check.className = "tickbox"
        let taskText = document.createElement("span");
        taskText.textContent = item.task + " " + item.time;

        // displaydiv.textContent = item.task +" "+  item.time;
        
        
        let deleteBtn = document.createElement('button');
        deleteBtn.textContent = "Delete";
        deleteBtn.className = "deletebtn"
        displaydiv.appendChild(check);
        displaydiv.append(item.task + " " + item.time);
        displaydiv.appendChild(deleteBtn);
        displaydiv.appendChild(taskText);

        taskList.appendChild(displaydiv);
       

        deleteBtn.addEventListener("click", function(){
        tasks.splice(index,1);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        displayTask();

});
check.addEventListener("click", function(){
            // item.complete = check.checked;
            // localStorage.setItem("tasks", JSON.stringify(tasks));
            // taskText.textContent = item.task + " " + item.time;
            // displayTask()
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

