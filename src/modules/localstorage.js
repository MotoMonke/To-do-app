function stringify(array){
    return JSON.stringify(array);
}
function updateTodoStorage(array){
    localStorage.setItem("Todo", stringify(array));
}
function getTodoFromStorage(){
    if(localStorage.getItem("Todo")){
        return JSON.parse(localStorage.getItem("Todo"));
    }else{return []}
}
export {updateTodoStorage,getTodoFromStorage};