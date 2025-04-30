class Project{
    constructor(name){
        this.name=name;
        this.array=[];
    }
}
function createProject(name){
    return new Project(name);
}
function createTodo(name,date){
    return {name,date}
}
function addTodo(Project,todo){
    Project.array.push(todo);
}
export {createProject,createTodo,addTodo};