import "./styles.css";
import { createTodo } from "./modules/Todo";
import { createProject} from "./modules/Project";
import { displayTodosArray } from "./modules/displayTodo";
import { displayProjectNames } from "./modules/displayProject";
import { updateTodoStorage,getTodoFromStorage} from "./modules/localstorage";
//todos

let todosArray=getTodoFromStorage();

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
    updateTodoStorage(todosArray);
    displayTodosArray(getTodoFromStorage());
})

newProject.addEventListener("click",()=>{
    addProjectToArray();
    displayProjectNames(projectArray);
})

selectTodos.addEventListener("click",()=>{
    displayTodosArray(todosArray);
    alert("clicked");
})
displayTodosArray(todosArray);

