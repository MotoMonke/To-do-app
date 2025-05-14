//Local storage
function loadProjectsArray(){
    const data=localStorage.getItem("Projects");
    return data ? JSON.parse(data) : [];
}
let projectsArray=loadProjectsArray();
function saveProjectsArray(){
    localStorage.setItem("Projects",JSON.stringify(projectsArray));
}
function getProjectsArray(){
    return projectsArray;
}
//saving/deleting projects from projectArray and local storage
function saveNewProject(obj){
    projectsArray.push(obj);
    saveProjectsArray();
}
function deleteProject(obj){
    const index=projectsArray.indexOf(obj);
    projectsArray.splice(index,1);
    saveProjectsArray();
}
//creating Project obj
class Project{
    constructor(name){
        this.name=name;
        this.todoArray=[];
    }
}
function createNewProject(projectName){
    const newProject=new Project(projectName);
    saveNewProject(newProject);
}
//Project TODO's
function addTODO(TODO,project){
    project.todoArray.push(TODO);
    saveProjectsArray();
}
function createTODO(project,name,description,dueDate){
    const TODO={name,description,dueDate};
    addTODO(TODO,project);
}
function deleteTODO(project,TODO){
    const index=project.todoArray.indexOf(TODO);
    project.todoArray.splice(index,1);
    saveProjectsArray();
}
//TODO's separate array
function loadTODOarray(){
    const data=localStorage.getItem("TODO");
    return data ? JSON.parse(data) : [];
}
let TODOarray=loadTODOarray();
function saveTODOarray(){
    localStorage.setItem("TODO",JSON.stringify(TODOarray));
}

//project export
export{createNewProject,getProjectsArray,deleteProject,createTODO,deleteTODO};
//TODO export