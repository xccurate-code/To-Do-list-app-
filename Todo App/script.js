const inputbox=document.getElementById("input-box");
const taskContainer=document.getElementById("list-container");

function AddTask(){
    if(inputbox.value===''){
        alert("Please add a task");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML= inputbox.value;
        taskContainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputbox.value ="";
    saveList();
}

taskContainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveList();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveList();
    }
},false);

function saveList(){
    localStorage.setItem("list",taskContainer.innerHTML);
}

function showList(){
    taskContainer.innerHTML=localStorage.getItem("list");  
}
showList();

