class Todo{
    constructor(name,dueDate){
        this.name=name;
        this.dueDate=dueDate;
    }
}
function createTodo(name,dueDate){
    return new Todo(name,dueDate);
}
export {createTodo};