//local storage
function loadData(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
}

function saveData(key, array) {
    localStorage.setItem(key, JSON.stringify(array));
}

function createItem(key, array, obj) {
    array.push(obj);
    saveData(key, array);
}

function deleteItem(key,array,obj){
    const index = array.indexOf(obj);
    array.splice(index,1);
    saveData(key, array);
}
//TODO
let TODOarray=loadData('TODO');
function getTODOarray(){
    return TODOarray;
}
function createTODO(name,description,dueDate){
    const obj = {name,description,dueDate};
    createItem('TODO',TODOarray,obj);
}
function deleteTODO(obj){
    deleteItem('TODO',TODOarray,obj);
}
export {createTODO,deleteTODO,getTODOarray};
//projects
let projectsArray=loadData('Projects');
function getProjectArray(){
    return projectsArray;
}
function createProject(name){
    const project={
        name:name,
        TODOarray:[]
    }
    createItem('Projects',projectsArray,project);
}
function deleteProject(obj){
    deleteItem('Projects',projectsArray,obj);
}
function createProjectTODO(project,name,description,dueDate){
    const TODO={name,description,dueDate};
    project.TODOarray.push(TODO);
    saveData('Projects', projectsArray);
}
function deleteProjectTODO(project,TODO){
    const index =project.TODOarray.indexOf(TODO);
    project.TODOarray.splice(index,1);
    saveData('Projects',projectsArray)
}
export {getProjectArray,createProject,deleteProject,createProjectTODO,deleteProjectTODO}