//
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
//
function saveNewProject(obj){
    projectsArray.push(obj);
    saveProjectsArray();
}
function deleteProject(obj){
    const index=projectsArray.indexOf(obj);
    projectsArray.splice(index,1);
    saveProjectsArray();
}
//
class Projects{
    constructor(name){
        this.name=name;
        this.todoArray=[];
    }
}
function createNewProject(projectName){
    const newProject=new Projects(projectName);
    saveNewProject(newProject);
}
export{createNewProject,getProjectsArray};
