function addElement(task){
        var section=document.querySelector(".tasks");

        var new_task=document.createElement("div");
        new_task.classList.add("task-data-row");

        var task_content=document.createElement("div");
        task_content.classList.add("content");

        var task_content_input=document.createElement("input");
        task_content_input.type="text";
        task_content_input.value=task;
        task_content_input.classList.add("text");

        var actiondiv=document.createElement("div")
        actiondiv.classList.add("actions");

        var del_btn=document.createElement("button");
        del_btn.classList.add("delete");
        del_btn.innerHTML="Delete";
        
        actiondiv.appendChild(del_btn);
        task_content.appendChild(task_content_input);
        new_task.appendChild(task_content);
        new_task.appendChild(actiondiv)
        section.appendChild(new_task);
        updateLocalStorage();

        del_btn.addEventListener("click",()=>{
            section.removeChild(new_task);
            updateLocalStorage();
        })

        var input_task=document.querySelector("#new-task");
        input_task.value="";//to clear the add task box;

}

window.addEventListener('load',()=>{
    //populate previously stored data
    console.log(JSON.parse(localStorage.getItem('tasks')));
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const taskList = document.querySelector(".task-data-row");
    savedTasks.forEach(task => {
            addElement(task);
        });

    var form=document.querySelector("#task-entry");
    var input_task=document.querySelector("#new-task");
    
    //add new task row
    form.addEventListener("submit",(e)=>{
        e.preventDefault();
        var task=input_task.value;
        if(!task)
        {
            alert("please enter some task and then add");
            return;
        }
        addElement(task);
    })
})

function updateLocalStorage(){
    const allTaskRows= document.querySelectorAll(".text");
    const taskarr= Array.from(allTaskRows);
    const taskTexts = taskarr.map(task => task.value);
    localStorage.setItem('tasks', JSON.stringify(taskTexts));
}
