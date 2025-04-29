import { addTaskToProject } from "./Project";
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
function getContainer(){
    return document.getElementById("container");
}
//project names display
const projectSidebar=document.getElementById("projects");
function displayProjectNames(array){
    removeAllChildNodes(projectSidebar);
    array.forEach((obj)=>{
        const nameDiv=document.createElement("div");
        nameDiv.innerText=obj.name;
        nameDiv.addEventListener("click",()=>{
            alert("clicked "+obj.name);
            displayProject(obj);
        })
        projectSidebar.appendChild(nameDiv);
    })
}
//project display
function displayProject(obj){
    const container=getContainer();
    displayProjectContent(obj,container);
}
function displayProjectContent(obj,container){
    removeAllChildNodes(container);
    const projectName=document.createElement("div");
    projectName.innerText=obj.name;
    projectName.id="nameDiv";
    container.appendChild(projectName);
    //add task to project
    const addButton=document.createElement("button");
    addButton.innerText="Add task to project";
    container.appendChild(addButton);
    addButton.addEventListener("click",()=>{
        addTaskToProject(obj);
        displayProjectContent(obj,container);
    })
    //display tasks
    obj.tasks.forEach((task)=>{
        const name=document.createElement("div");
        name.innerText="Name: "+task.name;
        const dueDate=document.createElement("div");
        dueDate.innerText="dueDate: "+task.dueDate;
        container.appendChild(name);
        container.appendChild(dueDate);
    })
}
export{displayProjectNames};