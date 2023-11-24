window.addEventListener('load',()=>{
    var form=document.querySelector("#task-entry");
    var input_task=document.querySelector("#new-task");
    var section=document.querySelector(".tasks");

    form.addEventListener("submit",(e)=>{
        e.preventDefault();

        var task=input_task.value;
        if(!task)
        {
            alert("please enter some task and then add");
            return;
        }

        var new_task=document.createElement("div");
        new_task.classList.add("task-data-row");

        var task_content=document.createElement("div");
        task_content.classList.add("content");

        var task_content_input=document.createElement("input");
        task_content_input.type="text";
        task_content_input.value=task;
        task_content_input.classList.add("text");
        task_content_input.setAttribute("readonly", "readonly");

        var actiondiv=document.createElement("div")
        actiondiv.classList.add("actions");
        var edit_btn=document.createElement("button");
        edit_btn.classList.add("edit");
        edit_btn.innerHTML="Edit";

        var del_btn=document.createElement("button");
        del_btn.classList.add("delete");
        del_btn.innerHTML="Delete";
        
        actiondiv.appendChild(edit_btn);
        actiondiv.appendChild(del_btn);
        task_content.appendChild(task_content_input);
        new_task.appendChild(task_content);
        new_task.appendChild(actiondiv)
        section.appendChild(new_task);

        edit_btn.addEventListener('click',()=>{
            if(edit_btn.innerHTML==="Edit"){
                task_content_input.removeAttribute("readonly");
                task_content_input.focus();
                edit_btn.innerHTML="Save";
            }
            else{
                task_content_input.setAttribute("readonly", "readonly");
                edit_btn.innerHTML="Edit";
            }
        })
        
        del_btn.addEventListener("click",()=>{
            section.removeChild(new_task);
        })

        input_task.value="";//to clear the add task box;
        
    })
})
