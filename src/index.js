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
function deleteObj(obj){
    const index=projectsArray.indexOf(obj);
    projectsArray.splice(index,1);
    saveProjectArray();
    displayProjectNames();
    const container=document.getElementById("container");
    removeAllChildNodes(container);
}
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
        //get name and date
        const name=element.name;
        const date=element.date;
        const nameText=document.createElement("div");
        const dateText=document.createElement("div");
        nameText.innerText=name;
        dateText.innerText=date;
        const todoDiv=document.createElement("div");
        todoDiv.className="todo-div";
        //delete todo button
        const deleteTodoButton = document.createElement("button");
        deleteTodoButton.innerText = "Delete";
        deleteTodoButton.addEventListener("click",()=>{
            const index=obj.array.indexOf(element);
            obj.array.splice(index,1);
            saveProjectArray();
            displayProject(obj);
        })
        //
        todoDiv.appendChild(nameText);
        todoDiv.appendChild(dateText);
        todoDiv.appendChild(deleteTodoButton);
        container.appendChild(todoDiv);
    })
}
function displayProjectNames(){
    const sidebar=document.getElementById("sidebar");
    removeAllChildNodes(sidebar);
    projectsArray.forEach(element => {
        //container of name div and delete button
        const objNameContainer=document.createElement("div");
        objNameContainer.className="object-name";
        sidebar.appendChild(objNameContainer);
        //name div
        const nameDiv=document.createElement("div");
        nameDiv.innerText=element.name;
        nameDiv.addEventListener("click",()=>{
            alert("clicked");
            displayProject(element);
        })
        objNameContainer.appendChild(nameDiv);
        //delete object button
        const deleteObjButton=document.createElement("button");
        deleteObjButton.innerText="Delete";
        deleteObjButton.addEventListener("click",()=>{
            deleteObj(element);
        }); 
        objNameContainer.appendChild(deleteObjButton);
    });
}
displayProjectNames();
