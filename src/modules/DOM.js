import { getProjectsArray,deleteProject,createTODO,deleteTODO} from "./storage";
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
    //project name
    const container=document.getElementById('container');
    removeAllChildNodes(container);
    const projectName=document.createElement('h1');
    projectName.innerText=project.name;
    container.appendChild(projectName);
    //project TODO's
    //add TODO button
    const addTODObtn=document.createElement('button');
    addTODObtn.innerText='add TODO';
    addTODObtn.addEventListener('click',()=>{
        inputNewTODO(project);
        displayProject(project);
    })
    container.appendChild(addTODObtn);
    //display TODO's
    project.todoArray.forEach(element=>{
        //delete TODO button
        const deleteTODObtn=document.createElement('button');
        deleteTODObtn.innerText='delete TODO';
        deleteTODObtn.addEventListener('click',()=>{
            deleteTODO(project,element);
            displayProject(project);
        });
        container.appendChild(deleteTODObtn);
        //TODO name
        const todoName=document.createElement('div');
        todoName.innerText=element.name;
        container.appendChild(todoName);
        //TODO description
        const description=document.createElement('div');
        description.innerText=element.description;
        container.appendChild(description);
        //TODO due date
        const dueDate=document.createElement('div');
        dueDate.innerText=element.dueDate;
        container.appendChild(dueDate);
    });
}
function inputNewTODO(project){
    const name=window.prompt('TODO name:');
    const description=window.prompt('TODO description:');
    const dueDate=window.prompt('due date:');
    createTODO(project,name,description,dueDate);
}
export {inputNewProjectName,displayProjectNames};