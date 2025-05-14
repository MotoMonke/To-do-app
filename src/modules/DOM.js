import { getProjectsArray,deleteProject} from "./storage";
function inputNewProjectName(){
    return window.prompt('Project name');
}
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
function displayProjectNames(){
    const projectsArray=getProjectsArray()
    const sidebar=document.getElementById('sidebar');
    removeAllChildNodes(sidebar);
    projectsArray.forEach(element => {
        //adds clickable project name to sidebar and delete button
        ///project name
        const nameDiv=document.createElement('div');
        nameDiv.className='project-name';
        nameDiv.innerText=element.name;
        nameDiv.addEventListener('click',()=>{
            displayProject(element);
        })
        ///delete button
        const deleteButton=document.createElement('button');
        deleteButton.innerText='Delete Project';
        deleteButton.addEventListener('click',()=>{
            deleteProject(element);
            displayProjectNames();
        });
        sidebar.appendChild(deleteButton);
        sidebar.appendChild(nameDiv);
    });
}
function displayProject(project){
    const container=document.getElementById('container');
    removeAllChildNodes(container);
    const projectName=document.createElement('h1');
    projectName.innerText=project.name;
    container.appendChild(projectName);
    project.todoArray.forEach(element=>{
        const todoName=document.createElement('div');
        todoName.innerText=element.name;
        container.appendChild(todoName);
    });
}
export {inputNewProjectName,displayProjectNames};