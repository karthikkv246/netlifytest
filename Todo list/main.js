window.addEventListener('load',()=> {
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    const list_el = document.querySelector("#tasks");

    form.addEventListener('submit', (e)=>{
        e.preventDefault();

        const task= input.value;

        if(!task){
            alert("Please fill out the task");
            return;
        } 
        const task_el= document.createElement("div");
        task_el.classList.add("task");

        const task_content_el= document.createElement("div");
        task_content_el.classList.add("content");
       

        task_el.appendChild(task_content_el);
        const task_input_el= document.createElement("input");
        task_input_el.classList.add("text");
        task_input_el.type="text";
        task_input_el.value= task;
        task_input_el.setAattribute("readonly", "readonly");

        task_content_el.appendChild(task_input_el);

        const task_edit_el= document.createElement("div");
        task_actions_el.classList.add("actions");

        const task_edit_el= document.createElement("button");
        task_edit_el.classList.add("edit");

        const task_delete_el= document.createElement("button");

        list_el.appendChild(task_el);

        const task_actions_el= document.createElement("div");
        task_actions_el.classList.add("actions");

    list_el.appendChild(task_el);

    })
})