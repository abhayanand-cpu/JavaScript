const fetchtask = document.getElementById("addTask");
const container = document.getElementById("task-container");
const date = document.getElementById("date");
const content = document.getElementById("taskDes");

const d = new Date();

fetchtask.addEventListener("click",()=>{
    let date_value = date.value;

    if( date_value != "")
        container.style.display = "flex";
});

function confirmReq(){


    if( content.value != "" ){
        let div = document.createElement('div');
        document.body.append(div);
        div.setAttribute("class","addedTask");
        let child = document.createElement('div');
        div.appendChild(child);
        child.setAttribute("id","time");
        let child2 = document.createElement('div');
        div.appendChild(child2);
        child.setAttribute("id","description");       
        
    }
    const descri = document.getElementById("description");
    const fetchTime = document.getElementById("time");
    descri.innerText = content.value;

    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();

    fetchTime.innerText = date.value+":"+h+":"+m+":"+s;
}



