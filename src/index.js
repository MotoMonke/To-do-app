import "./styles.css";
//todos
class Todo{
    constructor(name,dueDate){
        this.name=name;
        this.dueDate=dueDate;
    }
}
let todosArray=[];
function createTodo(){
    const name=window.prompt("name");
    const dueDate=window.prompt("due date");
    return new Todo(name,dueDate);
}
function addTodo(){
    todosArray.push(createTodo());
}
//projects
let projectArray=[];
class Project{
    constructor(name){
        this.name=name;
        this.tasks=[];
    }
    addTask(task){
        this.tasks.push(task);
    }
}
function createProject(){
    const name=window.prompt("Project name");
    const project=new Project(name);
    projectArray.push(project);
}
function addTaskToProject(project){
    project.addTask(createTodo());
}
//DOM
const newTodo=document.getElementById("new-todo");
const newProject=document.getElementById("new-project");
newTodo.addEventListener("click",()=>{
    addTodo();
    displayTodosArray();
})
newProject.addEventListener("click",()=>{
    createProject();
    displayProjectNames();
})
function getContainer(){
    return document.getElementById("container");
}
//DOM displaying projects
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
const projectSidebar=document.getElementById("projects");
function displayProjectNames(){
    removeAllChildNodes(projectSidebar);
    projectArray.forEach((obj)=>{
        const nameDiv=document.createElement("div");
        nameDiv.innerText=obj.name;
        nameDiv.addEventListener("click",()=>{
            alert("clicked "+obj.name);
            displayProject(obj);
        })
        projectSidebar.appendChild(nameDiv);
    })
} 
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
//DOM displaying todoArray
const selectTodos=document.getElementById("todos");
selectTodos.addEventListener("click",()=>{
    displayTodosArray();
    alert("clicked");
})
function displayTodosArray(){
    const container=getContainer();
    removeAllChildNodes(container);
    todosArray.forEach((task)=>{
        const name=document.createElement("div");
        name.innerText="Name: "+task.name;
        const dueDate=document.createElement("div");
        dueDate.innerText="dueDate: "+task.dueDate;
        container.appendChild(name);
        container.appendChild(dueDate);
    })
}
//