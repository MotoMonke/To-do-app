import { createProject,createTodo,addTodo } from "./modules/Project";
import "./styles.css";
function saveProjectArray(){
    localStorage.setItem("Projects",JSON.stringify(projectsArray));
}
function loadProjectArray() {
    const data = localStorage.getItem("Projects");
    return data ? JSON.parse(data) : [];
}
function newProject(){
    const project=createProject(window.prompt("Project name:"));
    projectsArray.push(project);
    saveProjectArray();
}
function newTodo(project){
    return addTodo(project,createTodo(window.prompt("name:"),window.prompt("date:")));
}

let projectsArray=loadProjectArray();
//DOM
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
const newProjectButton=document.getElementById("new-project");
newProjectButton.addEventListener("click",()=>{
    newProject();
    displayProjectNames();
})
function displayProject(obj){
    const container=document.getElementById("container");
    removeAllChildNodes(container);
    const projectName=document.createElement("div");
    projectName.innerText=obj.name;
    projectName.className="project-name";
    const newTodoButton=document.createElement("button");
    newTodoButton.innerText="New Todo";
    newTodoButton.addEventListener("click",()=>{
        newTodo(obj);
        saveProjectArray();
        displayProject(obj);
    })
    container.appendChild(projectName);
    container.appendChild(newTodoButton);
    obj.array.forEach(element=>{
        const name=element.name;
        const date=element.date;
        const nameText=document.createElement("div");
        const dateText=document.createElement("div");
        nameText.innerText=name;
        dateText.innerText=date;
        const todoDiv=document.createElement("div");
        todoDiv.className="todo-div";
        todoDiv.appendChild(nameText);
        todoDiv.appendChild(dateText);
        container.appendChild(todoDiv);
    })
}
function displayProjectNames(){
    const container=document.getElementById("sidebar");
    removeAllChildNodes(container);
    projectsArray.forEach(element => {
        const nameDiv=document.createElement("div");
        nameDiv.innerText=element.name;
        container.appendChild(nameDiv);
        nameDiv.addEventListener("click",()=>{
            alert("clicked");
            displayProject(element);
        })
    });
}
displayProjectNames();
