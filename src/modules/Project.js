import { createTodo } from "./Todo";
class Project{
    constructor(name){
        this.name=name;
        this.tasks=[];
    }
    addTask(task){
        this.tasks.push(task);
    }
}
function createProject(name){
    return new Project(name);
}
function addTaskToProject(project){
    const name=window.prompt("name");
    const dueDate=window.prompt("dueDate")
    project.addTask(createTodo(name,dueDate));
}
export {createProject};
export {addTaskToProject};