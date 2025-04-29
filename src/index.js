import "./styles.css";
import { createTodo } from "./modules/Todo";
import { createProject} from "./modules/Project";
import { displayTodosArray } from "./modules/displayTodo";
import { displayProjectNames } from "./modules/displayProject";
//todos

let todosArray=[];
function addTodoToArray(){
    const name=window.prompt("name");
    const dueDate=window.prompt("dueDate");
    todosArray.push(createTodo(name,dueDate));
}
//projects
let projectArray=[];
function addProjectToArray(){
    const name=window.prompt("Project name");
    projectArray.push(createProject(name));
}
//DOM
const newTodo=document.getElementById("new-todo");
const newProject=document.getElementById("new-project");
const selectTodos=document.getElementById("todos");

newTodo.addEventListener("click",()=>{
    addTodoToArray();
    displayTodosArray(todosArray);
})

newProject.addEventListener("click",()=>{
    addProjectToArray();
    displayProjectNames(projectArray);
})

selectTodos.addEventListener("click",()=>{
    displayTodosArray(todosArray);
    alert("clicked");
})

