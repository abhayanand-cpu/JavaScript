const task = document.getElementById("addTask");
const container = document.getElementById("task-container");
const date = document.getElementById("date");
const d = new Date();

task.addEventListener("click",()=>{
    let date_value = date.value;

    if( date_value != "")
        container.style.display = "flex";

});



